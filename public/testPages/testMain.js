import {getLoggedInUser, logout} from "./testAuth.js"
import {loadPosts, submitNewPost} from "./testForm.js"

window.onload = function () {
    getLoggedInUser().then()
    loadPosts().then()
    const button = document.getElementById("submitNewPost");
    button.onclick = submitNewPost;
    const logOut = document.getElementById("logout");
    logOut.onclick = logout;
}