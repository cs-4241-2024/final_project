import {createCell} from "./testForm.js";

export async function getLoggedInUser(){
    const response = await fetch('/api/users/git/userName', {
        method: 'get'
    })
    console.log("fired")
    let pUser = document.getElementById("pUser")
    if(response.ok){
        pUser.innerText= "User: " + await response.text()
    }
    else{
        pUser.innerText= ""
    }
}

export async function getLoggedInUserID(){
    const response = await fetch('/api/users/git/dbID', {
        method: 'get'
    })
    console.log("fired")
    let pUserID = document.getElementById("pID")
    if(response.ok){
        pUserID.innerText= "User ID: " + await response.text()
    }
    else{
        pUserID.innerText= ""
    }
}

export async function logout(){
    const response = await fetch('/api/users/git/logout', {
        method: 'POST'
    })
    window.location.href="/testPages/testLogin.html"
}



export async function loadUsersPosts(){
    const response = await fetch('/api/users/posts', {
        method: 'GET'
    })

    let posts = JSON.parse(await response.text())

    let tableBody = document.getElementById("userPostsTable")
    for (let i =0; i<posts.length;i++){
        let newTableRow = document.createElement("tr")
        createCell(newTableRow,posts[i]["title"])
        createCell(newTableRow,posts[i]["content"])
        createCell(newTableRow,posts[i]["isSong"])
        createCell(newTableRow,posts[i]["isPlaylist"])
        createCell(newTableRow,posts[i]["idOfTopic"])
        createCell(newTableRow,posts[i]["createdBy"])
        createCell(newTableRow,posts[i]["createdOn"])
        createCell(newTableRow,posts[i]["replies"])
        tableBody.append(newTableRow)
    }
}


export async function loadUsersPlaylist(){
    const response = await fetch('/api/users/playlists', {
        method: 'GET'
    })

    let playLists = JSON.parse(await response.text())
    console.log(playLists)

    let tableBody = document.getElementById("userPlaylistsTable")
    for (let i =0; i<playLists.length;i++){
        let newTableRow = document.createElement("tr")
        createCell(newTableRow,playLists[i]["_id"])
        createCell(newTableRow,playLists[i]["createdBy"])
        createCell(newTableRow,playLists[i]["createdOn"])
        createCell(newTableRow,playLists[i]["name"])
        createCell(newTableRow,playLists[i]["songs"])
        tableBody.append(newTableRow)
    }
}

export async function loadUsersUploadedSongs(){
    const response = await fetch('/api/users/uploadedSongs', {
        method: 'GET'
    })

    let uploadedSongs = JSON.parse(await response.text())
    console.log(uploadedSongs)

    let tableBody = document.getElementById("userUploadedSongsTable")
    for (let i =0; i<uploadedSongs.length;i++){
        let newTableRow = document.createElement("tr")
        createCell(newTableRow,uploadedSongs[i]["_id"])
        createCell(newTableRow,uploadedSongs[i]["createdBy"])
        createCell(newTableRow,uploadedSongs[i]["createdOn"])
        createCell(newTableRow,uploadedSongs[i]["name"])
        createCell(newTableRow,uploadedSongs[i]["album"])
        createCell(newTableRow,uploadedSongs[i]["artist"])
        createCell(newTableRow,uploadedSongs[i]["duration"])
        createCell(newTableRow,uploadedSongs[i]["genre"])
        createCell(newTableRow,uploadedSongs[i]["releaseDate"])
        tableBody.append(newTableRow)
    }
}

export async function loadUsersReplies(){
    const response = await fetch('/api/users/replies', {
        method: 'GET'
    })

    let replies = JSON.parse(await response.text())
    console.log(replies)

    let tableBody = document.getElementById("userRepliesTable")
    for (let i =0; i<replies.length;i++){
        let newTableRow = document.createElement("tr")
        createCell(newTableRow,replies[i]["_id"])
        createCell(newTableRow,replies[i]["createdBy"])
        createCell(newTableRow,replies[i]["createdOn"])
        createCell(newTableRow,replies[i]["content"])
        tableBody.append(newTableRow)
    }
}

export async function loadUsersFavorites(){
    const response = await fetch('/api/users/favorites', {
        method: 'GET'
    })

    let favorites = JSON.parse(await response.text())
    console.log(favorites)

    let tableBody = document.getElementById("userFavoritesTable")
    for (let i =0; i<favorites.length;i++){
        let newTableRow = document.createElement("tr")
        createCell(newTableRow,favorites[i]["_id"])
        createCell(newTableRow,favorites[i]["createdBy"])
        createCell(newTableRow,favorites[i]["createdOn"])
        createCell(newTableRow,favorites[i]["name"])
        createCell(newTableRow,favorites[i]["album"])
        createCell(newTableRow,favorites[i]["artist"])
        createCell(newTableRow,favorites[i]["duration"])
        createCell(newTableRow,favorites[i]["genre"])
        createCell(newTableRow,favorites[i]["releaseDate"])
        tableBody.append(newTableRow)
    }
}


export async function addFav(ev){
    ev.preventDefault()
    let favID = document.getElementById("favID").value
    const response = await fetch(`/api/users/favorites/${favID}`, {
        method: 'POST'
    })

    location.reload()
}