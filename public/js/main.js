let currentGroup = null; // To store the active group

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

  if (groupId.replace(/\d+$/, '') === 'group') {
    groupIndex = (parseInt(groupId.match(/\d+/)[0], 10));
    groupIndex = groupIndex - 1;
    console.log("group index: " + groupIndex);
    currentGroup = groupData.groups[groupIndex].groupName
    const calendarEl = document.getElementById('calendar' + (groupIndex + 1));
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
      dateClick: function (info) {
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

async function fetchGroupInformation() {
  try
}

async function fetchUsers() {
  try {
    const response = await fetch('/get-users');
    const users = await response.json();
    console.log(`users are ${JSON.stringify(users)}`);
    window.allUsers = users;
    populateUserDropdown(users);
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}

function populateUserDropdown(users) {
  const optionsList = document.getElementById('options-list');
  const searchBar = document.getElementById('search-bar');

  // Clear any previous options
  optionsList.innerHTML = '';

  // Loop through the users and create checkbox elements for each
  users.forEach(user => {
    // Create label element
    const label = document.createElement('label');
    
    // Create checkbox element
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = user.username; // Assuming 'username' is a field in your user data
    
    // Append checkbox and username to the label
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(user.username));

    // Append the label to the options list
    optionsList.appendChild(label);
  });

  // Set up the search filter event listener
  searchBar.addEventListener('input', filterUsers);
  
  // Reapply event listeners to checkboxes after they are added to the DOM
  updateCheckboxListeners();
}

function filterUsers() {
  const filter = document.getElementById('search-bar').value.toLowerCase();
  const checkboxes = document.querySelectorAll('#options-list label');

  checkboxes.forEach(function (label) {
    const text = label.textContent.toLowerCase();
    label.style.display = text.includes(filter) ? 'block' : 'none';
  });
}

function updateCheckboxListeners() {
  const optionsList = document.getElementById('options-list');
  const checkboxes = optionsList.querySelectorAll('input[type="checkbox"]');
  const selectedOptionsContainer = document.getElementById('selected-options');

  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        addSelectedOption(checkbox.value);
      } else {
        removeSelectedOption(checkbox.value);
      }
    });
  });
}

function addSelectedOption(value) {
  const selectedOption = document.createElement('div');
  selectedOption.className = 'option';
  selectedOption.textContent = value;
  selectedOption.dataset.value = value;

  const selectedOptionsContainer = document.getElementById('selected-options');
  selectedOptionsContainer.appendChild(selectedOption);
}

function removeSelectedOption(value) {
  const selectedOptionsContainer = document.getElementById('selected-options');
  const selectedOption = selectedOptionsContainer.querySelector(`[data-value="${value}"]`);
  if (selectedOption) {
    selectedOption.remove();
  }
}

const showGroup = async function (event) {
  await fetchUsers();
  showContent("addGroup");

  // Show/Hide the options list when clicking on the search bar
  const searchBar = document.getElementById('search-bar');
  const optionsList = document.getElementById('options-list');
  searchBar.addEventListener('focus', () => {
    optionsList.style.display = 'block';
  });

  // Hide the options list when clicking outside of it
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
      optionsList.style.display = 'none';
    }
  });
};

// add group
const addGroup = async function (event) {
  const groupName = document.getElementById("groupNameInput").value; // generate specific group id in server
  const selectedUsersDiv = document.getElementById("selected-options"); // list of user with each an id, email, name, password, group id access to
  const selectedUsers = Array.from(selectedUsersDiv.children).map(div => div.textContent);
  
  if (!selectedUsers.length || !groupName) {
    alert('Please fill in all the required fields');
    return;
  }

  const data = {
    groupName: groupName,
    users: selectedUsers
  };

  try {
    const response = await fetch('/add-group', { //endpoint to add group to server
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
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

      // Clear the form fields
      document.getElementById("groupForm").reset();

      // Optionally switch to the new group view
      showContent(groupName);
    }

  } catch (error) {
    console.error('Error adding group:', error);
    alert('There was an error adding the group. Please try again.');
  }
}

window.onload = async function () {
  fetchUsers();
  console.log("Main.js Onload");
  generateGroupHTML(groupData);
  createGroupButtons(groupData);
  showContent("group1");

  // Finish Task
document.querySelectorAll('.finish-task-btn').forEach(button => {
  button.addEventListener('click', async () => {
    const taskId = button.getAttribute('data-taskid');
    try {
      const response = await fetch(`/tasks/finish/${taskId}`, { method: 'PUT' });
      const result = await response.json();
      if (response.ok) {
        alert(result.message);
        // Optionally refresh the page or update the UI
      } else {
        alert('Error finishing task: ' + result.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });
});

// Delete Task
document.querySelectorAll('.delete-task-btn').forEach(button => {
  button.addEventListener('click', async () => {
    const taskId = button.getAttribute('data-taskid');
    try {
      const response = await fetch(`/tasks/delete/${taskId}`, { method: 'DELETE' });
      const result = await response.json();
      if (response.ok) {
        alert(result.message);
        // Optionally refresh the page or update the UI
      } else {
        alert('Error deleting task: ' + result.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });
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
                      <li>
                        ${assignment.title} (Assigned to: ${assignment.assignedTo}, Due: ${assignment.dueDate})
                        <button class="finish-task-btn" data-taskid="${assignment.taskId}">Finish</button>
                        <button class="delete-task-btn" data-taskid="${assignment.taskId}">Delete</button>
                      </li>
                    `).join("")}
                  </ul>
                </div>
                <div>
            <form id = "addTask">
                <Label> Add new task</Label>
                <input type = "text" id = "addTaskInput" placeholder="New Task" required>
                <input type = "text" id = "assignUserInput" placeholder="Assign User" required>
                <input type = "text" id = "dateInput" placeholder="Date" required>
                <button type = "button" onclick = "addNewTask()">Add new task</button>
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

async function addNewTask() {
  // Get the values from the input fields
  const task = document.getElementById('addTaskInput').value;
  const assignedUser = document.getElementById('assignUserInput').value;
  const dueDate = document.getElementById('dateInput').value;

  

  if (!currentGroup) {
    alert("No group selected. Please select a group before adding a task.");
    return;
  }

  // Validate inputs (ensure none are empty)
  if (!task || !assignedUser || !dueDate) {
    alert("Please fill in all the fields.");
    return;
  }

  // Create a new task object
  const newTask = {
    title: task,
    user: assignedUser,
    date: dueDate,
    groupName: currentGroup
  };

  console.log("Making a new task name = " + task + " assigned user = " + assignedUser + " due date = " + dueDate)

  // TODO update the database with the task list 

    try{
        const response = await fetch('/addTask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ newTask}) // Send the username and password in JSON format
        });

        if (response.ok) {
          alert('Task added successfully');
        } else {
          alert('Failed to add task');
        }
      } 
    catch (error) {
      console.error('Error adding task:', error);
      alert('An error occurred. Please try again.');
    }
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

