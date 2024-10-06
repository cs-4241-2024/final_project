import dotenv from 'dotenv';
dotenv.config();

import pkg from 'mongodb';
const { MongoClient, ObjectId } = pkg;

const uri = `mongodb+srv://${process.env.DbUser}:${process.env.DbPass}@${process.env.DbURL}`;
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


export const getSongs = async (req, res) => {
    try {
        await client.connect();
        const db = client.db('SongWebsite');
        const songs = await db.collection('songs').find({}).toArray();
        res.status(200).json(songs);
    } catch (error) {
        res.status(500).json({error: 'Error getting songs'});
    } finally {
        await client.close();
    }
}

export const getSongByID = async (req, res) => {
    try {
        await client.connect();
        const db = client.db('SongWebsite');
        const song = await db.collection('songs').findOne({_id: new ObjectId(req.params.id)});
        if(!song) {
            return res.status(404).json({error: 'Song not found'});
        }
        res.status(200).json(song);
    } catch (error) {
        res.status(500).json({error: 'Error getting song'});
    } finally {
        await client.close();
    }
}

export const deleteSong = async (req, res) => {
    try {
        await client.connect();
        const db = client.db('SongWebsite');
        const result = await db.collection('songs').deleteOne({_id: new ObjectId(req.params.id)});

        if (result.deletedCount === 0) {
            res.status(404).json({error: 'Song not found'});
        }

        res.status(200).json({message: 'Song deleted'});
    } catch (error) {
        res.status(500).json({error: 'Error deleting song'});
    } finally {
        await client.close();
    }
}

export const updateSong = async (req, res) => {
    try {
        await client.connect();
        const db = client.db('SongWebsite');

        const updatedSong = await db.collection('songs').updateOne(
            {_id: new ObjectId(req.params.id)},
            {$set: {
                    name: req.body.name,
                    artist: req.body.artist,
                    album: req.body.album,
                    duration: req.body.duration,
                    genre: req.body.genre,
                    releaseDate: req.body.releaseDate
                }}
        );

        if(updatedSong.matchedCount === 0) {
            return res.status(404).json({error: 'Song not found'});
        }

        res.status(200).json(updatedSong);
    } catch (error) {
        res.status(500).json({error: 'Error deleting song'});
    } finally {
        await client.close();
    }
}







