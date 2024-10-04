// FRONT-END (CLIENT) JAVASCRIPT HERE

function iloveClicking(){
  alert("I LOVE CLICKING")
}
async function getLoggedInUser(){
  const response = await fetch('/api/users/userName', {
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
  const response = await fetch('/api/users/logout', {
    method: 'POST'
  })
  window.location.href="/"
}
window.onload = function() {
  getLoggedInUser().then()
}