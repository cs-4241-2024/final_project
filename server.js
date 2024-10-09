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

app.post('/delete-group', async (req, res) => {
    const { groupName } = req.body;

    try{
        const result = await groupCollection.deleteOne({groupName});

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'Group not found' });
        }
        res.json({ message: 'Group deleted' });
    }catch(error){
        console.error('Error deleting group', error);
        res.status(500).json({ message: 'Error deleting group', error });
    }
});

app.post('/addTask', async (req, res) => {
    const { newTask } = req.body;
    const { title, user, date, groupName } = newTask;

    console.log('Received new task data:', newTask); 

    try {
        const newAssignment = {
            title,
            assignedTo: user,
            dueDate: date,
            status: 'incomplete' 
        };

        console.log(newAssignment)


        await groupCollection.updateOne(
            { groupName, assignments: null },  // Check if 'assignments' is null
            { $set: { assignments: [] } }      // Initialize it as an empty array
        );

        await groupCollection.updateOne(
            { groupName },
            { $push: { assignments: newAssignment } }  // Now safely push the new assignment
        );
        
        res.status(201).json({
            success: true,
            message: 'Task added successfully',
            assignment: newAssignment 
        });
    } catch (error) {
        console.error('well fugma:', error);
        res.status(500).json({ success: false, message: 'Error adding task', error });
    }
});

app.post('/addUsers', async (req, res) => {
    const { newUsers } = req.body;
    const {groupName, users} = newUsers;

    try {
        console.log('adding users', users); 
        await groupCollection.updateOne(
            { groupName },  // Check if 'assignments' is null
            { $set: { users: users } }      // Initialize it as an empty array
        );
        res.status(201).json({
            success: true,
            message: 'Users added successfully',
            users: users 
        });
    } catch (error) {
        console.error('well fugma:', error);
        res.status(500).json({ success: false, message: 'Error adding user', error });
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

app.post('/completeTask', async (req, res) => {
    const { groupName, assignmentIndex } = req.body;

    console.log("trying to complete task group " + groupName + " index " + assignmentIndex
    )

    try {
        const group = await groupCollection.findOne({ groupName });

        if (!group) {
            return res.status(404).json({ success: false, message: 'Group not found' });
        }

        // Check if assignmentIndex is valid
        if (assignmentIndex < 0 || assignmentIndex >= group.assignments.length) {
            return res.status(400).json({ success: false, message: 'Invalid assignment index' });
        }

        // Update the status of the assignment at the given index to "complete"
        group.assignments[assignmentIndex].status = "complete";

        // Update the group with the modified assignments array
        await groupCollection.updateOne(
            { groupName },
            { $set: { assignments: group.assignments } }
        );

        res.json({ success: true, message: 'Task status updated to complete successfully' });
    } catch (error) {
        console.error('Error updating task status:', error);
        res.status(500).json({ success: false, message: 'Error updating task status' });
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


// Get information about the groups a specific user is in
app.get('/get-user-groups/:username', async (req, res) => {
    const { username } = req.params; // Get the username from the request parameters

    try {
        // Find groups where the users array contains an object with the matching username
        const groups = await groupCollection.find({ 'users.username': username }).toArray();

        if (!groups || groups.length === 0) {
            return res.status(404).json({ message: `No groups found for user ${username}` });
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
        const status = 'incomplete'
        // Add the assignment
        const newAssignment = { title, assignedTo, dueDate: new Date(dueDate), status};
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

// Send the user in session
app.get('/get-session', async (req, res) => {

    try{
        const sessionCookie = req.cookies[sessionCookieName];

        if (!sessionCookie) {
            return res.status(401).json({ message: 'Access denied. Please login.' });
        }

        // Find the user by userId in the session cookie
        const user = await usersCollection.findOne({ _id: new ObjectId(sessionCookie.userId)});

        if (!user) {
            return res.status(401).json({ message: 'Access denied. Please login.' });
        }

        // Exclude sensitive information (e.g., passwords) from the response
        const { password, ...userWithoutPassword } = user;

        console.log('Session cookie:', sessionCookie);

        // Return the user without the password
        return res.status(200).json(userWithoutPassword);

    }catch(error){
        console.error('Error fetching session:', error);
        res.status(500).json({ message: 'Error fetching session', error });
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

        // Set a cookie to track the session
        res.cookie(sessionCookieName, { userId: user._id.toString() , username: user.username}, { httpOnly: true, maxAge: 3600000 }); // 1 hour expiration

        console.log('Login successful:', user.username);

        // If login is successful, return a success message
        return res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
});

//Check if the user logged in submitted the correct current password to change their password
app.post('/check-password', async (req, res) => {
    const { currentPassword } = req.body;

    try {
        const sessionCookie = req.cookies[sessionCookieName];
        if (!sessionCookie) {
            return res.status(401).json({ message: 'Access denied. Please login.' });
        }

        // Find the user by userId in the session cookie
        const user = await usersCollection.findOne({ _id: new ObjectId(sessionCookie.userId) });

        if (!user) {
            return res.status(400).json({ message: 'Invalid session. Please log in again.' });
        }

        // Compare the provided password with the hashed password in the database
        const isMatch = await bcrypt.compare(currentPassword, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Incorrect current password' });
        }

        return res.status(200).json({ message: 'Password is correct' });



    } catch (error) {
        // Handle any errors
        console.error('Error Checking Password:', error);
        res.status(500).json({ message: 'Error Checking Password', error });
    }
});

//Change password
app.post('/update-password', async (req, res) => {
    const { newPassword } = req.body;

    console.log('Request Body:', req.body); // Debug log
    console.log('Received new password for update:', req.body);

    if (!newPassword) {
        return res.status(400).json({ message: 'New password is required' });
    }

    try {
        const sessionCookie = req.cookies[sessionCookieName];
        if (!sessionCookie) {
            return res.status(401).json({ message: 'Access denied. Please login.' });
        }

        // Hash the new password
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Update the user's password in the database
        await usersCollection.updateOne(
            { _id: new ObjectId(sessionCookie.userId) },
            { $set: { password: hashedPassword } }
        );

        // Return a success message
        console.log('Password updated successfully');

        return res.status(200).json({ message: 'Password updated successfully' });


    } catch (error) {
        // Handle any errors
        console.error('Error changing password:', error);
        res.status(500).json({ message: 'Error changing password', error });
    }
});

//

//Logout
app.post('/logout', (req, res) =>{
    res.clearCookie(sessionCookieName);
    res.json({ message: 'Logged out successfully' });
});

// Leave a group
app.post('/leave-group', async (req, res) => {
    const { groupName } = req.body;
    const sessionCookie = req.cookies[sessionCookieName];

    try {
        if (!sessionCookie) {
            return res.status(401).json({ message: 'Access denied. Please login.' });
        }

        // Find the group
        const group = await groupCollection.findOne({ groupName });
        console.log('Group:', group);

        if (!group) {
            return res.status(404).json({ message: 'Group not found' });
        }

        // Find the user in the group
        const userIndex = group.users.findIndex(user => user.username === sessionCookie.username);
        console.log('User index:', userIndex);

        if (userIndex === -1) {
            return res.status(400).json({ message: 'User not found in group' });
        }

        // Remove the user from the group
        group.users.splice(userIndex, 1);

        // Update the group in the database
        await groupCollection.updateOne(
            { groupName },
            { $set: { users: group.users } }
        );

        return res.status(200).json({ message: 'Left group successfully' });

    } catch (error) {
        console.error('Error leaving group:', error);
        res.status(500).json({ message: 'Error leaving group', error });
    }
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