let currentGroup = null; // To store the active group

function showContent(groupId) {
  const contents = document.querySelectorAll('.content');
  contents.forEach(content => content.style.display = 'none');
  
  const selectedContent = document.getElementById(groupId);
  selectedContent.style.display = 'block';

  if (groupId.replace(/\d+$/, '') === 'group') {
    let groupIndex = parseInt(groupId.match(/\d+/)[0], 10) - 1;
    currentGroup = window.allGroups[groupIndex].groupName;
    
    const calendarEl = document.getElementById('calendar' + (groupIndex + 1));
    if (calendarEl) {
      calendarEl.innerHTML = '';
    }
    
    const groupAssignments = window.allGroups[groupIndex].assignments && window.allGroups[groupIndex].assignments.length > 0
    ? window.allGroups[groupIndex].assignments.map(assignment => ({
        title: `${assignment.title} (Assigned to: ${assignment.assignedTo})`,
        start: assignment.dueDate
      }))
    : [];
    
    const calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      events: groupAssignments,
      dateClick: (info) => showTasksForDate(info.dateStr, window.allGroups[groupIndex].assignments)
    });
    
    calendar.render();
  } 
}


function showTasksForDate(selectedDate, assignments) {
  const tasksForDate = assignments.filter(assignment => assignment.dueDate === selectedDate);
  
  const tasksListEl = document.querySelector('.tasks-list');
  tasksListEl.innerHTML = tasksForDate.length > 0
    ? tasksForDate.map(assignment => `
          <li>${assignment.title} (Assigned to: ${assignment.assignedTo}, Due: ${assignment.dueDate})</li>
        `).join("")
    : '<li>No tasks due on this date</li>';
}

const checkAuth = async function () {
    try {
        const response = await fetch('/protected', {
            method: 'GET',
            credentials: 'include'
        });

        if (!response.ok) {
            throw new Error('Not authenticated');
        }
        console.log('Current User is authenticated')
        
    }catch (error){
        console.error('User not authenticated:', error);
        // Redirect to login page if not authenticated
        window.location.href = 'login.html';
    }
}

async function fetchSessionUser(){
  try {
    const response = await fetch('/get-session', {
      method: 'GET',
        credentials: 'include'  // Include cookies in the request
    });

    if (response.ok) {
      const user = await response.json();
      console.log('Session user:', user);
      document.getElementById('currentUser').innerText = `Logged in as: ${user.username}`;
    } else {
      console.error('Failed to retrieve user');
    }
  } catch (error) {
    console.error('Error fetching session user:', error);
  }
}

async function fetchUsers() {
  console.log("Fetch Users")
  try {
    const response = await fetch('/get-users');
    const users = await response.json();
    console.log(`users are ${JSON.stringify(users)}`);
    window.allUsers = users;

    populateUserDropdownTask(window.allUsers, 'task-options-list', 'task-search-bar', 'task-selected-list');
    populateUserDropdownGroup(window.allUsers, 'group-options-list', 'group-search-bar', 'group-selected-list');

  } catch (error) {
    console.error('Error fetching users:', error);
  }
}

function populateUserDropdownTask(users, dropdownId, searchBarId, selectedOptionsId) {
  const optionsList = document.getElementById(dropdownId);
  const searchBar = document.getElementById(searchBarId);
  
  optionsList.innerHTML = ''; // Clear previous options
  
  users.forEach(user => {
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = user.username;
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(user.username));
    optionsList.appendChild(label);
  });
  
  searchBar.addEventListener('input', filterUsers(searchBarId, dropdownId));
  updateCheckboxListeners(dropdownId, selectedOptionsId); // Reapply listeners
}

function populateUserDropdownGroup(users, dropdownId, searchBarId, selectedOptionsId) {
  const optionsList = document.getElementById(dropdownId);
  const searchBar = document.getElementById(searchBarId);
  
  optionsList.innerHTML = ''; // Clear previous options
  
  users.forEach(user => {
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = user.username;
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(user.username));
    optionsList.appendChild(label);
  });
  
  searchBar.addEventListener('input', filterUsers(searchBarId, dropdownId));
  updateCheckboxListeners(dropdownId, selectedOptionsId); // Reapply listeners
}


function filterUsers(searchBarId, dropdownId) {
  const filter = document.getElementById(searchBarId).value.toLowerCase();
  const checkboxes = document.querySelectorAll(`#${dropdownId} label`);

  checkboxes.forEach(label => {
    const text = label.textContent.toLowerCase();
    label.style.display = text.includes(filter) ? 'block' : 'none';
  });
}


function updateCheckboxListeners(dropdownId, selectedOptionsId) {
  const optionsList = document.getElementById(dropdownId);
  const checkboxes = optionsList.querySelectorAll('input[type="checkbox"]');
  const selectedOptionsContainer = document.getElementById(selectedOptionsId);

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        console.log('Checkbox selected:', checkbox.value); // Log checkbox selection
        addSelectedOption(checkbox.value, selectedOptionsId);
      } else {
        console.log('Checkbox deselected:', checkbox.value); // Log deselection
        removeSelectedOption(checkbox.value, selectedOptionsId);
      }
    });
  });
}

