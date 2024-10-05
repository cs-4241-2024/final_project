import express from "express";
import mongodb from 'mongodb'
import passport from 'passport'
import expressSession from 'express-session'
import passportGithub2 from 'passport-github2'
import MongoStore from 'connect-mongo'
import {getUser,createUser,updateUser,getAllUsers} from "../controllers/userControllers.js";
import dotenv from 'dotenv'
dotenv.config()
const router = express.Router();
const Dbname ="SongWebsite"
const DbConnectionURL = `mongodb+srv://${process.env.DbUser}:${process.env.DbPass}@${process.env.DbURL}`
const client = new mongodb.MongoClient( DbConnectionURL )

// get user by their id
router.get('/:id', getUser);

// create new user
router.post('/', createUser);

// update user by their id
router.put('/:id', updateUser);

// get all users (might not be needed?)
router.get('/', getAllUsers);


//Github Authentication
passport.use(new passportGithub2.Strategy({
        clientID: process.env.gitHubClient,
        clientSecret: process.env.gitHubSecret,
        callbackURL: "http://localhost:3000/api/users/auth/github/callback"
    },
    async function (accessToken, refreshToken, profile, done) {
        await client.connect()
        let usersTable = await client.db(Dbname).collection("Users")

        //attempt to find the user, if no user is present create one
        let findResult = await usersTable.findOneAndUpdate({gitHubID:profile.id},
            { $setOnInsert:{
                                    gitHubID:profile.id,
                                    userName:profile.username,
                                    password:"",
                                    playlists:[],
                                    posts:[],
                                    replies:[],
                                    favorites:[],
                                    uploadedSongs:[]}
                  }, {upsert:true})

        return done(null, findResult)
    }
));

passport.serializeUser(function(user, done) {
    done(null, user.gitHubID);
});

passport.deserializeUser(async function (gitHubID, done) {
    await client.connect()
    let usersTable = await client.db(Dbname).collection("Users")
    let findUser = await usersTable.findOne({gitHubID:gitHubID})
    done(null, findUser);
});

router.use(expressSession({ secret:process.env.sessionSecret, resave: false, saveUninitialized: false, store:MongoStore.create({mongoUrl:DbConnectionURL}) }))
router.use(passport.initialize())
router.use(passport.session({}));
export function isAuthenticated(req, res, next) {
    console.log(req)
    if (req.isAuthenticated()) { return next(); }
    else{
        res.sendStatus(400)
    }
}
router.get('/auth/github', passport.authenticate('github'),function (req,res){
    console.log("should not run")
})

router.get('/auth/github/callback', passport.authenticate('github',{failureRedirect: '/'}),function (req,res){
    res.redirect("/testPages/testAuth.html");
})

router.post('/git/logout', function(req, res, next) {
    req.logout(function(err) {
        console.log(err)
        res.redirect('/testPages/testLogin.html');
    });

});
router.get('/git/userName',isAuthenticated,function (req,res){
    console.log("sent username")
    console.log(req.session.login)
    res.status(200)
    res.send({userName:req.user.userName})
})

export default router