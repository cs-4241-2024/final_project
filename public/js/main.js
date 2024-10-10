let currentGroup = null; // To store the active group
let currentGroupID = null;

function showContent(groupId) {
  console.log("Now showing content for " + groupId + " LOOK HERE")
  const contents = document.querySelectorAll('.content');
  contents.forEach(content => content.style.display = 'none');
  
  const selectedContent = document.getElementById(groupId);
  selectedContent.style.display = 'block';

  if (groupId.replace(/\d+$/, '') === 'group') {
    let groupIndex = parseInt(groupId.match(/\d+/)[0], 10) - 1;
    currentGroup = window.allGroups[groupIndex];
    currentGroupID = groupId
     
    let usersInGroup = [];
    for (let i = 0; i < window.allGroups[groupIndex].users.length; i++) {
      usersInGroup.push(window.allGroups[groupIndex].users[i].username);
    }

    const taskSearchBar = document.getElementById(`task-search-bar${groupIndex + 1}`);
    const taskOptionsList = document.getElementById(`task-options-list${groupIndex + 1}`);

    const addUserSearchBar = document.getElementById(`add-user-search-bar${groupIndex + 1}`);
    const addUserOptionsList = document.getElementById(`add-user-options-list${groupIndex + 1}`);

    taskSearchBar.addEventListener('focus', () => {
      taskOptionsList.style.display = 'block';
    });

    addUserSearchBar.addEventListener('focus', () => {
      addUserOptionsList.style.display = 'block';
    });
    
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.dropdown')) {
        taskOptionsList.style.display = 'none';
        addUserOptionsList.style.display = 'none';
      }
    });

    populateUserDropdownTask(usersInGroup, `task-options-list${groupIndex + 1}`, `task-search-bar${groupIndex + 1}`, `task-selected-list${groupIndex + 1}`);
    addUserFilteredUsers = window.allUsers.filter(user => !usersInGroup.includes(user.username));
    populateUserDropdownAddUser(addUserFilteredUsers, `add-user-options-list${groupIndex + 1}`, `add-user-search-bar${groupIndex + 1}`, `add-user-selected${groupIndex + 1}`);

    const calendarEl = document.getElementById('calendar' + (groupIndex + 1));
    if (calendarEl) {
      calendarEl.innerHTML = '';
    }
    
    const groupAssignments = window.allGroups[groupIndex].assignments && window.allGroups[groupIndex].assignments.length > 0
    ? window.allGroups[groupIndex].assignments.map(assignment => ({
        title: `${assignment.title} (Assigned to: ${assignment.assignedTo})`,
        start: assignment.dueDate,
        color: assignment.status === 'complete' ? 'green' : 'blue'
      }))
    : [];
    
    const calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      events: groupAssignments,
      dateClick: (info) => showTasksForDate(info.dateStr, window.allGroups[groupIndex].assignments, groupIndex)
    });
    
    calendar.render();
  } 
}


function showTasksForDate(selectedDate, assignments, groupIndex) {
  const tasksForDate = assignments.filter(assignment => assignment.dueDate === selectedDate);
  const tasksListEl = document.getElementById(`tasks-list${groupIndex+1}`);
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
      document.getElementById('currentUsername').value = user.username; // Pre-fill username
      document.getElementById('currentUsername').disabled = true; // Disable editing
      window.currentUser=user;
    } else {
      
    }
  } catch (error) {

    console.error('Error fetching session user:', error);
  }
}

async function fetchUsers() {
  try {
    const response = await fetch('/get-users');
    const users = await response.json();
    window.allUsers = users;
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
    const radioButton = document.createElement('input');
    radioButton.type = 'radio';
    radioButton.name = 'task-assignee';
    radioButton.value = user;
    label.appendChild(radioButton);
    label.appendChild(document.createTextNode(user));
    optionsList.appendChild(label);
  });
  
  searchBar.addEventListener('input', () => filterUsers(searchBarId, dropdownId));
  updateRadioListeners(dropdownId, selectedOptionsId); // Reapply listeners
}

