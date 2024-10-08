// FRONT-END (CLIENT) JAVASCRIPT HERE


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

window.onload = function () {
	nav()
}