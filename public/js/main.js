// FRONT-END (CLIENT) JAVASCRIPT HERE

function iloveClicking() {
	alert("I LOVE CLICKING")
}

//Adds the navigation bar to the location of the navbar classon each page.
//To add the nav bar to a page just add the following HTML element <nav class="navbar"></nav>
const nav = function () {
    const navbar = document.querySelector('.navbar')
    navbar.innerHTML = `
	<table>
		<th><a class=navbarLink href="index.html">Home</a></th>
		<th><a class=navbarLink href="profile.html">Profile</a></th>
		<th><a class=navbarLink href="forum.html">Forum</a></th>
		<th><a class=navbarLink href="playlists.html">Playlists</a></th>
		<th><a class=navbarLink href="songs.html">Songs</a></th>
		<th><a class=navbarLink href="users.html">Users</a></th>
	</table>`
}

window.onload = function () {
    nav()
}