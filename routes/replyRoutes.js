import express from "express";
const router = express.Router();
import {
    createReply,
    getRepliesForPost,
    updateReply,
    deleteReply
} from "../controllers/replyControllers.js";

// create new reply
router.post('/:postId', createReply);

// get all replies for specific post
router.get('/:postId', getRepliesForPost);

// update a reply by id
router.put('/:id', updateReply);

// delete reply by id
router.delete('/:id', deleteReply);

export default router;