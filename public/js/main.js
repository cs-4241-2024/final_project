// FRONT-END (CLIENT) JAVASCRIPT HERE

function iloveClicking() {
	alert("I LOVE CLICKING")
}

//Adds the navigation bar to the location of the navbar classon each page.
//To add the nav bar to a page just add the following HTML element <nav class="navbar"></nav>
const nav = function () {
	const navbar = document.querySelector('.navbar')
	navbar.innerHTML = `
	<table class=navbar>
		<th class=navbarItem><a class=navbarLink href="index.html">Home</a></th>
		<th class=navbarItem><a class=navbarLink href="profile.html">Profile</a></th>
	</table>`
}

//Sends the user to the search-results page with parameters in the url
function search() {
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
}

//From urlHelpers.js
// ---------------------------------------------------------------------------------------------
//Returns a string of a url for the page you want to go to with the parameters it should have
function makeURLWithParams(htmlFileName, paramName, paramValue) {
	let urlString = window.location.href;
	urlString = urlString.slice(0, -(window.location.pathname.length));
	urlString += "/" + htmlFileName + ".html?" + paramName + "=" + paramValue;
	return urlString;
}

//When you are on the page with a url with parameters you would get that url by passing in window.location.href as urlWithParams
function getParam(urlWithParams, paramName) {
	let url = new URL(urlWithParams);
	let params = new URLSearchParams(url.search);
	return params.get(paramName);
}