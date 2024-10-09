import express, { Request, Response, NextFunction } from 'express';
import { MongoClient, ObjectId, Collection } from 'mongodb';
import cors from 'cors';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASS}@${process.env.HOST}`;
const client = new MongoClient(uri);
const secretKey = process.env.SECRET_KEY || 'your_secret_key';

let usersCollection: Collection | null = null;
let scoresCollection: Collection | null = null;

async function run() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");

        const db = client.db("tetris");
        usersCollection = db.collection("users");
        scoresCollection = db.collection("scores");

        // Middleware to check connection
        app.use((req: Request, res: Response, next: NextFunction) => {
            if (usersCollection !== null && scoresCollection !== null) {
                next();
            } else {
                res.status(503).send();
            }
        });

        // User registration
        app.post('/register', async (req: Request, res: Response) => {
            try {
                const { username, password } = req.body;
                const hashedPassword = await bcrypt.hash(password, 10);
                const result = await usersCollection!.insertOne({ username, password: hashedPassword });
                res.json(result);
            } catch (err) {
                console.error('Registration error:', err);
                res.status(500).send(err);
            }
        });

        // User login
        app.post('/login', async (req: Request, res: Response) => {
            try {
                const { username, password } = req.body;
                const user = await usersCollection!.findOne({ username });
                if (user && await bcrypt.compare(password, user.password)) {
                    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
                    res.json({ token });
                } else {
                    res.status(401).send('Invalid credentials');
                }
            } catch (err) {
                console.error('Login error:', err);
                res.status(500).send(err);
            }
        });

        // Middleware to authenticate token
        app.use((req: Request, res: Response, next: NextFunction) => {
            const token = req.headers['authorization'];
            if (token) {
                jwt.verify(token, secretKey, (err: any, decoded: any) => {
                    if (err) {
                        return res.status(401).send('Invalid token');
                    } else {
                        req.body.username = decoded.username;
                        next();
                    }
                });
            } else {
                res.status(401).send('No token provided');
            }
        });

        // Submit score
        app.post('/submit-score', async (req: Request, res: Response) => {
            try {
                const { username, score } = req.body;
                const result = await scoresCollection!.insertOne({ username, score, date: new Date() });
                res.json(result);
            } catch (err) {
                console.error('Submit score error:', err);
                res.status(500).send(err);
            }
        });

        // Get leaderboard
        app.get('/leaderboard', async (req: Request, res: Response) => {
            try {
                const leaderboard = await scoresCollection!.find().sort({ score: -1 }).limit(10).toArray();
                res.json(leaderboard);
            } catch (err) {
                console.error('Leaderboard retrieval error:', err);
                res.status(500).send(err);
            }
        });

        // Serve the main page
        app.get('/', (req: Request, res: Response) => {
            res.sendFile(__dirname + '/public/index.html');
        });

        // Start the server
        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}/`);
        });
    } catch (err) {
        console.error(err);
    }
}

run();

app.use(cors());
app.use(express.json());
app.use(express.static('dist'));

// Log all requests
app.use((req: Request, res: Response, next: NextFunction) => {
    console.log('url:', req.url);
    next();
});