function updateRadioListeners(dropdownId, selectedOptionsId) {
  const optionsList = document.getElementById(dropdownId);
  const radios = optionsList.querySelectorAll('input[type="radio"]');
  const selectedOptionsContainer = document.getElementById(selectedOptionsId);

  radios.forEach(radio => {
    radio.addEventListener('change', () => {
      if (radio.checked) {
        const selectedValue = radio.value;
        updateSelectedOption(selectedValue, selectedOptionsId);
      }
    });
  });
}

function updateSelectedOption(value, selectedOptionsId) {
  const selectedOptionsContainer = document.getElementById(selectedOptionsId);
  selectedOptionsContainer.innerHTML = ''; // Clear existing selection

  const selectedOption = document.createElement('div');
  selectedOption.className = 'option';
  selectedOption.textContent = value;
  selectedOption.dataset.value = value;
  selectedOptionsContainer.appendChild(selectedOption);
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
    
    // Check if the user is the current user and preselect the checkbox
    if (user.username === currentUser.username) {
      checkbox.checked = true;
      addSelectedOption(user.username, selectedOptionsId); // Add to selected options
    }
    
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(user.username));
    optionsList.appendChild(label);
  });
  
  searchBar.addEventListener('input', () => filterUsers(searchBarId, dropdownId));
  updateCheckboxListeners(dropdownId, selectedOptionsId); // Reapply listeners
}


function populateUserDropdownAddUser(users, dropdownId, searchBarId, selectedOptionsId) {
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
  
  searchBar.addEventListener('input', () => filterUsers(searchBarId, dropdownId));
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
        addSelectedOption(checkbox.value, selectedOptionsId);
      } else {
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
  console.log(value);
  document.getElementById(selectedOptionsId).appendChild(selectedOption);
}

function removeSelectedOption(value, selectedOptionsId) {
  const selectedOption = document.querySelector(`#${selectedOptionsId} [data-value="${value}"]`);
  if (selectedOption) {
    selectedOption.remove();
  }
}

/*
  * Function to show the profile page
*/
const showGroup = async function (event) {
  await fetchUsers();

  populateUserDropdownGroup(window.allUsers, 'group-options-list', 'group-search-bar', 'group-selected-list');
  showContent("addGroup");

  // Show/Hide the options list when clicking on the search bar
  const groupSearchBar = document.getElementById('group-search-bar');
  const groupOptionsList = document.getElementById('group-options-list');
  
  groupSearchBar.addEventListener('focus', () => {
    groupOptionsList.style.display = 'block';
  });

  // Hide the options list when clicking outside of it
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
      groupOptionsList.style.display = 'none';
    }
  });
};

