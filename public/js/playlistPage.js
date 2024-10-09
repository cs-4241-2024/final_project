
import {nav} from "./main.js"
import {getParam} from "./urlHelpers.js"
export async function loadPlaylist(){

    let playlistID = getParam(window.location.href,"id")

    const response = await fetch('/api/playlists/search', {
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({_id:playlistID})
    })

    let userID = ""
    try {
        const userResponse = await fetch(`/api/users/git/dbID`, {
            method: 'GET'
        })
        userID = await userResponse.text()
    }catch (e) {
        console.log(e)
    }

    const playlistSongsRes = await fetch(`/api/playlists/${playlistID}/songs`, {
        method: 'GET',
    })

    let playlist = JSON.parse(await response.text())[0]
    let playListSongs = JSON.parse(await playlistSongsRes.text())
    console.log("stryder")
    console.log(playlist)
    console.log(playListSongs)
    console.log(userID)
    console.log(userID === playlist.createdBy)
    console.log(playlist.createdBy)

    let playListName = document.getElementById("playlistTitle")
    playListName.textContent = "Playlist: "+playlist.name
    document.getElementById("editTitleButton").currentTitle = playlist.name

    let songArea = document.getElementById("playlistSongsArea")
    while (songArea.children.length >0){
        songArea.removeChild(songArea.lastChild)
    }

    //hide add and edit buttons
    if(userID !== playlist.createdBy){
        document.getElementById("divForAdd").style.display="none"
    }

    for (let i =0; i<playListSongs.length;i++){
        let newSection = document.createElement("section")
        newSection.className = "songSection"
        let songNameAndArtists = document.createElement("section")
        songNameAndArtists.className = "songInfo"
        songNameAndArtists.style.fontWeight = "bold"
        songNameAndArtists.textContent = playListSongs[i].name + "\n by "+ playListSongs[i].artist
        let songAlbum = document.createElement("section")
        songAlbum.className = "songInfo"
        songAlbum.textContent = "Album: " +playListSongs[i].album
        let songDuration = document.createElement("section")
        songDuration.className = "songInfo"
        songDuration.textContent = "Duration: " +playListSongs[i].duration
        newSection.append(songNameAndArtists)
        newSection.append(songAlbum)
        newSection.append(songDuration)
        if(userID === playlist.createdBy) {
            let buttonContainer = document.createElement("div")
            buttonContainer.className="buttonContainer"
            let deleteButton = document.createElement("button")
            deleteButton.className = "button"
            deleteButton.innerText = "Delete Song"
            deleteButton.playListID = playlist._id.toString()
            deleteButton.songID = playListSongs[i]._id.toString()
            deleteButton.onclick = handleDelete

            let moveUpButton = document.createElement("button")
            moveUpButton.className = "buttonWithMargin"
            moveUpButton.innerText = "Move up"
            moveUpButton.playlistID = playlist._id.toString()
            moveUpButton.songID = playListSongs[i]._id.toString()
            moveUpButton.movement = -1
            moveUpButton.onclick=moveSong

            let moveDownButton = document.createElement("button")
            moveDownButton.className = "buttonWithMargin"
            moveDownButton.innerText = "Move down"
            moveDownButton.playlistID = playlist._id.toString()
            moveDownButton.songID = playListSongs[i]._id.toString()
            moveDownButton.movement = 1
            moveDownButton.onclick=moveSong

            buttonContainer.append(deleteButton)
            buttonContainer.append(moveUpButton)
            buttonContainer.append(moveDownButton)
            newSection.append(buttonContainer)
        }
        songArea.append(newSection)
    }
}

async function handleDelete(event) {
    let deleteButton = event.target
    //send id to delete
    let playlistID = deleteButton.playListID
    let songIDToDelete = deleteButton.songID

    const response = await fetch(`/api/playlists/${playlistID}/delete-song`, {
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({songID:songIDToDelete})
    })
    if (response.ok) {
        loadPlaylist().then()
    }
}


async function toggleDropDown(){
    let dropdown = document.getElementById("songDropDown")
    if(dropdown.className==="addSongDropDown-visable"){
        dropdown.className = "addSongDropDown-hidden"
    }
    else{
        dropdown.className = "addSongDropDown-visable"
    }
}

async function loadSongs(){

    const response = await fetch('/api/songs/search', {
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({})
    })

    let songs = JSON.parse(await response.text())
    let playlistID = getParam(window.location.href,"id")

    let songDropdown = document.getElementById("songDropDown")
    for(let i=0;i<songs.length;i++){
        let song = document.createElement("p")
        song.textContent = songs[i].name+" by "+songs[i].artist + " in album " +songs[i].album
        song.songID = songs[i]._id.toString()
        song.playlistID = playlistID
        song.onclick=addSongs
        song.className="pSong"
        songDropdown.append(song)
    }


}

async function addSongs(event){
    let songP = event.target
    let playlistID = songP.playlistID
    let songID = songP.songID
    const response = await fetch(`/api/playlists/${playlistID}/add-song`, {
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({songID:songID})
    })

    loadPlaylist().then()
}

function searchResults(){
    const input = document.getElementById("songSearch");
    const searchQuery = input.value.toLowerCase();
    const songsContainer = document.getElementById("songDropDown");
    const songs = songsContainer.getElementsByTagName("p");
    console.log(searchQuery)
    for (let i = 0; i < songs.length; i++) {
        let songContent = songs[i].textContent;
        console.log("songContent")
        console.log(songContent)
        if (songContent.toLowerCase().indexOf(searchQuery) > -1) {
            songs[i].style.display = "";
        } else {
            songs[i].style.display = "none";
        }
    }
}

async function handleEditTitle(event){
    let editButton = event.target
    let title = editButton.currentTitle
    editButton.textContent="Save"
    editButton.removeEventListener("click",handleEditTitle)
    let titleDiv = document.getElementById("titleContainer")
    while (titleDiv.children.length >0){
        titleDiv.removeChild(titleDiv.lastChild)
    }
    let input = document.createElement("input")
    input.setAttribute("value",title)
    input.setAttribute("type","text")
    input.id="titleEdit"
    input.className = "editTitle"
    titleDiv.append(input)
    editButton.addEventListener("click",handleSave)
    console.log("editfired")
}

async function handleSave(event) {
    let editButton = event.target
    let input = document.getElementById("titleContainer").children[0]
    let newTitle = input.value
    let playlistID = getParam(window.location.href,"id")
    console.log("newTitle")
    console.log(newTitle)

    const responseEdit = await fetch(`/api/playlists/name/${playlistID}`, {
        method: 'PUT',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({name:newTitle})
    })

    if(responseEdit.ok){
        editButton.removeEventListener("click",handleSave)
        location.reload()
    }
    else{
        console.error("edit failed")
    }

}

async function moveSong(event){
    let moveButton = event.target
    let playlistID = moveButton.playlistID
    let songID = moveButton.songID
    let movementAmount = moveButton.movement
    console.log({playlist:playlistID,song:songID,movement:movementAmount})
    const responseEdit = await fetch(`/api/playlists/moveSong`, {
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({playlist:playlistID,song:songID,movement:movementAmount})
    })

    loadPlaylist().then()
}

window.onload = function () {
    nav()
    loadPlaylist().then()
    loadSongs().then()
    let addSongDropDownButton = document.getElementById("toggleButton")
    addSongDropDownButton.onclick = toggleDropDown
    let songSearchInput = document.getElementById("songSearch")
    songSearchInput.onkeyup = searchResults
    let titleEdit = document.getElementById("editTitleButton")
    titleEdit.addEventListener("click",handleEditTitle)
    console.log("onload fired")
}