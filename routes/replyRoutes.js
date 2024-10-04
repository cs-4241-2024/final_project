const express = require('express');
const router = express.Router();
const {
    createReply,
    getRepliesForPost,
    updateReply,
    deleteReply
} = require("../controllers/replyControllers");

// create new reply
router.post('/:postId', createReply);

// get all replies for specific post
router.get('/:postId', getRepliesForPost);

// update a reply by id
router.put('/:id', updateReply);

// delete reply by id
router.delete('/:id', deleteReply);

module.exports = router;