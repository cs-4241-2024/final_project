function toggleDropdownVisibility() {
  const dropdown = document.getElementById('dropdown');
  const searchValue = document.getElementById('userSearch').value;
  dropdown.style.display = searchValue ? 'block' : 'none'; // Show if there is a value in the search bar
}

function showContent(groupId) {
    console.log("Show content works")
    // Hide all content sections
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.style.display = 'none'
    });
  // Show the selected content section
  const selectedContent = document.getElementById(groupId);
  selectedContent.style.display = 'block';
  if(groupId.replace(/\d+$/, '') === 'group'){
    groupIndex = (parseInt(groupId.match(/\d+/)[0], 10));
    groupIndex = groupIndex - 1;
    console.log("group index: " + groupIndex);
    const calendarEl = document.getElementById('calendar' + (groupIndex+1));
    if (calendarEl) {
        calendarEl.innerHTML = ''; 
    }
    const groupAssignments = groupData.groups[groupIndex].assignments.map(assignment => ({
        title: `${assignment.title} (Assigned to: ${assignment.assignedTo})`,
        start: assignment.dueDate
    }));
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: groupAssignments, 
        dateClick: function(info) {
          const selectedDate = info.dateStr;
          showTasksForDate(selectedDate, groupData.groups[groupIndex].assignments);
      }
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

async function fetchUsers() {
  try {
    const response = await fetch('/get-users');
    const users = await response.json();

    console.log(`users are ${JSON.stringify(users)}`);


    window.allUsers = users;

    populateDropdown(users);
  } catch (error){
    console.error('Error fetching users:', error);
  }
}

function populateDropdown(users){
  const dropdown = document.getElementById('dropdown');
  dropdown.innerHTML = ''; // clear previous content

  users.forEach(user => {
    const div = document.createElement('div');
    div.textContent = user.username;
    div.classList.add('dropdown-item');

    div.onclick = () => selectUser(user);
    dropdown.appendChild(div);
  })
}

function filterUsers() {
  const searchValue = document.getElementById('userSearch').value.toLowerCase();
  const filteredUsers = window.allUsers.filter(user => user.username.toLowerCase().includes(searchValue));
  populateDropdown(filteredUsers);
}

function selectUser(user) {
  const selectedUsersDiv = document.getElementById('selectedUsers');
    
  // Check if the user is already selected
  if (Array.from(selectedUsersDiv.children).some(div => div.textContent === user.username)) {
      return; // User already selected
  }

  // Add the selected user to the selected users section
  const selectedUserDiv = document.createElement('div');
  selectedUserDiv.textContent = user.username;
  selectedUserDiv.classList.add('selected-user');

  selectedUsersDiv.appendChild(selectedUserDiv);

  // Remove the selected user from the dropdown
  const dropdownItems = document.querySelectorAll('.dropdown-item');
  dropdownItems.forEach(item => {
      if (item.textContent === user.username) {
          item.remove();
      }
  });

  // Clear the search input and hide the dropdown
  document.getElementById('userSearch').value = '';
  document.getElementById('dropdown').style.display = 'none';
}

// add group
const addGroup = async function(event) {
    const groupName = document.getElementById("groupNameInput").value; // generate specific group id in server
    const selectedUsersDiv = document.getElementById("selectedUsers"); // list of user with each an id, email, name, password, group id access to
    const selectedUsers = Array.from(selectedUsersDiv.children).map(div => div.textContent);
    
    if (selectedUsers) {
      alert("let s fucking go!!");
    } else{
      alert("it s chil but it doesnt work");
    }

    if (!selectedUsers.length ||  !groupName){
        alert('Please fill in all the required fields');
        return;
    }

    const data = {
        groupName: groupName,
        users: selectedUsers 
    };

    try {
        const response = await fetch( '/add-group', { //endpoint to add group to server
            method: 'POST',
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'}
        });

        if (response.ok){
            const result = await response.json();
            const groupButtons = document.getElementById("groupButtons");
            const newGroupButton = document.createElement("button");
            newGroupButton.innerText = groupName;
            newGroupButton.onclick = function () {
                showContent(groupName);
            };
    
    
            groupButtons.appendChild(newGroupButton);
    
            // Create a new content section for the new group
            const mainContent = document.querySelector(".main");
            const newGroupContent = document.createElement("div");
            newGroupContent.className = "content";
            newGroupContent.id = groupName; // Unique ID for the new group content
    
            // Add group header and users
            newGroupContent.innerHTML = `
                <div class="group-header">
                    <h1>${groupName}</h1>
                    <p>Member Names: ${users}</p>
                </div>
            `;
            mainContent.appendChild(newGroupContent);
    
            // Clear the form fields
            document.getElementById("groupForm").reset();
            
            // Optionally switch to the new group view
            showContent(groupName);
        }
         
    } catch (error){
        console.error('Error adding group:', error); 
        alert('There was an error adding the group. Please try again.');
    }    
}

window.onload = async function (){
    fetchUsers();
    console.log("Main.js Onload");
    generateGroupHTML(groupData);
    createGroupButtons(groupData);
    showContent("group1");

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

// Function to generate and inject HTML into the DOM
function generateGroupHTML(data) {
  data.groups.forEach((group, index) => {
      console.log(`Generating HTML for group: ${group.groupName}`);

      // Group Members Names
      const memberNames = group.members.map(member => member.name).join(", ");
      
      // Construct the dynamic HTML content
      const groupHTML = `
          <div id="group${index + 1}" class="content" style="display: none;">
            <div class="group-header">
                <h1>Welcome to ${group.groupName}</h1>
                <p>Member Names: ${memberNames}</p>
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
                  <h3>All Tasks</h3>
                  <ul class="all-tasks-list">
                    ${group.assignments.map(assignment => `
                      <li>${assignment.title} (Assigned to: ${assignment.assignedTo}, Due: ${assignment.dueDate})</li>
                        `).join("")}
                  </ul>
                </div>
                <div>
            <form id = "addTask">
                <Label> Add new task</Label>
                <input type = "text" id = "addTaskInput" placeholder="New Task" required>
                <input type = "text" id = "assignUserInput" placeholder="Assign User" required>
                <input type = "text" id = "dateInput" placeholder="Date" required>
                <button type = "button" onclick = "addTask()">Add new task</button>
            </form>
           </div>
              </div>
            </div>
          </div>
      `;

      // Inject the generated HTML into the DOM
      document.querySelector(".main").insertAdjacentHTML("beforeend", groupHTML);
  });
}

const changePassword = async function(event) {
  // Get password input value
  const username = document.getElementById("currentUsername").value;
  const password = document.getElementById("currentPassword").value;
  const newPassword = document.getElementById("newPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

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

// Function to create buttons for each group in the sidebar
function createGroupButtons(data) {
    const groupButtonsDiv = document.getElementById("groupButtons");
    data.groups.forEach((group, index) => {
        console.log("Making a button for " + group)
        const button = document.createElement("button");
        button.id = `btnGroup${index + 1}`;
        button.innerText = group.groupName.split(' ').map(word => word[0]).join(''); 
        button.onclick = () => showContent(`group${index + 1}`); // Attach onclick event
        groupButtonsDiv.appendChild(button); // Add button to the sidebar
    });
}

function addNewTask(){
    // Get the values from the input fields
    const task = document.getElementById('addTaskInput').value;
    const assignedUser = document.getElementById('assignUserInput').value;
    const dueDate = document.getElementById('dateInput').value;

    // Validate inputs (ensure none are empty)
    if (!task || !assignedUser || !dueDate) {
        alert("Please fill in all the fields.");
        return;
    }

    // Create a new task object
    const newTask = {
        title: task,
        user: assignedUser,
        date: dueDate
    };

    // TODO update the database with the task list 
    // taskList.push(newTask);

}



const groupData = {
    "groups": [
      {
        "groupName": "Project Team Alpha",
        "members": [
          { "name": "Alice Johnson", "role": "Team Lead", "email": "alice.johnson@example.com" },
          { "name": "Bob Smith", "role": "Developer", "email": "bob.smith@example.com" },
          { "name": "Charlie Lee", "role": "Designer", "email": "charlie.lee@example.com" }
        ],
        "assignments": [
          { "title": "Create Project Plan", "assignedTo": "Alice Johnson", "dueDate": "2024-10-10" },
          { "title": "Develop API", "assignedTo": "Bob Smith", "dueDate": "2024-10-15" },
          { "title": "Design UI Mockups", "assignedTo": "Charlie Lee", "dueDate": "2024-10-12" },
          { "title": "Testing and QA", "assignedTo": "Alice Johnson", "dueDate": "2024-10-20" }
        ]
      },
      {
        "groupName": "Marketing Team Beta",
        "members": [
          { "name": "Diana Clark", "role": "Marketing Manager", "email": "diana.clark@example.com" },
          { "name": "Edward Harris", "role": "Content Creator", "email": "edward.harris@example.com" },
          { "name": "Fiona Adams", "role": "SEO Specialist", "email": "fiona.adams@example.com" }
        ],
        "assignments": [
          { "title": "Create Social Media Strategy", "assignedTo": "Diana Clark", "dueDate": "2024-10-05" },
          { "title": "Write Blog Posts", "assignedTo": "Edward Harris", "dueDate": "2024-10-08" },
          { "title": "Optimize Website SEO", "assignedTo": "Fiona Adams", "dueDate": "2024-10-15" },
          { "title": "Email Marketing Campaign", "assignedTo": "Diana Clark", "dueDate": "2024-10-18" }
        ]
      },
      {
        "groupName": "Research Team Gamma",
        "members": [
          { "name": "George King", "role": "Research Lead", "email": "george.king@example.com" },
          { "name": "Helen Brooks", "role": "Data Analyst", "email": "helen.brooks@example.com" },
          { "name": "Ian Thompson", "role": "Field Researcher", "email": "ian.thompson@example.com" }
        ],
        "assignments": [
          { "title": "Conduct Survey", "assignedTo": "Ian Thompson", "dueDate": "2024-10-03" },
          { "title": "Analyze Data", "assignedTo": "Helen Brooks", "dueDate": "2024-10-07" },
          { "title": "Write Research Report", "assignedTo": "George King", "dueDate": "2024-10-10" },
          { "title": "Prepare Presentation", "assignedTo": "George King", "dueDate": "2024-10-14" }
        ]
      }
    ]
}
  