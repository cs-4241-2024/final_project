import mongoose from "mongoose";
// Define a schema
const Schema = mongoose.Schema;


const gameSchema = new Schema({
    "id" : Number,
    "name": String,
    "date" : Date,
    "developer" :JSON,
    "coverid" : Number,
    "coverurl" : String,
    "coverwidth": Number,
    "coverheight": Number,
    "comments" : [JSON]
});
const Game = mongoose.model('Game', gameSchema)

export default Game;