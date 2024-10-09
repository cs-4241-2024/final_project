import {nav} from "./main.js";

export async function submitNewPlaylist(ev){
    ev.preventDefault()

    let newPlaylist = {}
    newPlaylist['name'] = document.getElementById("playlistName").value
    newPlaylist['songs'] = []
    console.log(newPlaylist)

    const response = await fetch('/api/playlists/', {
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(newPlaylist)
    })
    let idOfNewPlaylist = await response.text()
    console.log(idOfNewPlaylist)
    let redirectURL = document.location.origin+"/playlists.html?id="+idOfNewPlaylist
    console.log(redirectURL)
    window.location.href = redirectURL
}



window.onload = function () {
    nav()
    let submitNewPost = document.getElementById("submitNewPost")
    submitNewPost.onclick = submitNewPlaylist
    console.log("onload fired")
}