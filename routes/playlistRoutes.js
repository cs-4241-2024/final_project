import express from "express";
const router = express.Router();
import {
    createPlaylist,
    deletePlaylist,
    addSongToPlaylist,
    getSongsInPlaylist, searchPlaylists, updatePlaylistName
} from "../controllers/playlistControllers.js"
import {isAuthed} from "../server.js";


// create new playlist
router.post('/',isAuthed, createPlaylist);

// update playlist by id
router.put('/name/:id',isAuthed, updatePlaylistName);

// delete playlist by id
router.delete('/:id',isAuthed, deletePlaylist);

// add song to playlist
router.post('/:id/add-song',isAuthed, addSongToPlaylist);

// get all songs in a playlist by id
router.get('/:id/songs', getSongsInPlaylist);

router.post('/search', searchPlaylists);

export default router;