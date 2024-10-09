"use strict";
import express from "express";
import {JournalType} from "../../mongoose/journal/schema";
import journal from "../../mongoose/journal/model";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const model_1 = __importDefault(require("../mongoose/friends/model"));
const router = express.Router();
router.post('/api/addEntry', async (req, res) => {
    try {
        const userName: string = req.body.userName;
        const title: string = req.body.title;
        const dateCreated: Date = new Date(req.body.dateCreated);
        const entry: string = req.body.entry;

        console.log("Request Body: ", req.body);

        const newEntry: JournalType = {
            title: title,
            entry: entry,
            userName: userName,
            dateCreated: dateCreated,
        };

        await journal.create(newEntry);

        // Query the db to return all entries for this user
        const updatedEntries = await journal.find({ userName: userName });
        res.json(updatedEntries);
    } catch (error) {
        console.error("Error adding entry: ", error);
        res.status(500).json({ message: "Error adding entry", error: error.message });
    }
});
export default router;