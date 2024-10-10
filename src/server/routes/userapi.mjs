import express from "express";
import User from "../models/User.model.js"
import * as bodyParser from "express";
const userrouter = express.Router();
userrouter.get("/", async (req, res) => {
    const scores = await User.find({});
    console.log(scores)
    res.status(200).json(scores)
});
// Add a new document to the collection
userrouter.post("/login", async (req, res) => {
    console.log(req.body)
    const {username, password} = req.body;
    try {
        const usernameExists = await User.findOne({ username });
        if(usernameExists && password === usernameExists.password) {
            res.status(200);
            res.json({username: usernameExists.username});
        } else {
            res.status(400)
        }
    } catch(error) {
        console.error(error);
    }
    res.send();
});
userrouter.post("/register", async (req, res) => {
    console.log(req.body)
    const {shortname, username, password} = req.body;
    console.log({ username : username, password : password})
    const newUser = new User({ username : username, password : password});
    console.log(newUser)
    try {
        const usernameExists = await User.findOne({ username });
        if(usernameExists) {
            res.status(400);
            throw new Error("Username already exists");
        } else {
            await newUser.save();
            res.body = req.body;
            res.status(200)
        }
    } catch(error) {
        console.error(error);
    }
    res.send();




});
export default userrouter;
