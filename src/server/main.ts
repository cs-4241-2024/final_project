// Express Server
import 'dotenv/config'
import express from 'express'
import ViteExpress from 'vite-express'
import cookie from 'cookie-session'
import { MongoClient, ObjectId, Collection } from 'mongodb'
import { lookupPlayerFromAbbr } from './utils.js'

const app = express()

app.use( express.static( 'src' ) )
// app.use(express.static('dist'))
app.use( express.json() )

// --------------------MONGO DB------------------------

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASS}@${process.env.HOST}`
const client = new MongoClient( uri )

let collection: Collection
let loginData: Collection
let schools: Collection

async function run() {
    await client.connect()
    collection = client.db( "assignment3" ).collection( "matches" )
    loginData = client.db( "assignment3" ).collection( "login-info" )
    schools = client.db( "assignment3" ).collection( "schools" )
}

try {
    run().then( _ => console.log( "connected to database" ) );
} catch (e) {
    console.error( e )
}
// -------------------MIDDLEWARE-----------------------
// use express.urlencoded to get data sent by default form actions
// or GET requests
app.use( express.urlencoded( { extended: true } ) );

// cookie middleware! The keys are used for encryption and should be
// changed
app.use( cookie( {
    name: 'session',
    keys: [ 'key1', 'key2' ]
} ) );

// add some middleware that always sends unauthenticated users to the login page
// app.use( function( req,res,next) {
//   if( req.session.login === true )
//     next()
// else
// res.sendFile( __dirname + '/public/main.html' )
// })

app.use( '/newLogin', async ( req: express.Request, res: express.Response ) => {
    console.log( req.body )

    const result = await loginData.insertOne( req.body )
    res.json( result )

} );

// -------------------ROUTES-----------------------
// --- GET ---
app.get( "/docs", async ( req: express.Request, res: express.Response ) => {
    if (collection !== null) {
        const docs = await collection.find( {} ).toArray()
        res.json( docs )
    }
} );

app.get( '/getMatch', async ( req: express.Request, res: express.Response ) => {
    const matchId = req.query.id;
    if (!matchId) {
        return res.status( 400 ).json( { error: 'Match ID is required' } );
    }
    let match = null;
    if (typeof matchId === "string") {
        match = await collection.findOne( { _id: ObjectId.createFromHexString( matchId ) } );
    }
    // const match = await collection.findOne({ _id: matchId });
    if (!match) {
        return res.status( 404 ).json( { error: 'Match not found' } );
    }

    res.json( match );
} );

app.get( '/logout', ( req: express.Request, res: express.Response ) => {
    req.session = null; // Clear the session
    res.redirect( '/' ); // Redirect to the root URL
} );

app.get( '/userMatches', async ( req: express.Request, res: express.Response ) => {
    if (!req.session.login) {
        return res.status( 401 ).send( 'Unauthorized' );
    }

    const user = req.session.user;
    const matches = await collection.find( { owner: user } ).toArray();
    res.json( matches );
} );

// --- POST ---
app.post( '/login', async ( req: express.Request, res: express.Response ) => {
    // express.urlencoded will put your key value pairs
    // into an object, where the key is the name of each
    // form field and the value is whatever the user entered
    console.log( req.body )
    let username = req.body.user
    let password = req.body.pass


    // below is *just a simple authentication example*
    // for A3, you should check username / password combos in your database
    let loginDoc = await loginData.findOne( { user: username, pass: password } )
// Find the user with the matching username

    // If a user is found, check if the password matches
    if (loginDoc != null && loginDoc.user === username && loginDoc.pass === password) {

        // define a variable that we can check in other middleware
        // the session object is added to our requests by the cookie-session middleware
        req.session.user = loginDoc.user
        req.session.login = true

        // since login was successful, send the user to the main content
        // use redirect to avoid authentication problems when refreshing
        // the page or using the back button, for details see:
        // https://stackoverflow.com/questions/10827242/understanding-the-post-redirect-get-pattern
        res.status( 200 ).send( "Login and Password correct" )
    } else {
        console.log( "not found" )
        res.status( 400 ).send( "Either Login or Password are incorrect" )
        // password incorrect, redirect back to login page
        // res.sendFile( __dirname + '/views/index.html' )
    }
} );

app.post( '/add', async ( req: express.Request, res: express.Response ) => {
    const matchData = req.body;

    // Logic to determine the winner
    let winner;
    if (matchData.Game1B > matchData.Game1A && matchData.Game2B > matchData.Game2A) {
        winner = matchData.SchoolB;
    } else if (matchData.Game1A > matchData.Game1B && matchData.Game2A > matchData.Game2B) {
        winner = matchData.SchoolA;
    } else if (matchData.Game3A > matchData.Game3B) {
        winner = matchData.SchoolA;
    } else {
        winner = matchData.SchoolB;
    }

    // Add the winner to the match data
    matchData.winner = winner;
    matchData.owner = req.session.user;
    const result = await collection.insertOne( matchData )
    matchData._id = result.insertedId
    res.json( matchData )
} );

app.post( '/update', async ( req: express.Request, res: express.Response ) => {
    const matchData = req.body;
    const matchId = req.query.id;
    // Logic to determine the winner
    let winner;
    if (matchData.Game1B > matchData.Game1A && matchData.Game2B > matchData.Game2A) {
        winner = matchData.SchoolB;
    } else if (matchData.Game1A > matchData.Game1B && matchData.Game2A > matchData.Game2B) {
        winner = matchData.SchoolA;
    } else if (matchData.Game3A > matchData.Game3B) {
        winner = matchData.SchoolA;
    } else {
        winner = matchData.SchoolB;
    }

    // Add the winner to the match data
    matchData.winner = winner;
    let result = null;
    if (typeof matchId === "string") {
        result = await collection.updateOne(
            { _id: ObjectId.createFromHexString( matchId ) },
            // { _id: matchId },
            { $set: matchData }
        )
    }
    matchData._id = matchId;

    res.json( matchData )
} );

app.post( '/getPlayer', async ( req: express.Request, res: express.Response ) => {
    // Example of how to call this endpoint from the client
    /*
    <button onClick={async () => {
                    const response = await fetch('/getPlayer', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            abbr: 'AND12',
                        }),
                    });
                    if (response.ok) {
                        const res = await response.json();
                        console.log(res);
                    }
                }}>
                Test getPlayer
     </button>
     */
    const player = await lookupPlayerFromAbbr( req.body.abbr, schools )
    res.json( player )
} );

// --- DELETE ---
// assumes req.body takes form { _id:5d91fb30f3f81b282d7be0dd } etc.
app.delete( '/remove', async ( req: express.Request, res: express.Response ) => {
    const result = await collection.deleteOne( {
        _id: ObjectId.createFromHexString( req.body._id )
    } )

    res.json( result )
} );

ViteExpress.listen( app, 3000 )

// app.listen( process.env.PORT || 3000 )