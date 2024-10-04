const express = require("express");
const router = express.Router();
const {
    addSong,
    getSongs,
    getSongByID,
    updateSong,
    deleteSong
} = require("../controllers/songController");

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

module.exports = router;