import mongoose from "mongoose";
import {config} from "dotenv";

config()
const dburl = process.env.connectionurl;
console.log("dburl in mongo" + dburl)

let conn = null;
try {
    conn = await mongoose.connect(process.env.connectionurl);
} catch (e) {
    console.log(e);
}
export default conn;