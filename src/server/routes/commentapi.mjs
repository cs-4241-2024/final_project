import express from "express";
import Comment from "../models/Comment.model.js"
import * as bodyParser from "express";
import Game from "../models/Game.model.js"
const commentrouter = express.Router();
commentrouter.post("/addcommment/:gameid", async (req, res) => {
    const id = req.params.gameid
    const comment = req.body;
    const new_comment = new Comment(comment);
    try {
        console.log("finding game")
      
        const game = await Game.findOne({id});
        console.log("tryna add to comments")
  
        game.comments.push(new_comment.toJSON());
        console.log(game.comments)
        console.log("saving")
        new_comment.save();
        game.save();
        
        res.status(200);
        res.json(new_comment.toJSON());
    } catch(error) {
        console.error(error);
        res.status(400);
    }
  res.send();
});

commentrouter.post("/delete/", async (req, res) => {
    const comment = req.body;
    console.log("Comment:");
    console.log(comment);
    try {
        console.log("finding com")
        const comm = await Comment.findOne().where("_id").equals(comment._id);
        console.log("com")
        console.log(comm)
        console.log("Finding game")
        const game = await Game.findOne().where("id").equals(comment.gameid);
        console.log("game")
        console.log(game)   
        //console.log(game.comments)
        console.log("saving")
        console.log(game.comments[0]._id);
        console.log(comm.toJSON()._id);
        console.log("Equal?")
        console.log(game.comments[0]._id.equals(comm.toJSON()._id))
        const tempid = comm.toJSON()._id;
        game.comments = game.comments.filter(x => !x._id.equals(tempid));
        console.log(game.comments);
        //const ret = await comm.deleteOne();
        await game.save();
        res.status(200);
    } catch(error) {
        console.error(error);
        res.status(400);
    }
  res.send();
});

export default commentrouter;