// FRONT-END (CLIENT) JAVASCRIPT HERE
import { makeURLWithParams, getParam } from "./urlHelpers.js";


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

window.onload = function () {
	nav()
	const searchButton = document.getElementById("searchButton");
	searchButton.onclick = search;
}