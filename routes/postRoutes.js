import express from "express";
const router = express.Router();
import {
    createPost,
    updatePost,
    deletePost,
    searchPosts
} from "../controllers/postControllers.js"
import {isAuthed} from "../server.js";

router.use(express.json())
router.use(express.urlencoded({ extended: false })); //url parser

// create new post
router.post('/', isAuthed, createPost);

// update post by id
router.put('/:id',isAuthed, updatePost);

// delete post by id
router.delete('/:id',isAuthed, deletePost);

//search and return for posts
router.post('/search',searchPosts)
export default router;