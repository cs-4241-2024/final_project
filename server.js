import express from "express";
import ViteExpress from "vite-express";
import { client } from "./db.js";

// App configuration
const app = express();
app.use(express.json());
const port = 3000;

const DB_NAME = "final";
const COLLECTION_NAME = "calendar";

app.get("/event", async (req, res) => {
    const accessToken = req.headers.authorization.split(" ")[1];

    let filters = {};
    if (req.body) {
        filters = req.body;
    }

    const cursor = client
        .db(DB_NAME)
        .collection(COLLECTION_NAME)
        .find({
            accessToken: accessToken,
            type: "event",
            ...filters,
        });

    const events = [];

    for await (const event of cursor) {
        events.push(event);
    }

    res.send(events);
});

app.put("/event", async (req, res) => {
    const data = req.body;
    const { _id } = data;
    const accessToken = req.headers.authorization.split(" ")[1];

    const response = await client
        .db(DB_NAME)
        .collection(COLLECTION_NAME)
        .updateOne(
            {
                accessToken: accessToken,
                _id: _id,
            },
            data
        );

    res.send(response);
});

app.post("/event", async (req, res) => {
    const data = req.body;
    const accessToken = req.headers.authorization.split(" ")[1];

    const response = await client
        .db(DB_NAME)
        .collection(COLLECTION_NAME)
        .insertOne({
            accessToken: accessToken,
            type: "event",
            ...data,
        });

    res.send(response);
});

app.delete("/event", async (req, res) => {
    const { _id } = req.body;
    const accessToken = req.headers.authorization.split(" ")[1];

    const response = await client
        .db(DB_NAME)
        .collection(COLLECTION_NAME)
        .deleteOne({
            accessToken: accessToken,
            _id: _id,
        });

    res.send(response);
});

app.get("/task", async (req, res) => {
    const accessToken = req.headers.authorization.split(" ")[1];

    let filters = {};
    if (req.body) {
        filters = req.body;
    }

    const cursor = client
        .db(DB_NAME)
        .collection(COLLECTION_NAME)
        .find({
            accessToken: accessToken,
            type: "task",
            ...filters,
        });

    const tasks = [];

    for await (const task of cursor) {
        tasks.push(task);
    }

    res.send(tasks);
});

app.put("/task", async (req, res) => {
    const data = req.body;
    const { _id } = data;
    const accessToken = req.headers.authorization.split(" ")[1];

    const response = await client
        .db(DB_NAME)
        .collection(COLLECTION_NAME)
        .updateOne(
            {
                accessToken: accessToken,
                _id: _id,
            },
            data
        );

    res.send(response);
});

app.post("/task", async (req, res) => {
    const data = req.body;
    const accessToken = req.headers.authorization.split(" ")[1];

    const response = await client
        .db(DB_NAME)
        .collection(COLLECTION_NAME)
        .insertOne({
            accessToken: accessToken,
            type: "event",
            ...data,
        });

    res.send(response);
});

app.delete("/task", async (req, res) => {
    const { _id } = req.body;
    const accessToken = req.headers.authorization.split(" ")[1];

    const response = await client
        .db(DB_NAME)
        .collection(COLLECTION_NAME)
        .deleteOne({
            accessToken: accessToken,
            _id: _id,
        });

    res.send(response);
});

const startServer = async () => {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
        "Pinged your deployment. You successfully connected to MongoDB!"
    );

    ViteExpress.listen(app, port, async () => {
        console.log(`Listening on http://localhost:${port}`);
    });
};

startServer();

process.on("exit", async () => {
    setTimeout(async () => {
        await client.close();
    }, 1000);
});
