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
import {loadPlaylists} from "./testPlaylists.js";

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
}