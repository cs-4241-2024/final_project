import express from "express";
import Game from "../models/Game.model.js"
import * as bodyParser from "express";
const gamerouter = express.Router();
gamerouter.post("/get", async (req, res) => {
    const id = req.body.id;
    const game = await Game.find({'id' : id});
    console.log(game)
    res.status(200).json(game)
});
gamerouter.get("/getall-saved", async (req, res)=>{
  // Update so that it only returns Id, name
  const games = await Game.find();
  res.status(200).json(games)
})
gamerouter.get("/getall-redacted", async (req, res)=>{
  // Update so that it only returns Id, name
  const games = await Game.find({}).select('-_id -date -comments -developer');
  res.status(200).json(games)
})
gamerouter.post("/update/:id", async (req, res)=>{
  const id = req.params.id
  const update = req.body;

  const game = await Game.find().where('_id').equals(id);
  game.comments = update.comments;
  game.rating = update.rating;
  game.save();
  res.status(200).json(game)
})
gamerouter.get("/get/:id", async (req, res)=>{
  const id = req.params.id
  const game = await Game.find().where('id').equals(id);
  if (game !== null) {
    res.status(200).json(game);
  }
  else res.status(400);
  
})

export default gamerouter;
