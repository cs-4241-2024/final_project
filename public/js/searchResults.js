import { nav } from "./main.js";
import { makeURLWithParams, getParam } from "./urlHelpers.js";
// TODO: Make it so links direct you to pages with the id as a parameter
//TODO: Make it diplay the username
function setup() {
	//Setting the title
	const query = getParam(window.location.href, "query");
	const seachResultsPageTitle = document.getElementById("searchPageTitle");
	seachResultsPageTitle.textContent = "Search Results for " + query;

	searchPosts(query);


	//TODO: Make it display search results for songs
	//TODO: Make it display search results for playlists
}

async function searchPosts(query) {
	const searchResultsArea = document.getElementById("searchResultsArea");
	let innerHTML = "";

	//Searching posts based off of title
	let searchParamsTitle = {};
	searchParamsTitle['title'] = query;

	const responseTitle = await fetch('/api/posts/search', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(searchParamsTitle)
	})

	let resultTitle = JSON.parse(await responseTitle.text())

	//Contains all the posts from the query
	let postIds = [];
	for (let i = 0; i < resultTitle.length; i++) {
		postIds.push(resultTitle[i]["_id"]);
		console.log(postIds);

		let songPlaylist;

		if (resultTitle[i]["isPlaylist"]) {
			//It's a playlist
			let playlistID = resultTitle[i]["idOfTopic"];
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
			let songID = resultTitle[i]["idOfTopic"];
			console.log(songID)

			// Request to get a song by ID
			const responseSong = await fetch(`/api/songs/${songID}`, {
				method: 'GET',
				headers: { 'Content-Type': 'application/json' }
			});


			// Contains song object if found
			songPlaylist = JSON.parse(await responseSong.text());
			console.log(songPlaylist);
		}

		//Make href link using makeURLWithParams
		const linkString = makeURLWithParams("playlists", "id", resultTitle[i]["_id"]);

		innerHTML += `
			<section class="postSection">
				<h2 class="postTitle"><a href="`+ linkString + `" class="postLink">` + resultTitle[i]["title"] + ` - ` + songPlaylist[0]["name"] + `</a></h2>
				<p class="postContent">`+ `User` + ` - ` + resultTitle[i]["content"] + `</p >
			</section >
			`;
	}

	//Searching posts based off of content
	let searchParamsContent = {};
	searchParamsContent['content'] = query;

	const responseContent = await fetch('/api/posts/search', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(searchParamsContent)
	})

	//Contains all the posts from the query
	let resultContent = JSON.parse(await responseContent.text());

	for (let i = 0; i < resultContent.length; i++) {
		if (postIds.indexOf(resultContent[i]["_id"]) == -1) {
			postIds.push(resultContent[i]["_id"]);
			//TODO: innerHTML here
			let songPlaylist;

			if (resultContent[i]["isPlaylist"]) {
				//It's a playlist
				let playlistID = resultContent[i]["idOfTopic"];
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
				let songID = resultContent[i]["idOfTopic"];

				// Request to get a song by ID
				const responseSong = await fetch(`/api/songs/${songID}`, {
					method: 'GET',
					headers: { 'Content-Type': 'application/json' }
				});

				// Contains song object if found
				songPlaylist = JSON.parse(await responseSong.text());
			}

			//Make href link using makeURLWithParams
			const linkString = makeURLWithParams("playlists", "id", resultContent[i]["_id"]);

			innerHTML += `
			<section class="postSection">
				<h2 class="postTitle"><a href="`+ linkString + `" class="postLink">` + resultContent[i]["title"] + ` - ` + songPlaylist[0]["name"] + `</a></h2>
				<p class="postContent">`+ `User` + ` - ` + resultContent[i]["content"] + `</p >
			</section >
			`;
		}
		console.log(postIds);
	}
	searchResultsArea.innerHTML = innerHTML;
}

window.onload = function () {
	nav();
	setup();
}