import pkg from 'mongodb';
const { MongoClient, ObjectID } = pkg;

import dotenv from 'dotenv';
dotenv.config();


const uri = `mongodb+srv://webwaresongsite:mongodb!@songsite.g4glr.mongodb.net/?retryWrites=true&w=majority&appName=SongSite`;
const client = new MongoClient(uri);

export const addSong = async (req, res) => {
    try {
        await client.connect();
        const db = client.db('SongWebsite');

        const newSong = {
            name: req.body.name,
            artist: req.body.artist,
            album: req.body.album,
            duration: req.body.duration,
            genre: req.body.genre,
            releaseDate: req.body.releaseDate,
            createdBy: req.body.createdBy,
            createdOn: new Date()
        };

        const result = await db.collection('songs').insertOne(newSong);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({error: 'Error creating song'});
        console.error('Error creating song:', error);
    } finally {
        await client.close();
    }
}