/*
  * Function to add a new group
*/
async function addGroup(event) {
  const groupName = document.getElementById("groupNameInput").value;
  const selectedUsersDiv = document.getElementById("group-selected-list");
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

async function deleteGroup(groupName) {
  if(!confirm(`Are you sure you want to delete the group: ${groupName}? This action cannot be undone.`)) {
    return;
  }

  try{
    const response = await fetch('/delete-group', {
      method: 'POST',
      body: JSON.stringify({ groupName }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      alert('Group deleted successfully');
      location.reload();  // Reload the page to reflect the changes
    } else {
      const data = await response.json();
      alert(`Error deleting group: ${data.message}`);
    }
  }catch (error){
    console.error('Error deleting group:', error);
    alert('There was an error deleting the group. Please try again.');
  }
}

window.onload = async function () {
  checkAuth();
  fetchSessionUser();

  fetchUsers(); //If authenticated, fetch users
  newFetchGroups(); //If authenticated, fetch groups

  showContent("profile"); // Default to the profile page


  // Add logout functionality
  document.getElementById('logoutBtn').addEventListener('click', async function() {
    try {
        const response = await fetch('/logout', {
            method: 'POST'
        });
        const data = await response.json();
        
        if (response.ok) {
            
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


/*
  * Function to change the password
  */
const changePassword = async function(event) {
  const currentPassword = document.getElementById("currentPassword").value;
  const newPassword = document.getElementById("newPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (newPassword !== confirmPassword) {
    alert('New password and confirm password do not match.');
    return;
  }

  try {
    // Check if the current password is correct
    const response = await fetch('/check-password', {
      method: 'POST',
      body: JSON.stringify({ currentPassword }),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include'
    });

    if (response.ok) {

      console.log('Sending new password:', newPassword);
      // Update the password
      const updateResponse = await fetch('/update-password', {
        method: 'POST',
        body: JSON.stringify({ newPassword }),
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include'
      });
      // Clear out the input fields
      document.getElementById("currentPassword").value = '';
      document.getElementById("newPassword").value = '';
      document.getElementById("confirmPassword").value = '';

      if (updateResponse.ok) {
        alert('Password updated successfully');

      } else {
        const updateData = await updateResponse.json();
        alert('Error updating password: ' + (updateData.message || 'Please try again.'));
      }
    } else {
      const data = await response.json();
      alert(data.message || 'Error checking current password.');
    }
  } catch (error) {
    console.error('Error updating password:', error);
    alert('An error occurred. Please try again.');
  }
}

async function addNewTask(groupIndex) {
  const task = document.getElementById(`addTaskInput${groupIndex}`).value;
  const assignedUser = document.querySelector('input[name="task-assignee"]:checked').value;
  const dueDate = document.getElementById(`dateInput${groupIndex}`).value;

  if (!currentGroup) {
    alert("No group selected. Please select a group before adding a task.");
    return;
  }
  console.log(assignedUser, task, dueDate)
  if (!task || !assignedUser || !dueDate) {
    alert("Please fill in all the fields.");
    return;
  }
  const newTask = { title: task, user: assignedUser, date: dueDate, groupName: currentGroup.groupName };
  try {
    const response = await fetch('/addTask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ newTask })
    });

    if (response.ok) {
      alert(`Task added successfully to group${groupIndex}`);
      await newFetchGroups(); // Re-fetch groups to get the updated task list
      showContent(`group${groupIndex}`); // Re-render the group content to reflect new tasks
      
    } else {
      alert('Failed to add task');
    }
  } catch (error) {
    console.error('Error adding task:', error);
    alert('An error occurred. Please try again.');
  }
}

async function addNewUsers(groupIndex) {
  const selectedUsersDiv = document.getElementById(`add-user-selected${groupIndex}`);
  const selectedUsers = Array.from(selectedUsersDiv.children).map(div => {
    return { username: div.textContent };  // Store user as an object with "username"
  });

  if (!currentGroup) {
    alert("No group selected. Please select a group before adding a task.");
    return;
  }
  console.log(selectedUsers)
  if (!selectedUsers.length) {
    alert("Please fill in the Add User field.");
    return;
  }
  let groupNewUsers = Array.from(selectedUsers)
  currentGroup.users.forEach(user => {
    groupNewUsers.push(user);
  });

  const newUsers = {groupName: currentGroup.groupName, users: groupNewUsers};

  try {
    console.log(JSON.stringify({ newUsers }))
    const response = await fetch('/addUsers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ newUsers })
    });

    if (response.ok) {
      alert(`Users added successfully to group${groupIndex}`);
      await newFetchGroups(); // Re-fetch groups to get the updated task list
      showContent(`group${groupIndex}`); // Re-render the group content to reflect new tasks
    } else {
      alert('Failed to add users');
    }
  } catch (error) {
    console.error('Error adding users:', error);
    alert('An error occurred. Please try again.');
  }
}

/*
  * Function to fetch the groups a user is in
*/
async function newFetchGroups() {
  try {
    const response = await fetch('/get-session', {
      method: 'GET',
      credentials: 'include'  // Include cookies in the request
    });

    if (response.ok) {
      const user = await response.json();
      const username = user.username
      console.log('Session user:', user);

      try {
        // Use query parameters to pass user data
        const groupResponse = await fetch(`/get-user-groups/${username}`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
        });

        if (groupResponse.ok) {
          const groups = await groupResponse.json();
          window.allGroups = groups;
          generateGroupHTML(groups);
          createGroupButtons(groups);
          console.log(`groups are ${JSON.stringify(groups)}`);
        } else {
          console.error('Failed to fetch groups:', groupResponse.statusText);
        }
      } catch (error) {
        console.error('Error fetching groups:', error);
      }
    } else {
      console.error('Failed to retrieve user');
    }
  } catch (error) {
    console.error('Error fetching session user:', error);
  }
}


async function deleteTask(groupId, assIndex){

  console.log("The group we are trying to delete a tasj frrom is "+ currentGroup)
  
  try {
    const response = await fetch('/deleteTask', {
      method: 'POST',
      body: JSON.stringify({groupName: currentGroup.groupName, assignmentIndex: assIndex}),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      console.log("task deleted")
      await newFetchGroups(); // Re-fetch groups to get the updated task list
      showContent(currentGroupID)
    }
  } catch (error) {
    console.error('Error deleting task:', error);
    alert('There was an error deleting the task. Please try again. fuuuuuck' );
  }
}


async function completeTask(groupId, assIndex){
  
  try {
    const response = await fetch('/completeTask', {
      method: 'POST',
      body: JSON.stringify({groupName: currentGroup.groupName, assignmentIndex: assIndex}),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      console.log("task completed")
      await newFetchGroups(); // Re-fetch groups to get the updated task list
      showContent(currentGroupID); // Re-render the group content to reflect new tasks
    }
  } catch (error) {
    
    alert('There was an error completing the task. Please try again.');
  }
}

/*
  * Function to generate and inject HTML into the DOM
*/
function generateGroupHTML(data) {
  data.forEach((group, index) => {
    
    // Clear the existing content first (if any)
    const groupEl = document.getElementById(`group${index + 1}`);
    if (groupEl) {
      groupEl.remove(); // Remove the existing group HTML
    }

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
          <button class="complete-task-btn" onclick="completeTask('group${index + 1}', ${originalIndex})">Complete</button>
          <button class="delete-task-btn" onclick="deleteTask('group${index + 1}', ${originalIndex})">Delete</button>
        </li>
      `}).join("")
      : "<li>No incomplete assignments available</li>";

    // Generate HTML for completed assignments
    const completedAssignmentsHTML = completedAssignments.length > 0
      ? completedAssignments.map(assignment => { 
        const originalIndex = group.assignments.findIndex(a => a.title === assignment.title && a.assignedTo === assignment.assignedTo);
        return `
        <li>
          ${assignment.title} (Assigned to: ${assignment.assignedTo}, Due: ${assignment.dueDate})
          <button class="delete-task-btn" onclick="deleteTask('group${index + 1}', ${originalIndex})">Delete</button>
        </li>
      `}).join("")
      : "<li>No completed assignments available</li>";


    // Construct the dynamic HTML content
    const groupHTML = `
      <div id="group${index + 1}" class="content" style="display: none;">
        <div class="group-header">
          <h1>Welcome to ${group.groupName}</h1>
          <p>Member Names: ${userNames}</p>
          <button class="leave-group-btn" onclick="leaveGroup('${group.groupName}')">Leave Group</button>
          <button class="delete-group-btn" onclick="deleteGroup('${group.groupName}')">Delete Group</button>

          <div class="dropdown-container">
            <div class="selected-options" id="add-user-selected${index + 1}">
                <!-- Selected options will appear here -->
            </div>
            <div class="dropdown">
                <input class="search-bar" type="text" placeholder="Add User" id="add-user-search-bar${index + 1}">
                <div class="options-list" id="add-user-options-list${index + 1}">
                    <!-- has all users -->
                </div>
            </div>
          </div>
          <button class="leave-group-btn" type="button" onclick="addNewUsers(${index + 1})">Add New User</button>
        </div>
        <div class="calendar-tasks-container">
          <div id="calendar${index + 1}" class="calendar-section"></div>
          <div class="tasks-container">
            <div class="tasks-section">
              <h3>Tasks for the day</h3>
              <ul id="tasks-list${index+1}" class="all-tasks-list">
                <li>Select a day to see tasks</li>
              </ul>
            </div>

            <div class="all-tasks-section">
              <h3>All Incomplete Tasks</h3>
              <ul class="all-tasks-list">
                ${incompleteAssignmentsHTML}
              </ul>
            </div>

            <div class="all-tasks-section">
              <h3>Completed Tasks</h3>
              <ul class="all-tasks-list">
                ${completedAssignmentsHTML}
              </ul>
            </div>

            <div class="all-tasks-section">
              <form id="addTask">
                  <label>Add new task</label>
                  <input type="text" id="addTaskInput${index + 1}" placeholder="New Task" required>
                  <div class="dropdown-container">
                      <div class="selected-options" id="task-selected-list${index + 1}">
                          <!-- Selected options will appear here -->
                      </div>
                      <div class="dropdown">
                          <input class="search-bar" type="text" placeholder="Assign User" id="task-search-bar${index + 1}">
                          <div class="options-list" id="task-options-list${index + 1}">
                              <!-- has all users -->
                          </div>
                      </div>
                  </div>
                  <input type="date" id="dateInput${index + 1}" placeholder="Date" required>
                  <button class="leave-group-btn" type="button" onclick="addNewTask(${index + 1})">Add New Task</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    `;

    document.querySelector(".main").insertAdjacentHTML("beforeend", groupHTML);
  });
}


/*
  * Function to create buttons for groups
*/
function createGroupButtons(data) {
  const groupButtonsDiv = document.getElementById("groupButtons");
      
  // Clear current buttons before adding new ones
  while (groupButtonsDiv.firstChild) {
    groupButtonsDiv.removeChild(groupButtonsDiv.firstChild);
  }
  const btnAddGroup = document.createElement('button');

  btnAddGroup.id = 'btnAddGroup';
  btnAddGroup.textContent = '+';
  btnAddGroup.onclick = function() {
      showGroup();
  };
  groupButtonsDiv.appendChild(btnAddGroup)

  data.forEach((group, index) => {
    const button = document.createElement("button");
    button.id = `btnGroup${index + 1}`;
    button.innerText = group.groupName.split(' ').map(word => word[0]).join('');
    button.onclick = () => showContent(`group${index + 1}`); // Attach onclick event
    groupButtonsDiv.appendChild(button); // Add button to the sidebar
  });
}


// Function to handle leaving the group
async function leaveGroup(groupName) {
  console.log(groupName)
  const confirmation = confirm("Are you sure you want to leave this group?");
  if (confirmation) {
    // Remove the user from the group (logic for leaving group goes here)
    // window.allGroups[groupIndex].users = window.allGroups[groupIndex].users.filter(user => user.username !== currentUser); // Assuming you have a currentUser variable
    try{
      const response = await fetch('/leave-group', {
        method: 'POST',
        body: JSON.stringify({groupName: groupName}),
        headers: { 'Content-Type': 'application/json' }
      });
      if (response.ok) {
        await newFetchGroups(); // Re-fetch groups to get the updated task list
        showContent("profile"); // Re-render the group content to reflect new tasks
      }

    }catch{
      console.error('Error leaving group:', error);
      alert('There was an error leaving the group. Please try again.');
    }
    // Re-render the groups (or update the UI as needed)
    alert("You have left the group.");
  }
}

// Function to handle deleting the group
/*function deleteGroup(groupName) {
  console.log(groupName)
  const confirmation = confirm("Are you sure you want to delete this group?");
  if (confirmation) {
    // Remove the group from the list of groups
    window.allGroups.splice(groupIndex, 1);

    // Re-render the groups (or update the UI as needed)
    generateGroupHTML(window.allGroups);
    alert("The group has been deleted.");
  }
}*/
