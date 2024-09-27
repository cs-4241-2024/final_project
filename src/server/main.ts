import express from "express";
import ViteExpress from "vite-express";
import mongoose from "mongoose";

const app = express();

const userSchema = new mongoose.Schema({
  user: {type: String, required: true, unique: true},
  password: {String, required: true},
}, {versionKey: false});
const User = new mongoose.Model("User", userSchema);



app.get("/hello", (_, res) => {
  res.send("Hello Vite + React + TypeScript!");
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
