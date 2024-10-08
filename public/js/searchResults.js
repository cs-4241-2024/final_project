import { nav } from "./main.js";
import { makeURLWithParams, getParam } from "./urlHelpers.js";

function setup() {
	//Setting the title
	const query = getParam(window.location.href, "query");
	const seachResultsPageTitle = document.getElementById("searchPageTitle");
	seachResultsPageTitle.textContent = "Search Results for " + query;

	searchPosts(query);
	searchSongs(query);
	searchPlaylists(query);
}

//TODO: Done except waiting on the ability to get the usernames by id which then needs to be rendered
async function searchPosts(query) {
	const searchResultsArea = document.getElementById("searchResultsArea");
	let innerHTML = "";

	//Searching posts based off of title and content
	let searchParamsTitle = {};
	searchParamsTitle['title'] = query;
	searchParamsTitle['content'] = query;

	const response = await fetch('/api/posts/search', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(searchParamsTitle)
	})

	let resultPost = JSON.parse(await response.text())

	//Contains all the posts from the query
	for (let i = 0; i < resultPost.length; i++) {
		let songPlaylist;

		//Handles rendering information for whether the post is about a song or a playlist
		if (resultPost[i]["isPlaylist"]) {
			//It's a playlist
			let playlistID = resultPost[i]["idOfTopic"];
			let searchParams = {};
			searchParams['_id'] = playlistID;

			// Request to get a song by ID
			const responsePlaylist = await fetch('/api/playlists/search', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(searchParams)
			})

			// Contains song object if found
			songPlaylist = JSON.parse(await responsePlaylist.text());
		}
		else {
			//It's a song
			let songID = resultPost[i]["idOfTopic"];
			console.log(songID)

			// Request to get a song by ID
			const responseSong = await fetch(`/api/songs/${songID}`, {
				method: 'GET',
				headers: { 'Content-Type': 'application/json' }
			});

			// Contains song object if found
			songPlaylist = JSON.parse(await responseSong.text());
		}

		//Make href link using makeURLWithParams
		const linkString = makeURLWithParams("playlists", "id", resultPost[i]["_id"]);

		innerHTML += `
			<section class="postSection">
				<h2 class="postTitle"><a href="`+ linkString + `" class="postLink">` + resultPost[i]["title"] + ` - ` + songPlaylist[0]["name"] + `</a></h2>
				<p class="postContent">`+ `User` + ` - ` + resultPost[i]["content"] + `</p >
			</section >
			`;
	}
	searchResultsArea.innerHTML = searchResultsArea.innerHTML + innerHTML;
}

async function searchSongs(query) {
	const searchResultsArea = document.getElementById("searchResultsArea");
	let innerHTML = "";
	const response = await fetch('/api/songs/search', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ name: query, artist: query })
	});

	let results = JSON.parse(await response.text());

	for (let i = 0; i < results.length; i++) {
		//Make href link using makeURLWithParams
		const linkString = makeURLWithParams("songs", "id", results[i]["_id"]);

		innerHTML += `
			<section class="postSection">
				<h2 class="postTitle"><a href="`+ linkString + `" class="postLink">` + results[i]["name"] + ` by ` + results[i]["artist"] + `</a></h2>
				<p class="postContent">Type: Song</p>
			</section>`;
	}
	searchResultsArea.innerHTML = searchResultsArea.innerHTML + innerHTML;
}

//TODO: Done except waiting on the ability to get the usernames by id which then needs to be rendered
async function searchPlaylists(query) {
	const searchResultsArea = document.getElementById("searchResultsArea");
	let innerHTML = "";
	const response = await fetch('/api/playlists/search', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ name: query })
	})

	let results = JSON.parse(await response.text())
	for (let i = 0; i < results.length; i++) {
		//Getting the username
		let userID = results[i]["createdBy"];
		const responseUsername = await fetch(`/api/users/userName/${userID}`, {
			method: 'GET'
		})
		let username = await responseUsername.text()

		//Make href link using makeURLWithParams
		const linkString = makeURLWithParams("playlists", "id", results[i]["_id"]);

		innerHTML += `
			<section class="postSection">
				<h2 class="postTitle"><a href="`+ linkString + `" class="postLink">` + results[i]["name"] + ` by ` + username + `</a></h2>
				<p class="postContent">Type: Playlist</p>
			</section>`;
	}

	searchResultsArea.innerHTML = searchResultsArea.innerHTML + innerHTML;
}

window.onload = function () {
	nav();
	setup();
}