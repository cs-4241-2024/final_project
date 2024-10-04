// FRONT-END (CLIENT) JAVASCRIPT HERE

function iloveClicking() {
	alert("I LOVE CLICKING")
}
async function getLoggedInUser(){
  const response = await fetch('/api/users/git/userName', {
    method: 'get'
  })
  console.log("fired")
  let pUser = document.getElementById("pUser")
  if(response.ok){
    pUser.innerText= "User: " + JSON.parse(await response.text())["userName"]
  }
  else{
    pUser.innerText= ""
  }
}

async function logout(){
  const response = await fetch('/api/users/git/logout', {
    method: 'POST'
  })
  window.location.href="/"
}
window.onload = function() {
  getLoggedInUser().then()
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