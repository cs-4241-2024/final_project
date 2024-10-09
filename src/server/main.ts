import express from "express";
import ViteExpress from "vite-express";
import mongoose, { PassportLocalDocument } from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";
import passport from "passport";
import dotenv from "dotenv";
import cookie from "cookie-session";
import fileUpload, { UploadedFile } from "express-fileupload";
dotenv.config();

// @ts-ignore
import parseXLSX from "./parser/parseXLSX.js"
import XLSX from "xlsx";
import groupRow from "./parser/groupRow.js";

const app = express();

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}/final-project?retryWrites=true&w=majority&appName=final-project`;
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

const userSchema = new mongoose.Schema({});
userSchema.plugin(passportLocalMongoose);
const User = mongoose.model("User", userSchema);

// use static authenticate method of model in LocalStrategy
passport.use(User.createStrategy());

// use static serialize and deserialize of model for passport session support
// @ts-ignore
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

async function run() {
    // @ts-ignore
    await mongoose.connect(uri, clientOptions);
    if (mongoose.connection.db) {
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } else {
        throw new Error("Mongoose not connected");
    }

    app.use(cookie({
        secret: process.env.SESSION_SECRET
    }));

    app.post("/addUser", express.json(), async (req: express.Request, res: express.Response) => {
        if (!req.session) {
            throw Error("Session not found!");
        }
        const newUser: PassportLocalDocument = new User({ username: req.body.username }) as PassportLocalDocument;
        await newUser.setPassword(req.body.password);
        await newUser.save();
        const user = await User.authenticate()(req.body.username, req.body.password);
        console.log(user);
        if (user.user === false) {
            res.sendStatus(500);
        } else {
            req.session.user = user.user._id;
            // res.json(user.user._id);
            res.sendStatus(200);
        }
    });

    app.get("/checkLogin", async (req: express.Request, res: express.Response) => {
        if (!req.session) {
            throw Error("Session not found!");
        }
        if (req.session.isPopulated) {
            res.sendStatus(204);
        } else {
            res.sendStatus(401);
        }
    });

    app.post("/login", express.json(), async (req: express.Request, res: express.Response) => {
        if (!req.session) {
            throw Error("Session not found!");
        }
        console.log(req.body);
        const user = await User.authenticate()(req.body.username, req.body.password);
        console.log(user);
        if (user.user === false) {
            res.sendStatus(401);
        } else {
            req.session.user = user.user;
            res.sendStatus(204);
        }
    });

    app.post("/parseXlsx", fileUpload({
        useTempFiles: true,
        tempFileDir: '/tmp/'
    }), async (req: express.Request, res: express.Response) => {
        if (!req.files) {
            res.sendStatus(400);
            throw Error("Files not found!");
        }
        const file = req.files.file as UploadedFile;
        // console.log(file.tempFilePath);
        // const newPath = `${file.tempFilePath}.xlsx`
        // await file.mv(newPath);

        // const workbook = XLSX.readFile(newPath);

        const workbook = XLSX.read(file.data, { type: 'buffer' });

        const parsed = parseXLSX(workbook);
        if (parsed === null) {
            res.sendStatus(400);
        } else {
            const grouped = groupRow(JSON.parse(parsed));
            res.send(grouped);
        }

    });

    app.get("/hello", (_, res) => {
        res.send("Hello Vite + React + TypeScript!");
    });

    const PORT = parseInt(process.env.PORT || "3000", 10);
    ViteExpress.listen(app, PORT, () => {
        console.log(`Server is listening on port ${PORT}...`);
    });
}

run().catch(async (err) => {
    console.error(err);
    await mongoose.disconnect();
});
