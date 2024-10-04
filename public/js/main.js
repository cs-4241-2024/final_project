// FRONT-END (CLIENT) JAVASCRIPT HERE

const submit = async function( event ) {
  // stop form submission from trying to load
  // a new .html page for displaying results...
  // this was the original browser behavior and still
  // remains to this day
  event.preventDefault()
  
  const task = document.querySelector( '#task' )
  const date = document.querySelector('#date')
  console.log(date.value)
  const json = { 'task' : task.value , 'date' : date.value}
  console.log(json)
  const body = JSON.stringify( json )
  
  const response = await fetch( '/submit', {
    method:'POST',
    headers: { 'Content-Type': 'application/json' },
    body : body
  })

  const text = await response.text()

  console.log( 'text:', text )
  updateFriends()
}

// Function to send edit request to server
const edit = async function( event ) {
  // stop form submission from trying to load
  // a new .html page for displaying results...
  // this was the original browser behavior and still
  // remains to this day
  event.preventDefault()

  const id = event.target.id
  
  const newDate = prompt('Enter New Date')
  const newTask = prompt('Enter new task description')

  const json = {'id' : id, 'date' : newDate, 'task' : newTask}
  const body = JSON.stringify( json )
  
  const response = await fetch( '/edit', {
    method:'POST',
    headers: { 'Content-Type': 'application/json' },
    body : body
  })

  const text = await response.text()

  console.log( 'text:', text )
  updateFriends()
}

const login = async function( event ) {
  // stop form submission from trying to load
  // a new .html page for displaying results...
  // this was the original browser behavior and still
  // remains to this day
  event.preventDefault()
  
  const username = document.querySelector( '#username' )
  const password = document.querySelector('#password')
  const json = { 'username' : username.value , 'password' : password.value}
  const body = JSON.stringify( json )
  
  const response = await fetch( '/login', {
    method:'POST',
    headers: { 'Content-Type': 'application/json' },
    body : body
  })

  const text = await response.text()

  console.log( 'text:', text )
  if (response.status != 200){
    console.log('Invalid username or password')
  }
  else{
    window.location.href = 'tracker.html'
  }
  
}

const signup = async function( event ) {
  // stop form submission from trying to load
  // a new .html page for displaying results...
  // this was the original browser behavior and still
  // remains to this day
  event.preventDefault()
  
  const username = document.querySelector( '#signup-username' )
  const password = document.querySelector('#signup-password')
  const json = { 'username' : username.value , 'password' : password.value}
  const body = JSON.stringify( json )
  
  const response = await fetch( '/signup', {
    method:'POST',
    headers: { 'Content-Type': 'application/json' },
    body : body
  })

  const text = await response.text()

  console.log( 'text:', text )
  if (response.status != 200){
    console.log('Error signing up')
  }
  else{
    console.log('Successful signup')
    window.location.href = 'index.html'
  }
  
}

const delete_name = async function( event ) {
  // stop form submission from trying to load
  // a new .html page for displaying results...
  // this was the original browser behavior and still
  // remains to this day
  event.preventDefault()
  const id = event.target.id
  const body = JSON.stringify({ id: id });
  
  const response = await fetch( `/delete`, {
    method:'POST',
    headers: { 'Content-Type': 'application/json' },
    body: body
  })

  const text = await response.text()

  console.log( 'text:', text )
  updateFriends()
}

function updateFriends(){
  fetch('/data').then(response => response.json()).then(data => {
    const friendList = document.getElementById('friend-list');
    friendList.innerHTML = '';
    const headrow = document.createElement('tr');
    
    const headDate = document.createElement('td');
    headDate.className = "top-row";
    headDate.textContent = 'Date';
    headrow.appendChild(headDate);

    const headTask = document.createElement('td');
    headTask.className = "top-row";
    headTask.textContent = 'Task';
    headrow.appendChild(headTask);

    const headEdit = document.createElement('td');
    headEdit.className = "top-row";
    headEdit.textContent = 'Edit';
    headrow.appendChild(headEdit);

    const headDelete = document.createElement('td');
    headDelete.className = "top-row";
    headDelete.textContent = 'Delete';
    headrow.appendChild(headDelete);

    friendList.appendChild(headrow)
    data.forEach(s => {
      const trow = document.createElement('tr');

      const tdate = document.createElement('td');
      tdate.className = "h-row";
      tdate.textContent = s.date;
      trow.appendChild(tdate);
  
      const ttask = document.createElement('td');
      ttask.className = "h-row";
      ttask.textContent = s.task;
      trow.appendChild(ttask)

      const tedit = document.createElement('td');
      tedit.className = "h-row";
      const editButton = document.createElement('button');
      editButton.textContent = "Edit";
      editButton.id = s._id
      editButton.addEventListener('click', edit)
      tedit.append(editButton)
      trow.appendChild(tedit)

      const tdelete = document.createElement('td');
      tdelete.className = "h-row";
      const deleteButton = document.createElement('button');
      deleteButton.textContent = "Delete";
      deleteButton.id = s._id
      deleteButton.addEventListener('click', delete_name)
      tdelete.append(deleteButton)
      trow.appendChild(tdelete)
    
      friendList.appendChild(trow)
    })
  })
}

window.onload = function() {
  // Update list of window is on that page
  if (window.location.pathname.endsWith('tracker.html')){
    updateFriends()
  }
  
  const submitButton = document.querySelector('#add-button')
  const deleteButton = document.querySelector('#delete-button')
  const loginButton = document.querySelector('#signin')
  const logoutButton = document.querySelector('#logout-button')
  const signupButton = document.querySelector('#signup-button')
  const signup_submitButton = document.querySelector('#submit-signup')
  const editButton = document.querySelector('#edit-button')
  if (submitButton){
    submitButton.onclick = submit;
  }
  if (editButton){
    editButton.onclick = edit;
  }
  if (signup_submitButton){
    signup_submitButton.onclick = signup;
  }
  if (logoutButton){
    logoutButton.onclick = function () {
      window.location.href = 'index.html';
    }
  }
  if (signupButton){
    signupButton.onclick = function () {
      window.location.href = 'signup.html';
    }
  }
  if (deleteButton) {
    deleteButton.onclick = delete_name;
  }
  if (loginButton) {
    loginButton.onclick = login;
  }
}
