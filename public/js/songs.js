import { nav } from "./main.js";

async function getSong() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    // ID of song in database (string)
    //let songID = "66fad67d7c666b549aef4189";http://localhost:3000/songs.html/?id=66fad67d7c666b549aef4189
    let songID = urlParams.get('id');
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


    let title = document.getElementById("SongTitle");
    title.textContent = song.name;

    let artist = document.getElementById("ARTIST");
    artist.textContent = "Artist: " + song.artist;

    let album = document.getElementById("ALBUM");
    album.textContent = "Album: " + song.album;

    let duration = document.getElementById("DUR");
    duration.textContent = "Duration: " + song.duration;

    let genre = document.getElementById("GENRE");
    genre.textContent = "Genre: " + song.genre;

    let date = document.getElementById("DATE");
    date.textContent = "Date created: " + song.releaseDate;
}


function getSongName() {

}

window.onload = function () {
    nav();
    getSong();
}