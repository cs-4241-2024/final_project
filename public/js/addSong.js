import { makeURLWithParams } from "./urlHelpers.js";
import { nav } from "./main.js";

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("addSongForm").addEventListener("submit", async function (event) {
        event.preventDefault();

        let userID = null;
        try {
            const userResponse = await fetch('/api/users/git/dbID', { method: 'GET' });
            if (userResponse.ok) {
                userID = await userResponse.text();
            } else {
                console.log('Failed to get user ID');
                return;
            }
        } catch (error) {
            console.error("Error getting user ID:", error);
        }

        const name = document.getElementById("name").value;
        const artist = document.getElementById("artist").value;
        const album = document.getElementById("album").value;
        const duration = document.getElementById("duration").value;
        const genre = document.getElementById("genre").value;
        const releaseDate = document.getElementById("releaseDate").value;

        const newSong = {
            name: name,
            artist: artist,
            album: album,
            duration: duration,
            genre: genre,
            releaseDate: releaseDate,
            createdBy: userID,
            createdOn: new Date()
        }



        try {
            const response = await fetch('/api/songs', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newSong),
            })

            if (response.ok) {
                const result = await response.json()
                const songId = result.insertedId;
                window.location.href = makeURLWithParams("songs", "id", songId);
            }

        } catch (error) {
            console.log(error);
        }
    });
});

window.onload = function () {
    nav()
}