import express from "express";
const router = express.Router();
import {
    getPost,
    createPost,
    updatePost,
    deletePost,
    getAllPosts,
    searchPosts
} from "../controllers/postControllers.js"
import {isAuthed} from "../server.js";

router.use(express.json())
router.use(express.urlencoded({ extended: false })); //url parser
// get post by id
router.get('/:id', getPost);

// create new post
router.post('/', isAuthed, createPost);

// update post by id
router.put('/:id', updatePost);

// delete post by id
router.delete('/:id', deletePost);

// get all posts
router.get('/',getAllPosts);

router.post('/search',searchPosts)
export default router;