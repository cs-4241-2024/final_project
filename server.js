const dotenv = require('dotenv').config()

const DbConnectionURL = `mongodb+srv://${process.env.DbUser}:${process.env.DbPass}@${process.env.DbURL}`
const { MongoClient, ObjectId } = require("mongodb")
const client = new MongoClient( DbConnectionURL )

const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: false })); //url parser
app.use(express.json()) // parse data as json
const port = 3000

const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const playlistRoutes = require("./routes/playlistRoutes");
const replyRoutes = require("./routes/replyRoutes");
const songRoutes = require("./routes/songRoutes");

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

