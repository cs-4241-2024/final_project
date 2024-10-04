import express from "express";
const router = express.Router();
import {
    getPlaylist,
    createPlaylist,
    updatePlaylist,
    deletePlaylist,
    getAllPlaylists,
    addSongToPlaylist,
    getSongsInPlaylist
} from "../controllers/playlistControllers.js"

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

export default router;