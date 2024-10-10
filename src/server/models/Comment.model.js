import mongoose from "mongoose";
// Define a schema
const Schema = mongoose.Schema;


const commentSchema = new Schema({
    "username": String,
    "date" : Date,
    "gameid" : String,
    "comment": String,
    "rating": Number,
});
const Comment = mongoose.model('Comment', commentSchema)

export default Comment;