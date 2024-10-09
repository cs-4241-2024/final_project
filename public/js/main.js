// FRONT-END (CLIENT) JAVASCRIPT HERE
import { makeURLWithParams, getParam, makeURL } from "./urlHelpers.js";



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
const createPostPageRedirect = function () {
	const redirectStirng = makeURL("addPost");
	location.assign(redirectStirng);
}

window.onload = function () {
	nav()
	const searchButton = document.getElementById("searchButton");
	searchButton.onclick = search;
	const createPostButton = document.getElementById("createPostButton");
	createPostButton.onclick = createPostPageRedirect;


	const postContainer = document.getElementById("postContainer");

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
			//console.log(post._id);
			postLink.href = makeURLWithParams("forum", "id", post._id);
			//console.log(makeURLWithParams("forum", "id", post._id));

			const postContent = document.createElement("p");
			postContent.className = "postContent";
			postContent.textContent = post.content;

			postTitle.appendChild(postLink);
			postSection.appendChild(postTitle);
			postSection.appendChild(postContent);
			postContainer.appendChild(postSection);


		});
	}

	recoverRecentPosts();
}