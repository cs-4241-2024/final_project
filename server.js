// Import the express module
const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
// Import Middlewares (for login functionality and security purposes)
const path = require('path');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
//ENV file
require("dotenv").config();

// Initialize the express app
const app = express();
const dbName = "FinalDB";
const usersCollectionName = "users";
const groupCollectionName = "group";
const taskCollectionName = 'task';
const sessionCookieName = 'userSession';
const CONNECT = process.env.MONGO_URL;
// Define a port
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

//Middlewares
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
app.use(helmet());
app.use(morgan('tiny'));

// Connect to Mongo DB
const client = new MongoClient(CONNECT);
let db, usersCollection, groupCollection, taskCollection;

client.connect().then(() => {
    db = client.db(dbName)
    usersCollection = db.collection(usersCollectionName); // Users collection
    groupCollection = db.collection(groupCollectionName); // Group Collection
    taskCollection = db.collection(taskCollectionName); //Task Collection
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});

app.post('/add-group', async (req,res) => {
    const {groupName, users} = req.body;

    try {
        //check if group already exists
        const existingGroup = await groupCollection.findOne({groupName});
        if (existingGroup) {
            return res.status(400).json({message: 'Group name already exists'});
        }

        const newGroup = {groupName, users};
        console.log(newGroup);
        const result = await groupCollection.insertOne(newGroup);

        res.status(201).json({
            message: 'Group added successfully',
            group: newGroup,
            insertedId: result.insertedId
        });

    } catch (error) {
        console.error('Server error adding group:', error);
        res.status(500).json({ message: 'Error adding group', error });
    }

}); 

app.get('/get-users', async (req, res) => {
    try {
        const users = await usersCollection.find({}).toArray();

        if (!users || users.length === 0) {
            return res.status(404).json({ message: 'No users found' });
        }

        // Exclude sensitive information (e.g., passwords) from the response
        const usersWithoutPasswords = users.map(({ password, ...user }) => user);

        // Send the users list as a response
        res.status(200).json(usersWithoutPasswords);

    } catch (error) {
        console.error('Error fetching users ligma:', error);
        res.status(500).json({ message: 'Error fetching users ligma', error });
    }
});

// Send the user in session
app.get('/get-session', async (req, res) => {

    try{
        const sessionCookie = req.cookies[sessionCookieName];
        const user = await usersCollection.findOne({ _id: ObjectId(sessionCookie.userId) });

        if (!sessionCookie){
            return res.status(401).json({ message: 'Access denied. Please login.' });
        } 

        if (!user) {
            return res.status(401).json({ message: 'Access denied. Please login.' });
        }

        // Exclude sensitive information (e.g., passwords) from the response
        const { password, ...userWithoutPassword } = user;

        if(sessionCookie){
            console.log('Session cookie:', sessionCookie);
            return res.status(200).json(userWithoutPassword);
        }

    }catch(error){
        console.error('Error fetching session:', error);
        res.status(500).json({ message: 'Error fetching session', error });
    }
});

// Basic route to send the index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

//Register User
app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if the username already exists
        const existingUser = await usersCollection.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert new user into the database
        const newUser = { username, password: hashedPassword };
        await usersCollection.insertOne(newUser);

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    console.log('Request Body:', req.body); // Debug log

    try {
        // Find the user by username
        const user = await usersCollection.findOne({ username });

        if (!user) {
            // If no user found, return an error
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        // Compare the provided password with the hashed password in the database
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            // If password doesn't match, return an error
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        // Set a cookie to track the session
        res.cookie(sessionCookieName, { userId: user._id }, { httpOnly: true, maxAge: 3600000 }); // 1 hour expiration

        console.log('Login successful:', user.username);

        // If login is successful, return a success message
        return res.status(200).json({ message: 'Login successful' });

    } catch (error) {
        // Handle any errors
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Error logging in', error });
    }
});

//Check if the user logged in submitted the correct current password to change their password
app.post('/check-password', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find the user by username
        const user = await usersCollection.findOne({ username });

        if (!user) {
            // If no user found, return an error
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        // Hash the provided password
        // const hashedPassword = await bcrypt.hash(password, 10);

        // Compare the provided password with the hashed password in the database
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            // If password doesn't match, return an error
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        console.log('Login successful:', user.username);
        
        // If login is successful, return a success message
        return res.status(200).json({ message: 'Login successful' });

    } catch (error) {
        // Handle any errors
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Error logging in', error });
    }
});

//Change password
app.post('/update-password', async (req, res) => {
    const { username, password } = req.body;

    console.log('Request Body:', req.body); // Debug log

    try {
        // Hash the new password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Update the user's password in the database
        await usersCollection.updateOne(
            { username: username },
            { $set: { password: hashedPassword } }
        );

        // Return a success message
        return res.status(200).json({ message: 'Success' });

    } catch (error) {
        // Handle any errors
        console.error('Error changing password:', error);
        res.status(500).json({ message: 'Error changing password', error });
    }
});




//Logout
app.post('/logout', (req, res) =>{
    res.clearCookie(sessionCookieName);
    res.json({ message: 'Logged out successfully' });
});

function authentication(req,res,next){
    const sessionCookie = req.cookies[sessionCookieName];

    if (!sessionCookie) return res.status(401).json({ message: 'Access denied. Please login.' });

    req.user = sessionCookie; // Add userId to req.user
    next();
}
app.get('/protected', authentication, (req,res) =>{
    res.json({ message: 'This is a protected route', user: req.user });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
