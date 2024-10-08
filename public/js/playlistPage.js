
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

    let songArea = document.getElementById("playlistSongsArea")
    while (songArea.children.length >0){
        songArea.removeChild(songArea.lastChild)
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
            let deleteButton = document.createElement("button")
            deleteButton.className = "button"
            deleteButton.innerText = "Delete Song"
            deleteButton.playListID = playlist._id.toString()
            deleteButton.songID = playListSongs[i]._id.toString()
            deleteButton.onclick = handleDelete
            newSection.append(deleteButton)
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



window.onload = function () {
    nav()
    loadPlaylist().then()
}