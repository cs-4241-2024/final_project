import {
    addFav,
    getLoggedInUser,
    getLoggedInUserID, loadUsersFavorites,
    loadUsersPlaylist,
    loadUsersPosts, loadUsersReplies,
    loadUsersUploadedSongs,
    logout
} from "./testAuth.js"
import {loadPosts, submitNewPost} from "./testForm.js"
import {loadSongs} from "./testSongs.js";
import {addSongToPlayList, loadPlaylists, playListSongs, submitNewPlaylist} from "./testPlaylists.js";

window.onload = function () {
    getLoggedInUser().then()
    getLoggedInUserID().then()
    loadPosts().then()
    loadUsersPosts().then()
    loadUsersPlaylist().then()
    loadUsersUploadedSongs().then()
    loadUsersReplies().then()
    loadUsersFavorites().then()
    loadSongs().then()
    loadPlaylists().then()
    const button = document.getElementById("submitNewPost");
    button.onclick = submitNewPost;
    const logOut = document.getElementById("logout");
    logOut.onclick = logout;
    const fav = document.getElementById("addFav");
    fav.onclick = addFav;
    const addPlaylist = document.getElementById("submitNewPlaylist");
    addPlaylist.onclick = submitNewPlaylist

    const addSongToPlay = document.getElementById("addSongToPlaylist");
    addSongToPlay.onclick = addSongToPlayList

    playListSongs().then()
}