function addSelectedOption(value, selectedOptionsId) {
  const selectedOption = document.createElement('div');
  selectedOption.className = 'option';
  selectedOption.textContent = value;
  selectedOption.dataset.value = value;
  document.getElementById(selectedOptionsId).appendChild(selectedOption);

  console.log('Added user:', value); // Log selected users
}

function removeSelectedOption(value, selectedOptionsId) {
  const selectedOption = document.querySelector(`#${selectedOptionsId} [data-value="${value}"]`);
  if (selectedOption) {
    selectedOption.remove();
  }
}


const showGroup = async function (event) {
  await fetchUsers();
  
  showContent("addGroup");

  // Show/Hide the options list when clicking on the search bar
  const groupSearchBar = document.getElementById('group-search-bar');
  const taskSearchBar = document.getElementById('task-search-bar');
  const groupOptionsList = document.getElementById('group-options-list');
  const taskOptionsList = document.getElementById('task-options-list');
  
  groupSearchBar.addEventListener('focus', () => {
    groupOptionsList.style.display = 'block';
  });
  taskSearchBar.addEventListener('focus', () => {
    taskOptionsList.style.display = 'block';
  });


  // Hide the options list when clicking outside of it
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
      taskOptionsList.style.display = 'none';
      groupOptionsList.style.display = 'none';
    }
  });
};

async function addGroup(event) {
  const groupName = document.getElementById("groupNameInput").value;
  const selectedUsersDiv = document.getElementById("selected-options");
  const selectedUsers = Array.from(selectedUsersDiv.children).map(div => {
    return { username: div.textContent };  // Store user as an object with "username"
  });

  if (!selectedUsers.length || !groupName) {
    alert('Please fill in all the required fields');
    return;
  }

  const data = { groupName, users: selectedUsers };

  try {
    const response = await fetch('/add-group', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      location.reload();
    }
  } catch (error) {
    console.error('Error adding group:', error);
    alert('There was an error adding the group. Please try again.');
  }
}


window.onload = async function () {
  checkAuth();
  fetchSessionUser();


  console.log("Main.js Onload");

  fetchUsers(); //If authenticated, fetch users
  fetchGroups(); //If authenticated, fetch groups

  showContent("profile");

  // Add logout functionality
  document.getElementById('logoutBtn').addEventListener('click', async function() {
    try {
        const response = await fetch('/logout', {
            method: 'POST'
        });
        const data = await response.json();
        console.log('Logout response:', data);
        if (response.ok) {
            console.log("Successfully logged out user!");
            window.location.href = '/login.html';
        } else {
            alert('Error during logout: ' + data.message);
        }
    } catch (error) {
        console.error('Error logging out:', error);
        alert('An error occurred during logout. Please try again.');
    }
  });
}


