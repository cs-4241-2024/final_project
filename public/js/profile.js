import { nav, createPostPageRedirect, createSongPageRedirect, createPlaylistPageRedirect } from "./main.js";
import { makeURLWithParams, getParam } from "./urlHelpers.js";

window.onload = function () {
    nav();
    retrieveUserPlaylists();
    retrieveUserFavoriteSongs();
    retrieveUserPosts();
    showUsername();
    const createPostButton = document.getElementById("createPostButton");
    createPostButton.onclick = createPostPageRedirect;

    const createSongButton = document.getElementById("createSongButton");
    createSongButton.onclick = createSongPageRedirect;

    const createPlaylistButton = document.getElementById("createPlaylistButton");
    createPlaylistButton.onclick = createPlaylistPageRedirect;
}

async function showUsername() {
    const userNamePlacement = document.getElementById("userNamePlacement");
    let innerHTML = "";
    try {
        const response = await fetch('/api/users/git/userName', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        });
        if (!response.ok) throw new Error("Could not retrieve username.");
        let userName = await response.text();
        userNamePlacement.textContent = `This is ${userName}'s profile page!`;
    }


    catch (error) {

        console.error("Error! Unable to retrieve username.", error);
        userNamePlacement.textContent = "Unable to show the username. Apologies!";
    }
}

async function retrieveUserPlaylists() {
    const playlistHolder = document.getElementById("playlistHolder");
    let innerHTML = "";
    try {
        const response = await fetch('/api/users/playlists', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        });
        if (!response.ok) throw new Error("Could not retrieve playlists.");
        let playlists = JSON.parse(await response.text());

        if (playlists.length === 0) { innerHTML = `<p>No playlists present.</p>`; }
        else {
            for (let i = 0; i < playlists.length; i++) {
                const playlist = playlists[i];
                const linkString = makeURLWithParams("playlists", "id", playlist._id);
                innerHTML += `<section class="playlistSection"> <h2 class="playlistTitle">
                <a href="${linkString}" class="playlistLink">${playlist.name}</a>
            </h2>
            </section>`;

            }
        }
        playlistHolder.innerHTML = innerHTML;
    }
    catch (error) {
        console.error("Error! Could not obtain playlists!", error);
        playlistHolder.innerHTML = `<p>Could not load playlists.</p>`;
    }
}

async function retrieveUserFavoriteSongs() {
    const favoriteSongHolder = document.getElementById("favoriteSongHolder");
    let innerHTML = "";
    try {
        const response = await fetch('/api/users/favorites', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        });

        if (!response.ok) throw new Error("Could not retrieve favorites.");
        let favorites = JSON.parse(await response.text());

        if (favorites.length === 0) { innerHTML = `<p>No favorites present.</p>`; }
        else {
            for (let i = 0; i < favorites.length; i++) {
                const favorite = favorites[i];
                const linkString = makeURLWithParams("songs", "id", favorite._id);
                innerHTML += `<section class="favoriteSongSection"> <h2 class="favoriteSongTitle">
                <a href="${linkString}" class="favoriteSongLink">${favorite.name} by ${favorite.artist} </a>
            </h2>
            </section>`;

            }
        }
        favoriteSongHolder.innerHTML = innerHTML;
    }
    catch (error) {
        console.error("Error! Could not obtain favorite songs!", error);
        favoriteSongHolder.innerHTML = `<p>Could not load favorite songs.</p>`;
    }

}

async function retrieveUserPosts() {
    const postHolder = document.getElementById("postHolder");
    let innerHTML = "";
    try {
        const response = await fetch('/api/users/posts', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        });
        if (!response.ok) throw new Error("Could not retrieve user's posts.");
        let posts = JSON.parse(await response.text());

        if (posts.length === 0) { innerHTML = `<p>No posts present.</p>`; }
        else {
            for (let i = 0; i < posts.length; i++) {
                const post = posts[i];
                const linkString = makeURLWithParams("forum", "id", post._id);
                innerHTML += `<section class="postSection"> <h2 class="postTitle">
                <a href="${linkString}" class="postLink">${post.title} </a>
            </h2>
            </section>`;

            }
        }
        postHolder.innerHTML = innerHTML;
    }
    catch (error) {
        console.error("Error! Could not obtain user's posts!", error);
        postHolder.innerHTML = `<p>Could not load user's posts.</p>`;
    }
}