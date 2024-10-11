# Final Project

### Group/Task Management Dashboard

#### Description
The application is a task-management dashboard that was designed for organizing and tracking tasks between users efficiently. The dashboard also has the ability to create groups/organizations which houses different users who are registered to the application. The users are assigned to different groups and are able to interact with the task management system and calendar. It features a responsive UI with a sidebar for easy navigation between different groups, enabling users to interact with various groups in the application. The application features a calendar that allows users to view tasks based on dates, making it ideal for managing deadlines and upcoming tasks. The dashboard provides options to add and delete tasks that are assigned to users in each group, with smooth hover effects and transitions that enhance the user’s experience.

The login system supports authentication, allowing users to securely access the dashboard. Upon logging into the dashboard, the users are redirected to the task dashboard, where their session is maintained through the usage of cookies. The login form offers a simple yet secure interface for inputting user credentials, with support for both login and registration actions. If a user doesn’t have an account set up already in the database, they can make their own account via the registration button. Not only that, the application is secured through a protected route, which inhibits users from accessing the task dashboard before logging into the application or after their cookies expired. 

#### Additional Instructions?
- **Login Information**

  1. If you haven’t registered beforehand, input a username and password into the input fields and press register to add your account to the database.
  2. After receiving the alert that you successfully registered, you can now proceed to the main application by pressing the login button.

- **Change Login information**

  1. Make sure you are logged into the right account
  2. Navigate to the account page, located in the bottom left.
  3. Insert current password assigned to the account in the corresponding input field then do the same for your new password.
  4. Confirm your password by typing your new password again (must match) in the bottom field.
  5. Press submit to change your old password to your new password.

#### Technologies and how did we use them?
- **Express**
  - We used Express to connect both the client-side application, being the front-end of our application, to our database, MongoDB. We used server functions, mainly POST and GET, to handle server requests. It is also handling HTTP requests and responses, defining middlewares, and server static files.
- **Javascript**
  - We used Javascript as our main coding language for the project. Both of our files that handle the functionality of the dashboard and leveraging the server functions are coded in Javascript, being Login.js and Main.js (both are used for their corresponding html files). Each file handles its own page with their own set of functions for the client-side application.
- **MongoDB**
  - We used MongoDD to house our users' information and the groups that were created in the application. We are able to store the user credentials with the username and password via the registration button within the login page (User collection). Not only that, we are able to store each individual group made in the application with the assigned users and their individual tasks (Group collection).
- **FullCalendar**
  - We used FullCalendar to provide a visual, interactive scheduling experience for our users. It allows us to display events, tasks, and deadlines within a calendar view on the dashboard, making it easier for users to manage their schedules. The calendar is dynamically updated based on user input, such as adding, editing, or deleting events, which are then reflected in the MongoDB database. We customized FullCalendar to fit our styling requirements and integrated it with our application logic to sync user data and facilitate efficient event handling through our Express server.
- **Middlewares**
  - ***Cookie-Parser***: Parses cookies for session handling and authentication.
  - ***bodyParser***: Parses incoming request bodies in JSON format.
  - ***CORS***: Enables Cross-Origin Resource Sharing (CORS) to handle requests from different domains.
  - ***Morgan***: Logs HTTP requests for development and debugging.
  - ***Helmet***: To secure web applications by setting crucial HTTP headers. 
  - ***BCrypt***: Ensures secure password encryption by hashing user passwords and provides user security.

#### Challenges
1. Setting new password for an account
   
2. Fetching the session user
   
3. The correct way to store data in the backend
   
4. Refreshing content on the page
   
5. Showing and hiding content through JS

6. Creating filterable and searchable dropdowns

7. Populating dropdowns with correct information

8. Managing final week and other assignments in parallel

9. Merging git branches without breaking code 

#### Group Member Contributions
1. **Tri Vien Le** (Full Stack)
   - I was working as a full-stack developer, mainly producing the Login page and its functionalities. I implemented the login logic as well as the authentication of users using cookies and a protected path. I also implemented the usage of other middlewares to try and optimize our code to make it run smoother but also for debugging purposes. I have also helped debug some functions on both the server-side and client-side of the application. I implemented the delete group functionality on the client-side of the application. I also worked with connecting the MongoDB to the client-side of the application with collections of users/groups.
2. **Jai Jariwala** (Full Stack)
   - I started off working toward the client-side experience of our website. This included creating Figma mockups and design ideas to show the team. I continued to work on this as I integrated the calendar on the page which has many dynamic properties like checking the tasks on a particular day. This led me to work on other parts of the user interface and experience, such as adding, completing, and deleting tasks. I was able to make big leaps in the functionality of components like the dropdown checklist and the dynamic changing of tasks on the page. I developed into a full stack developer as the website started coming together where I developed CRUD operations for client side functionality. 
3. **Joseph Thesmar** (Full Stack)
   - I worked all the way from the database to the client side. Set up REST API with CRUD operations between front end and server to handle requests and responses such as adding groups and users to groups, and adding tasks to groups. I also worked on filter/search dropdowns, auto populate a dropdown based on possible options, and select (radio/checkbox html tags). Implemented scroll bars for dynamically expanding components to handle overflow and ensure smooth navigation as content extends beyond viewable areas. Streamlined CSS for new buttons and parts unadded.
4. **Cody Rueda** (Full Stack)
   - I worked as a full stack developer and worked on anything that needed to at the time. For the backend I worked on fetching groups by users and restructuring the database to the current schema. I also worked on completing and deleting tasks. I also worked on the front end a lot. I made most of the generate html function which generates the html we see on all of the group pages. I added functionality to the complete and delete task buttons. I also worked on the show content which allows the user to switch between the view of different groups, the login or the profile page.
5. **Edward Dang** (Full Stack)
   - I worked as a full-stack developer. I implemented the front, middle, and back end for user accounts, where the currently logged-in user can update their password. I also worked on the functionality to leave a group a user is in and update it automatically with the database and front end. I also worked on the logic for the database. I also helped with the secure login (hashing).

#### Links
1. Glitch: https://final-project-team-12.glitch.me/
2. Video: https://www.youtube.com/watch?v=YaGc1-HCIjw


