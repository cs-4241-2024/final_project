// FRONT-END (CLIENT) JAVASCRIPT HERE
import { makeURLWithParams, getParam, makeURL } from "./urlHelpers.js";

const postContainer = document.getElementById("postContainer");


function iloveClicking() {
	alert("I LOVE CLICKING")
}



//Adds the navigation bar to the location of the navbar classon each page.
//To add the nav bar to a page just add the following HTML element <nav class="navbar"></nav>
export const nav = function () {
	const navbar = document.querySelector('.navbar')
	navbar.innerHTML = `
	<table class=navbar>
		<th class=navbarItem><a class=navbarLink href="index.html">Home</a></th>
		<th class=navbarItem><a class=navbarLink href="profile.html">Profile</a></th>
	</table>`
}

//Sends the user to the search-results page with parameters in the url
const search = function () {
	const query = document.getElementById("searchInput");
	if (query.value != "") {
		const urlWithParams = makeURLWithParams("search-results", "query", query.value);
		console.log(urlWithParams);
		const paramValue = getParam(urlWithParams, "query");
		console.log(paramValue);
		location.assign(urlWithParams);
	}
	else {
		alert("Please enter something to search for!");
	}
}

//Sends the user to the addPost.html page
export const createPostPageRedirect = function () {
	const redirectStirng = makeURL("addPost");
	location.assign(redirectStirng);
}

//Sends the user to the addPost.html page
export const createSongPageRedirect = function () {
	const redirectStirng = makeURL("add-song");
	location.assign(redirectStirng);
}

//Sends the user to the addPost.html page
export const createPlaylistPageRedirect = function () {
	const redirectStirng = makeURL("addPlaylist");
	location.assign(redirectStirng);
}

async function recoverRecentPosts() {
	try {
		const response = await fetch('/api/posts/recent');
		if (!response.ok) throw new Error("Failure.")
		const posts = await response.json();
		showPosts(posts);
	}
	catch (error) {
		console.error("Couldn't recover recent posts ", error);

	}
}

function showPosts(posts) {
	postContainer.innerHTML = '';
	posts.forEach(post => {
		const postSection = document.createElement("section");
		postSection.className = "postSection";

		const postTitle = document.createElement("h2");
		postTitle.className = "postTitle";

		const postLink = document.createElement("a");
		postLink.className = "postLink";

		postLink.textContent = post.title;
		postLink.href = makeURLWithParams("forum", "id", post._id);

		const postContent = document.createElement("p");
		postContent.className = "postContent";
		postContent.textContent = post.content;

		postTitle.appendChild(postLink);
		postSection.appendChild(postTitle);
		postSection.appendChild(postContent);
		postContainer.appendChild(postSection);
	});
}

window.onload = function () {
	nav()
	const searchButton = document.getElementById("searchButton");
	searchButton.onclick = search;

	const createPostButton = document.getElementById("createPostButton");
	createPostButton.onclick = createPostPageRedirect;

	const createSongButton = document.getElementById("createSongButton");
	createSongButton.onclick = createSongPageRedirect;

	const createPlaylistButton = document.getElementById("createPlaylistButton");
	createPlaylistButton.onclick = createPlaylistPageRedirect;

	recoverRecentPosts();
}