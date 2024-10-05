import express from "express";
const router = express.Router();
import {
    getPost,
    createPost,
    updatePost,
    deletePost,
    getAllPosts,
    addReply
} from "../controllers/postControllers.js"
import {isAuthenticated} from "./userRoutes.js";

// get post by id
router.get('/:id', getPost);

// create new post
router.post('/', createPost);

// update post by id
router.put('/:id', updatePost);

// delete post by id
router.delete('/:id', deletePost);

// get all posts
router.get('/',getAllPosts);

export default router;