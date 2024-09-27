import express from "express";
import ViteExpress from "vite-express";
import mongoose from "mongoose";

// @ts-ignore
import parseXLSX from "./parser/xlsxParser.js"

const app = express();

const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
}, {versionKey: false});
const User = new mongoose.Model("User", userSchema);

app.post("/login", (req: express.Request, res: express.Response) => {

});

app.get("/hello", (_, res) => {
    res.send("Hello Vite + React + TypeScript!");
});

ViteExpress.listen(app, 3000, () =>
    console.log("Server is listening on port 3000..."),
);
