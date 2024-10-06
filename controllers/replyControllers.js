import dotenv from 'dotenv';
dotenv.config();

import pkg from 'mongodb';
const { MongoClient, ObjectId } = pkg;

const uri = `mongodb+srv://${process.env.DbUser}:${process.env.DbPass}@${process.env.DbURL}`;
const client = new MongoClient(uri);

export const createReply = async (req, res) => {
    try {
        await client.connect();
        const db = client.db('SongWebsite');

        const newReply = {
            _id: new ObjectId(),
            createdBy: req.body.createdBy,
            content: req.body.content,
            createdOn: new Date()
        }

        const result = await db.collection('Posts').updateOne(
            {_id: new ObjectId(postId)},
            {$push: {replies: newReply}}
        )

        if(result.matchedCount === 0) {
            res.status(404).json({error: 'No post found.'});
        }
        res.status(201).json(newReply);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Error creating reply'});
    } finally {
        await client.close();
    }
}

export const getRepliesForPost = async (req, res) => {
    const postId = req.params.postId;

    try {
        await client.connect();
        const db = client.db('SongWebsite');

        const post = await db.collection('Posts').findOne(
            {_id: new ObjectId(postId)},
            {projection: {replies: 1, _id: 0}}
        )

        if(!post) {
            return res.status(404).json({error: 'No post found.'});
        }

        res.status(200).json(post.replies);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Error getting replies'});
    } finally {
        await client.close();
    }
}

export const updateReply = async (req, res) => {
    const replyId = req.params.id;
    const {content} = req.body;

    try {
        await client.connect();
        const db = client.db('SongWebsite');

        const result = await db.collection('posts').updateOne(
            {'replies._id': new ObjectId(replyId)},
            {$set: {'replies.$.content': content}}
        )

        if(result.matchedCount === 0) {
            res.status(404).json({error: 'No reply found.'});
        }

        res.status(200).json({message: 'Reply updated successfully.'});
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Error updating reply'});
    } finally {
        await client.close();
    }
}

export const deleteReply = async (req, res) => {
    const replyId = req.params.id;

    try {
        await client.connect();
        const db = client.db('SongWebsite');

        const result = await db.collection('posts').updateOne(
            { 'replies._id': new ObjectId(replyId) },
            { $pull: { replies: { _id: new ObjectId(replyId) } } }
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({ error: 'Reply not found' });
        }

        res.status(200).json({ message: 'Reply deleted successfully' });
    } catch (error) {
        console.error('Error deleting reply:', error);
        res.status(500).json({ error: 'Error deleting reply' });
    } finally {
        await client.close();
    }
};