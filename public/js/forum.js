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

		// Request to get a song by ID
		const responseSong = await fetch(`/api/songs/${songID}`, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		});
		songPlaylist = JSON.parse(await responseSong.text());
	}

	//Sets the text to the name of the song/playlist
	const songPlaylistName = document.getElementById("songPlaylistName");
	songPlaylistName.textContent = songPlaylist["name"];
	if (post[0]["isPlaylist"]) {
		//It's a playlist
		songPlaylistName.href = makeURLWithParams("playlists", "id", post[0]["idOfTopic"]);
	}
	else {
		//It's a song
		songPlaylistName.href = makeURLWithParams("songs", "id", post[0]["idOfTopic"]);
	}

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
		let userID = replies[i]["createdBy"];
		const responseReplyUsername = await fetch(`/api/users/userName/${userID}`, {
			method: 'GET'
		})
		let replyUsername = await responseReplyUsername.text();
		postAndRepliesArea.innerHTML += `
		<p class="reply">` + replyUsername + ` - ` + replies[i]["content"] + `</p>
		<hr class="solidDivider">`
	}
	const submitCommentButton = document.getElementById("submitCommentButton");
	submitCommentButton.onclick = addComment;
}

async function addComment() {
	const postId = getParam(window.location.href, "id");
	const postAndRepliesArea = document.getElementById("postAndRepliesArea");
	// postAndRepliesArea.innerHTML += `
	// 	<p class="reply">` + replyUsername + ` - ` + replies[i]["content"] + `</p>
	// 	<hr class="solidDivider">`
	const commentBox = document.getElementById("commentBox");

	//request the username from the database
	const responseCurrentUSer = await fetch('/api/users/git/dbID', {
		method: 'GET'
	})
	//contains the current logged in user’s userName
	let userId = await responseCurrentUSer.text();
	let newContent = document.getElementById("commentBox").value;

	// create reply object
	let newReply = {};
	newReply['content'] = commentBox.value;
	newReply['createdBy'] = userId; // user id
	commentBox.value = "";

	// send object to sever
	const response = await fetch(`/api/replies/${postId}`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(newReply)
	});

	// Confirmation of reply creation
	const result = await response.json();

	const responseReplyUsername = await fetch(`/api/users/userName/${userId}`, {
		method: 'GET'
	})
	let replyUsername = await responseReplyUsername.text();
	postAndRepliesArea.innerHTML += `
		<p class="reply">` + replyUsername + ` - ` + newContent + `</p>
		<hr class="solidDivider">`
}

window.onload = function () {
	nav();
	setup();
}