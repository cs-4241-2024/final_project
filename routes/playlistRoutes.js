const express = require('express');
const router = express.Router();
const {
    getPlaylist,
    createPlaylist,
    updatePlaylist,
    deletePlaylist,
    getAllPlaylists,
    addSongToPlaylist,
    getSongsInPlaylist
} = require('../controllers/playlistControllers');

// get playlist by id
router.get('/:id', getPlaylist);

// create new playlist
router.post('/', createPlaylist);

// update playlist by id
router.put('/:id', updatePlaylist);

// delete playlist by id
router.delete('/:id', deletePlaylist);

// get all playlist
router.get('/', getAllPlaylists);

// add song to playlist
router.post('/:id/add-song', addSongToPlaylist);

// get all songs in a playlist by id
router.get('/:playlistId/songs', getSongsInPlaylist);

module.exports = router;