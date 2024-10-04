const dotenv = require('dotenv').config()

const DbConnectionURL = `mongodb+srv://${process.env.DbUser}:${process.env.DbPass}@${process.env.DbURL}`
const { MongoClient, ObjectId } = require("mongodb")
const client = new MongoClient(DbConnectionURL)

const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: false })); //url parser
app.use(express.json()) // parse data as json
const port = 3000


app.get('/', (req, res) => {
    res.sendFile('/public/index.html', { root: __dirname })
})


// allow all files in public to be served
app.use(express.static('public'))


//start server on port
app.listen(process.env.PORT || port, () => {
    console.log(`Listening on port ${port}`)
})

