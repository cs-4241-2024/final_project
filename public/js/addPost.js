import { nav } from "./main.js";
import { getParam } from "./urlHelpers.js";

async function toggleDropDown(event) {
    event.preventDefault()
    let dropdown = document.getElementById("postTopicDropDown")
    if (dropdown.className === "postTopicDropDown-vis") {
        dropdown.className = "postTopicDropDown-hidden"
    }
    else {
        dropdown.className = "postTopicDropDown-vis"
    }
}

async function onTopicChange(event) {
    let checkedRadioValue = document.querySelector('input[name="TypeOfPost"]:checked').value;
    if (checkedRadioValue == null) {
        return
    }
    console.log("checkedRadioValue")
    console.log(checkedRadioValue)
    let searchButton = document.getElementById("searchButton")
    searchButton.className = "searchButton-vis"
    //clear any options remaining
    let postTopicDropDown = document.getElementById("postTopicDropDown")
    while (postTopicDropDown.children.length > 0) {
        postTopicDropDown.removeChild(postTopicDropDown.lastChild)
    }
    if (checkedRadioValue === "playlist") {
        searchButton.textContent = "Search For Playlist"
        loadPlayLists().then()
    }
    else {
        searchButton.textContent = "Search For Song"
        loadSongs().then()
    }

}
async function loadSongs() {

    const response = await fetch('/api/songs/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({})
    })

    let songs = JSON.parse(await response.text())

    let songDropdown = document.getElementById("postTopicDropDown")
    for (let i = 0; i < songs.length; i++) {
        let song = document.createElement("p")
        song.textContent = songs[i].name + " by " + songs[i].artist + " in album " + songs[i].album
        song.topicID = songs[i]._id.toString()
        song.onclick = setIdOfTopic
        song.className = "pSong"
        songDropdown.append(song)
    }


}
async function loadPlayLists() {
    const response = await fetch('/api/playlists/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({})
    })
    let playlists = JSON.parse(await response.text())

    let playlistDropdown = document.getElementById("postTopicDropDown")
    for (let i = 0; i < playlists.length; i++) {
        let playlist = document.createElement("p")
        playlist.textContent = playlists[i].name
        playlist.topicID = playlists[i]._id.toString()
        playlist.onclick = setIdOfTopic
        playlist.className = "pSong"
        playlistDropdown.append(playlist)
    }
}

function setIdOfTopic(event) {
    let topic = event.target
    let id = topic.topicID
    let content = event.target.textContent
    let topicP = document.getElementById("topicP")
    topicP.textContent = content
    topicP.className = "topic"
    let topicIdInput = document.getElementById("idOfTopic")
    topicIdInput.value = id
    let dropdown = document.getElementById("postTopicDropDown")
    dropdown.className = "postTopicDropDown-hidden"
    let topicLabel = document.getElementById("topicLabel")
    topicLabel.className = "LabelMarginTop"
    let submitNewPost = document.getElementById("submitNewPost")
    submitNewPost.className = "addPost"
}

export async function submitNewPost(ev) {
    ev.preventDefault()

    let newPost = {}
    newPost['title'] = document.getElementById("title").value
    newPost['content'] = document.getElementById("content").value
    newPost['isSong'] = document.getElementById("isSong").checked
    newPost['isPlaylist'] = document.getElementById("isPlaylist").checked
    newPost['idOfTopic'] = document.getElementById("idOfTopic").value
    console.log(newPost)

    const response = await fetch('/api/posts/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPost)
    })
    let idOfNewPost = await response.text()
    console.log(idOfNewPost)
    let redirectURL = document.location.origin + "/forum.html?id=" + idOfNewPost
    console.log(redirectURL)
    window.location.href = redirectURL

}

window.onload = function () {
    nav()
    let searchButton = document.getElementById("searchButton")
    searchButton.onclick = toggleDropDown

    let isSong = document.getElementById("isSong")
    isSong.onchange = onTopicChange

    let isPlaylist = document.getElementById("isPlaylist")
    isPlaylist.onchange = onTopicChange

    let submitButton = document.getElementById("submitNewPost")
    submitButton.onclick = submitNewPost

}

