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