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

window.onload = function () {
    getLoggedInUser().then()
    getLoggedInUserID().then()
    loadPosts().then()
    loadUsersPosts().then()
    loadUsersPlaylist().then()
    loadUsersUploadedSongs().then()
    loadUsersReplies().then()
    loadUsersFavorites().then()
    const button = document.getElementById("submitNewPost");
    button.onclick = submitNewPost;
    const logOut = document.getElementById("logout");
    logOut.onclick = logout;
    const fav = document.getElementById("addFav");
    fav.onclick = addFav;
}