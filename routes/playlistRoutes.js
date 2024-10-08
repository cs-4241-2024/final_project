import express from "express";
const router = express.Router();
import {
    getPlaylist,
    createPlaylist,
    updatePlaylist,
    deletePlaylist,
    getAllPlaylists,
    addSongToPlaylist,
    getSongsInPlaylist, searchPlaylists
} from "../controllers/playlistControllers.js"


//COMBINE INTO SEARCH
// get playlist by id
router.get('/:id', getPlaylist);

// get all playlist
router.get('/', getAllPlaylists);

// create new playlist
router.post('/', createPlaylist);

// update playlist by id
router.put('/:id', updatePlaylist);

// delete playlist by id
router.delete('/:id', deletePlaylist);

// add song to playlist
router.post('/:id/add-song', addSongToPlaylist);

// get all songs in a playlist by id
router.get('/:playlistId/songs', getSongsInPlaylist);

router.post('/search', searchPlaylists);

export default router;