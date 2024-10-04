const express = require("express");
const router = express.Router();
const {
    getPost,
    createPost,
    updatePost,
    deletePost,
    getAllPosts,
    addReply
} = require("../controllers/postControllers");

// get post by id
router.get('/:id', getPost);

// create new post
router.post('/', createPost);

// update post by id
router.put('/:id', updatePost);

// delete post by id
router.delete('/:id', deletePost);

// get all posts
router.get('/', getAllPosts);

module.exports = router;