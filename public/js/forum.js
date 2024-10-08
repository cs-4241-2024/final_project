import { nav } from "./main.js";
import { makeURLWithParams, getParam } from "./urlHelpers.js";

async function setup() {
	//Setting the title
	const id = getParam(window.location.href, "id");
	const postTitle = document.getElementById("postTitle");
	// seachResultsPageTitle.textContent = "Search Results for " + query;

	let searchParams = {};
	searchParams['_id'] = id;

	const responsePost = await fetch('/api/posts/search', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(searchParams)
	})

	let post = JSON.parse(await responsePost.text())

	console.log(post[0]["title"])
	postTitle.textContent = post[0]["title"];

	let songPlaylist;
	//Handles rendering information for whether the post is about a song or a playlist
	if (post[0]["isPlaylist"]) {
		//It's a playlist
		let playlistID = post[0]["idOfTopic"];
		let searchParams = {};
		searchParams['_id'] = playlistID;

		// Request to get a song by ID
		const responsePlaylist = await fetch('/api/playlists/search', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(searchParams)
		})
		songPlaylist = JSON.parse(await responsePlaylist.text());
	}
	else {
		//It's a song
		let songID = post[0]["idOfTopic"];
		console.log(songID)

		// Request to get a song by ID
		const responseSong = await fetch(`/api/songs/${songID}`, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		});
		songPlaylist = JSON.parse(await responseSong.text());
	}

	//Sets the text to the name of the song/playlist
	const songPlaylistName = document.getElementById("songPlaylistName");
	songPlaylistName.textContent = songPlaylist[0]["name"];

	//Gets the username of person that wrote the reply
	let userID = post[0]["createdBy"];
	const responseUsername = await fetch(`/api/users/userName/${userID}`, {
		method: 'GET'
	})
	let username = await responseUsername.text()
	const usernameContent = document.getElementById("usernameContent");
	usernameContent.textContent = username + " - " + post[0]["content"];

	const postAndRepliesArea = document.getElementById("postAndRepliesArea");

	// Request to get all replies for the post
	const response = await fetch(`/api/replies/${id}`, {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' }
	});

	// Array of replies from the server
	let replies = await response.json();

	for (let i = 0; i < replies.length; i++) {
		let userID = post[0]["createdBy"];
		const responseReplyUsername = await fetch(`/api/users/userName/${userID}`, {
			method: 'GET'
		})
		let replyUsername = await responseReplyUsername.text();
		postAndRepliesArea.innerHTML += `
		<p class="reply">` + replyUsername + ` - ` + replies[i]["content"] + `</p>
		<hr class="solidDivider">`
	}

}

window.onload = function () {
	nav();
	setup();
}