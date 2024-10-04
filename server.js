import dotenv from 'dotenv'
dotenv.config()
import mongodb from 'mongodb'
import express from 'express'
import userRoutes from './routes/userRoutes.js'
import postRoutes from './routes/postRoutes.js'
import playlistRoutes from './routes/playlistRoutes.js'
import replyRoutes from './routes/replyRoutes.js'
import songRoutes from './routes/songRoutes.js'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DbConnectionURL = `mongodb+srv://${process.env.DbUser}:${process.env.DbPass}@${process.env.DbURL}`
const client = new mongodb.MongoClient( DbConnectionURL )
const app = express()
app.use(express.urlencoded({ extended: false })); //url parser
app.use(express.json()) // parse data as json
const port = 3000

app.get('/', (req, res) => {
    res.sendFile('/public/index.html', {root: __dirname})
})

// defining routes
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/songs', songRoutes);
app.use('/api/replies', replyRoutes);
app.use('/api/playlists', playlistRoutes);

// allow all files in public to be served
app.use(express.static('public'))


//start server on port
app.listen(process.env.PORT || port, () => {
    console.log(`Listening on port ${port}`)
})

