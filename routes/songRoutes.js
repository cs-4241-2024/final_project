import express from "express";
const router = express.Router();
import {
    addSong,
    getSongs,
    getSongByID,
    updateSong,
    deleteSong
} from "../controllers/songController.js";
// add new song
router.post('/', addSong);

// get all songs
router.get('/', getSongs);

// get specific song by id
router.get('/:id', getSongByID);

// update song by id
router.put('/:id', updateSong);

// delete song by id
router.delete('/:id', deleteSong);

export default router