import express from "express";
import mongodb from 'mongodb'
import passport from 'passport'
import expressSession from 'express-session'
import passportGithub2 from 'passport-github2'
import MongoStore from 'connect-mongo'
import {getUser,createUser,updateUser,getAllUsers} from "../controllers/userControllers.js";
import dotenv from 'dotenv'
import {isAuthed} from "../server.js";
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

router.get('/auth/github', passport.authenticate('github'),function (req,res){
    console.log("should not run")
})

router.get('/auth/github/callback', passport.authenticate('github',{failureRedirect: '/'}),function (req,res){
    res.redirect("/testPages/testMain.html");
})

router.post('/git/logout', function(req, res, next) {
    req.logout(function(err) {
        //console.log(err)
        res.redirect('/testPages/testLogin.html');
    });

});
router.get('/git/userName',isAuthed,function (req,res){
    console.log("sent username")
    //console.log(req.session.login)
    res.status(200)
    res.send({userName:req.user.userName})
})

router.get('/git/dbID',isAuthed,function (req,res){
    console.log("sent id+")
    res.status(200)
    res.send({userName:req.user._id})
})

export default router