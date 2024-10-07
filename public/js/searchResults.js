import { nav } from "./main.js";
import { makeURLWithParams, getParam } from "./urlHelpers.js";

function setup() {
	const query = getParam(window.location.href, "query");
	const seachResultsPageTitle = document.getElementById("searchPageTitle");
	seachResultsPageTitle.textContent = "Search Results for " + query;
}

window.onload = function () {
	nav();
	setup();
}