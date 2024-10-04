require('dotenv').config();


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = process.env.MongoDBLink;
let current_user = null; // User variable to track whos logged in

const express    = require('express'),
      app        = express(),
      port       = 3000
     
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function mongoconnect() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("webware").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

mongoconnect()

app.use( express.static( 'public' ) )
app.use( express.static( 'views'  ) )
app.use( express.json() )

// Add Data to database
// Each user data will have their own collection
// Each collection holds list of json objects for that user
app.post( '/submit', express.json(), async ( req, res ) => {
  let data_json = req.body
  try {
    await client.connect();
    // Find current users data collection
    const collection = client.db("webware").collection(current_user);
    
    // Add data to collection
    await collection.insertOne(data_json)

    res.writeHead( 200, { 'Content-Type': 'text/plain'})
    res.end( 'Success inserting data' )

  } catch (error){
    console.error(error)
    res.writeHead( 500, { 'Content-Type': 'text/plain'})
    res.end( 'error inserting data' )
    return
  }
  finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
})

// Delete items from a users data
app.post( '/delete', express.json(), async ( req, res ) => {
  id = req.body.id
  try {
    await client.connect();
    // Find current users data collection
    const collection = client.db("webware").collection(current_user);
    
    // Add data to collection
    await collection.deleteOne({_id: new ObjectId(id)})

    res.writeHead( 200, { 'Content-Type': 'text/plain'})
    res.end( 'Success Deleting data' )

  } catch (error){
    console.error(error)
    res.writeHead( 500, { 'Content-Type': 'text/plain'})
    res.end( 'error deleting data' )
    return
  }
  finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
})

app.post( '/edit', express.json(), async ( req, res ) => {
  let id = req.body.id;
  let date = req.body.date;
  let task = req.body.task;
  
  try {
    await client.connect();
    // Find current users registered collection
    const collection = client.db("webware").collection(current_user);

    // Try and find correct name ot edit
    let user_to_edit = await collection.findOne({ _id: new ObjectId(id) });
    
    if (!user_to_edit){
      res.writeHead( 500, { 'Content-Type': 'text/plain'})
      res.end( 'error retrieving data' )
      return
    }

    const result = await collection.updateOne(
      { _id: new ObjectId(id) }, 
      { $set: { date: date, task: task } }
    )

    return res.status(200).send('changes made successfully');
    
  } catch (error){
    console.error(error)
    return res.status(304).send('Error making change made');
  }
  finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
});


// After login update the current user
app.post( '/login', express.json(), async ( req, res ) => {
  let username = req.body.username;
  let password = req.body.password;
  let valid_users = []
  try {
    await client.connect();
    // Find current users registered collection
    const collection = client.db("webware").collection('usersAccounts');

    // Get user account info
    valid_users = await collection.find({}).toArray();

  } catch (error){
    console.error(error)
    res.writeHead( 500, { 'Content-Type': 'text/plain'})
    res.end( 'error retrieving data' )
    return
  }
  finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }

  //Try and find a match in valid users
  const user = valid_users.find(user => user.username === username)

  // Check if user exists
  if(!user){
    res.writeHead(401, { 'Content-Type': 'text/plain'})
    res.end('Invalid username')
    return
  }
  
  // Check if passwords match
  if (user.password != password){
    res.writeHead(401, { 'Content-Type': 'text/plain'})
    res.end('Password invalid')
    return
  }

  // Set new user
  current_user = username

  res.writeHead( 200, { 'Content-Type': 'application/json'})
  res.end(JSON.stringify(user))
})

// Retrieve data from the database
// Sends list of json objects for current user
app.get('/data', async (req, res) => {

  try {
    await client.connect();
    // Find current users data collection
    const collection = client.db("webware").collection(current_user);

    // Get user data in form of array of json
    const user_data = await collection.find({}).toArray();

    // Send user data back
    res.status(200).json(user_data)

  } catch (error){
    console.error(error)
    res.writeHead( 500, { 'Content-Type': 'text/plain'})
    res.end( 'error retrieving data' )
    return
  }
  finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
});

// Add a user account to database
app.post( '/signup', express.json(), async ( req, res ) => {
  let username = req.body.username
  let password = req.body.password

  // create json for user account info
  const user_signup = {}
  user_signup.username = username
  user_signup.password = password

  try {
    await client.connect();

    // Find current users collection
    const collection = client.db("webware").collection('usersAccounts');
    
    // Add data to collection
    await collection.insertOne(user_signup)

    res.writeHead( 200, { 'Content-Type': 'text/plain'})
    res.end( 'Success inserting data' )

  } catch (error){
    console.error(error)
    res.writeHead( 500, { 'Content-Type': 'text/plain'})
    res.end( 'error inserting data' )
    return
  }
  finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
})

app.listen( process.env.PORT || port)