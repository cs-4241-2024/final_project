// Import the express module
const express = require('express');
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
const sessionCookieName = 'userSession';

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


// Basic route to send the index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

//Login 
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    console.log('Request Body:', req.body); // Debug log
});

//Logout
app.post('/logout', (req, res) =>{
    req.logout((err) => {
        if(err) {
            return res.status(500).json({ message: 'Error logging out', error: err });
        }
        //clear cookie
        res.clearCookie(sessionCookieName);
        //redirect to homepage
        res.redirect('/');
    })
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
