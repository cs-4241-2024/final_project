// // FRONT-END (CLIENT) JAVASCRIPT HERE

// document.addEventListener('DOMContentLoaded', () => {
//   const loginFile = document.getElementById('loginPage');
//   const usernameChosen = document.getElementById('username');
//   const passwordChosen = document.getElementById('password');

//   loginFile.addEventListener('submit', async function (event) {
//     event.preventDefault();

//     const username = usernameChosen.value();
//     const password = passwordChosen.value();

//     if (username === '' || password === '') {

//       alert("You left your username and/or password slot blank. Please try again!");
//       return;
//     }


//     try {

//       const response = await fetch('/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, password }),
//       });


//       const data = await response.json();
//       if (data.success && response.ok) {
//         alert("You have successfully logged in!")

//         //INSERT CODE HERE LATER TO REDIRECT TO PROFILE HOME PAGE
//       }
//       else {
//         alert("Login unsuccessful. Please try again.")
//       }
//     }
//     catch {
//       alert("ERROR! ERROR! Login unsuccessful! Please try again at a later time.")
//     }


//   })


// })