const changePassword = async function(event) {
  // Get password input value
  const username = document.getElementById("currentUsername").value;
  const password = document.getElementById("currentPassword").value;
  const newPassword = document.getElementById("newPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  console.log(fetchSessionUser());

  // Check if currentPassword is correct
  try {
    const response = await fetch('/check-password', {
      method: 'POST',
      body: JSON.stringify({ username: username, password: password }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // Check if the user is authenticated
    if (response.ok) {
      console.log('Password is correct');

      // Check if newPassword and confirmPassword match
      if (newPassword === confirmPassword) {
        // Update the password
        try{
          const updateResponse = await fetch('/update-password', {
          method: 'POST',
          body: JSON.stringify({ username: username, password: newPassword }),
          headers: {
            'Content-Type': 'application/json'
          }});
          
          if (updateResponse.ok) {
            alert('Password updated successfully');
          } else {
            alert('Error updating password. Please try again.');
          }
        } catch (error) {
          console.error('Error updating password:', error);
          alert('There was an error updating the password. Please try again.');
        };
        

      
      // If the user entered the wrong username or password
    }else{
      alert('bruh you entered the wrong password');
  
      }  
    }
  } catch (error) {
    console.error('Error checking password:', error);
    alert('There was an error checking the password. Please try again.');
  } 
}

async function addNewTask() {
  const task = document.getElementById('addTaskInput').value;
  const assignedUser = document.getElementById('assignUserInput').value;
  const dueDate = document.getElementById('dateInput').value;

  if (!currentGroup) {
    alert("No group selected. Please select a group before adding a task.");
    return;
  }
  if (!task || !assignedUser || !dueDate) {
    alert("Please fill in all the fields.");
    return;
  }

  const newTask = { title: task, user: assignedUser, date: dueDate, groupName: currentGroup };

  try {
    const response = await fetch('/addTask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ newTask })
    });

    if (response.ok) {
      alert('Task added successfully');
    } else {
      alert('Failed to add task');
    }
  } catch (error) {
    console.error('Error adding task:', error);
    alert('An error occurred. Please try again.');
  }
}


async function fetchGroups() {
  console.log("Fetch groups")
  try {
    const response = await fetch('/get-group-info');
    if (response.ok) {
      console.log('groups fethced successfully');
    } else {
      console.log('FUCKKKKKKKKK');
    }
    const groups = await response.json();
    window.allGroups = groups;
    generateGroupHTML(groups);
    createGroupButtons(groups);

    console.log(`groups are ${JSON.stringify(groups)}`);
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}

async function deleteTask(group, assIndex){
  console.log("deleting task with group  " +group +" index " + assIndex)
  try {
    const response = await fetch('/deleteTask', {
      method: 'POST',
      body: JSON.stringify({groupName: group, assignmentIndex: assIndex}),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      //TODO make it regenerate the page probably
      location.reload();
      showContent(group)
      
    }
  } catch (error) {
    console.error('Error deleting task:', error);
    alert('There was an error deleting the task. Please try again.');
  }
}


async function completeTask(group, assIndex){
  console.log("completing task with group  " +group +" index " + assIndex)
  try {
    const response = await fetch('/completeTask', {
      method: 'POST',
      body: JSON.stringify({groupName: group, assignmentIndex: assIndex}),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      //TODO change the generate html so that we see completed and incomplete tasks
      console.log("response is ok")
      // location.reload();
      // showContent(group)
    }
  } catch (error) {
    console.error('Error completing task:', error);
    alert('There was an error completing the task. Please try again.');
  }
}

// Function to generate and inject HTML into the DOM
function generateGroupHTML(data) {
  console.log('This is the data' + data);
  data.forEach((group, index) => {
    console.log(`Generating HTML for group: ${group.groupName}`);

    // Group Members Names
    const userNames = group.users.map(user => user.username).join(", ");

    // Separate assignments into completed and incomplete
    const completedAssignments = group.assignments?.filter(assignment => assignment.status === "complete") || [];
    const incompleteAssignments = group.assignments?.filter(assignment => assignment.status !== "complete") || [];

    // Generate HTML for incomplete assignments
    const incompleteAssignmentsHTML = incompleteAssignments.length > 0
      ? incompleteAssignments.map((assignment, assIndex) => {
        const originalIndex = group.assignments.findIndex(a => a.title === assignment.title && a.assignedTo === assignment.assignedTo);
        return `
        <li>
          ${assignment.title} (Assigned to: ${assignment.assignedTo}, Due: ${assignment.dueDate})
          <button class="complete-task-btn" onclick="completeTask('${group.groupName}', ${originalIndex})">Complete</button>
          <button class="delete-task-btn" onclick="deleteTask('${group.groupName}', ${originalIndex})">Delete</button>
        </li>
      `}).join("")
      : "<li>No incomplete assignments available</li>";

    // Generate HTML for completed assignments
    const completedAssignmentsHTML = completedAssignments.length > 0
      ? completedAssignments.map(assignment => `
        <li>
          ${assignment.title} (Assigned to: ${assignment.assignedTo}, Due: ${assignment.dueDate})
        </li>
      `).join("")
      : "<li>No completed assignments available</li>";


    // Construct the dynamic HTML content
    const groupHTML = `
      <div id="group${index + 1}" class="content" style="display: none;">
        <div class="group-header">
            <h1>Welcome to ${group.groupName}</h1>
            <p>Member Names: ${userNames}</p>
        </div>
        <div class="calendar-tasks-container">
          <div id="calendar${index + 1}" class="calendar-section"></div>
          <div class="tasks-container">
            <div class="tasks-section">
              <h3>Tasks for the day</h3>
              <ul class="tasks-list">
                <li>Select a day to see tasks</li>
              </ul>
            </div>

            <div class="all-tasks-section">
              <h3>All Incomplete Tasks</h3>
              <ul class="all-tasks-list">
                ${incompleteAssignmentsHTML}
              </ul>
            </div>

            <div class="completed-tasks-section">
              <h3>Completed Tasks</h3>
              <ul class="completed-tasks-list">
                ${completedAssignmentsHTML}
              </ul>
            </div>

            <div>
              <form id="addTask">
                  <label>Add new task</label>
                  <input type="text" id="addTaskInput" placeholder="New Task" required>
                  <div class="dropdown-container">
                      <div class="selected-options" id="task-selected-list">
                          <!-- Selected options will appear here -->
                      </div>
                      <div class="dropdown">
                          <input class="search-bar" type="text" placeholder="Assign User" id="task-search-bar" required>
                          <div class="options-list" id="task-options-list">
                              <!-- has all users -->
                          </div>
                      </div>
                  </div>
                  <input type="text" id="dateInput" placeholder="Date" required>
                  <button type="button" onclick="addNewTask()">Add new task</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    `;

    document.querySelector(".main").insertAdjacentHTML("beforeend", groupHTML);
  });
}


// Function to create buttons for each group in the sidebar
function createGroupButtons(data) {
  const groupButtonsDiv = document.getElementById("groupButtons");
  data.forEach((group, index) => {
    console.log("Making a button for " + group.groupName)
    const button = document.createElement("button");
    button.id = `btnGroup${index + 1}`;
    button.innerText = group.groupName.split(' ').map(word => word[0]).join('');
    button.onclick = () => showContent(`group${index + 1}`); // Attach onclick event
    groupButtonsDiv.appendChild(button); // Add button to the sidebar
  });
}