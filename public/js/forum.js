import { nav } from "./main.js";
import { makeURLWithParams, getParam } from "./urlHelpers.js";

async function setup() {
	//Setting the title
	const query = getParam(window.location.href, "query");
	const seachResultsPageTitle = document.getElementById("searchPageTitle");
	// seachResultsPageTitle.textContent = "Search Results for " + query;
}

window.onload = function () {
	nav();
	setup();
}