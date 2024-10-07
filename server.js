// Import the express module
const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
// Import Middlewares
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
const groupCollectionName = "groups"; // Groups will include members and assignments
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
let db, usersCollection, groupCollection;

client.connect().then(() => {
    db = client.db(dbName);
    usersCollection = db.collection(usersCollectionName); // Users collection
    groupCollection = db.collection(groupCollectionName); // Groups collection
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});

// Add a new group with members and assignments
app.post('/add-group', async (req, res) => {
    const { groupName, users, assignments } = req.body;
    console.log('Received group data:', groupName, users); // Log received data

    try {
        // Check if the group already exists
        const existingGroup = await groupCollection.findOne({ groupName });
        if (existingGroup) {
            return res.status(400).json({ message: 'Group name already exists' });
        }

        // Create the new group object
        const newGroup = {
            groupName,
            users,  // List of users with their details
            assignments  // List of assignments with titles, assignedTo, and dueDates
        };

        // Insert the group into the 'groups' collection
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

app.post('/deleteTask', async (req, res) => {
    const { groupName, assignmentIndex } = req.body;

    try {
        const group = await groupCollection.findOne({ groupName });

        if (!group) {
            return res.status(404).json({ success: false, message: 'Group not found' });
        }

        // Check if assignmentIndex is valid
        if (assignmentIndex < 0 || assignmentIndex >= group.assignments.length) {
            return res.status(400).json({ success: false, message: 'Invalid assignment index' });
        }

        // Remove the assignment at the given index
        const updatedAssignments = group.assignments.filter((_, index) => index !== assignmentIndex);

        // Update the group with the new assignments array
        await groupCollection.updateOne(
            { groupName },
            { $set: { assignments: updatedAssignments } }
        );

        res.json({ success: true, message: 'Task deleted successfully' });
    } catch (error) {
        console.error('Error deleting task:', error);
        res.status(500).json({ success: false, message: 'Error deleting task' });
    }
});


// Get information about a specific group
app.get('/get-group-info', async (req, res) => {
    try {
        const groups = await groupCollection.find({}).toArray();

        if (!groups || groups.length === 0) {
            return res.status(404).json({ message: 'No groups found' });
        }
        res.status(200).json(groups);
    } catch (error) {
        console.error('Error fetching groups:', error);
        res.status(500).json({ message: 'Error fetching groups', error });
    }
});

// Add an assignment to a group
app.post('/add-assignment', async (req, res) => {
    const { groupId, title, assignedTo, dueDate } = req.body;

    try {
        // Find the group
        const group = await groupCollection.findOne({ _id: new ObjectId(groupId) });
        if (!group) {
            return res.status(404).json({ message: 'Group not found' });
        }

        // Add the assignment
        const newAssignment = { title, assignedTo, dueDate: new Date(dueDate) };
        const result = await groupCollection.updateOne(
            { _id: new ObjectId(groupId) },
            { $push: { assignments: newAssignment } }
        );

        res.status(200).json({ message: 'Assignment added successfully' });
    } catch (error) {
        console.error('Error adding assignment:', error);
        res.status(500).json({ message: 'Error adding assignment', error });
    }
});

// Get all users
app.get('/get-users', async (req, res) => {
    try {
        const users = await usersCollection.find({}).toArray();

        if (!users || users.length === 0) {
            return res.status(404).json({ message: 'No users found' });
        }

        // Exclude sensitive information (e.g., passwords) from the response
        const usersWithoutPasswords = users.map(({ password, ...user }) => user);

        res.status(200).json(usersWithoutPasswords);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Error fetching users', error });
    }
});

// Basic route to send the index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// User registration
app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    try {
        const existingUser = await usersCollection.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = { 
            username, 
            password: hashedPassword, 
            groupIDs: [] 
        };
        await usersCollection.insertOne(newUser);

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
});

// User login
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await usersCollection.findOne({ username });

        if (!user) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        res.cookie(sessionCookieName, { userId: user._id }, { httpOnly: true, maxAge: 3600000 });

        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
});

//Check if the user logged in submitted the correct current password
app.post('/check-password', async (req, res) => {
    const { username, password } = req.body;

    console.log('Request Body:', req.body); // Debug log

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