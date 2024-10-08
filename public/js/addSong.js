document.getElementById("addSongForm").addEventListener("submit", async function (event) {
    event.preventDefault();

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
    }

    try {
        const response = await fetch('/api/songs', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newSong),
        })

        if (response.ok) {
            const result = await response.json();
            document.getElementById("responseMessage").textContent = "Song added!"
        } else {
            document.getElementById("responseMessage").textContent = "Failed to add song"
        }
    } catch (error) {
        console.log(error);
    }
});