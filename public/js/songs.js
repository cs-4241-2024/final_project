import { nav } from "./main.js";

let songId;

async function getSong() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    // ID of song in database (string)
    //let songID = "66fad67d7c666b549aef4189";http://localhost:3000/songs.html/?id=66fad67d7c666b549aef4189
    let songID = urlParams.get('id');
    songId = songID;
    console.log(queryString);
    console.log(urlParams["song"]);

    // Request to get a song by ID
    const response = await fetch(`/api/songs/${songID}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });

    // Contains song object if found
    let song = await response.json();
    console.log(song);

    let title = document.getElementById("songTitle");
    title.textContent = song.name;

    let artist = document.getElementById("artist");
    artist.textContent = "Artist: " + song.artist;

    let album = document.getElementById("album");
    album.textContent = "Album: " + song.album;

    let duration = document.getElementById("duration");
    duration.textContent = "Duration: " + song.duration;

    let genre = document.getElementById("genre");
    genre.textContent = "Genre: " + song.genre;

    let releaseDate = document.getElementById("releaseDate");
    releaseDate.textContent = "Release Date: " + song.releaseDate;

    const addToFavoritesButton = document.getElementById("addToFavoritesButton");
    addToFavoritesButton.onclick = addSongToFavorites;
}

const addSongToFavorites = async function (songId) {
    const responseUserId = await fetch('/api/users/git/dbID', {
        method: 'get'
    })
    //contains the current logged in user’s database ID
    let userID = await responseUserId.text()

    console.log(userID);

    //Add the song to the usser's favorite songs
    const response = await fetch(`/api/users/favorites/${songId}`, {
        method: 'POST'
    })
    let result = await response.text();

    alert("Song successfully added to your favorites!");
}

window.onload = function () {
    nav();
    getSong();
}