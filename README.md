# Interactive Calendar and Event Organizer
Calendar App (Hosted on Vercel): [CalendarApp](https://final-project-calendar-app.vercel.app/auth/login)


Our app functions as a personal calendar. Users have the option to create their own account. Once an account is created users can log in. Users are then meet with their calendar. Below the calendar is a dorm for users to submit more tasks to the calendar. When the user adds to this form, the task is added to the calendar.

From the calendar, users can edit or delete an event. When the user clicks on an event on the calendar, the event info pops up. Here the users can change info about the event, or they can delete it from the calendar. Each calendar and todo list is unique to each log in, and when a user logs in and logs out their tasks will be saved for their next login.

Instructions: 
To sign up click the create account button on the home screen. Enter user account info. Now you can login using the credentials you just entered.
To enter a task, type the description, title, and choose a date it needs to be done.
To delete a task click the task on the calendar and click the delete button.
To edit a task, change the text on the task information, and click save changes.

Technologies used: 
Event.js defines the schema for an event using mongoose.
User.js defines the schema for a user using mongoose
auth.js handles user registration, login, and logout
events.js handles creating, editing, and deleting events
calendar.ejs creates the main calendar that users can then interact with
edit.ejs is the form to edit an event
login.ejs is the form to login
register.ejs is the form to register users 
server.js sets up the express server and connects it to mongodb

we used boostrap embedded in ejs files and AJAX so that users can use the application without the need to refresh everytime they click a button. we also used fullcalendar.js to have the calendar set up. we also used mongoose to interact with the backend. we also used node to run the server and express for user authentication. ejs files are files that allow you to use javascript inside of html, which we felt was easier for our implementation.

Challenges faced:
Our biggest problem was working together on the coding. It was hard to do individual stuff together then push to the main branch without problems. We ended up doing a lot o wokr on a single computer while we were all together. 

Responsibilities:
Ronit: implement editing/ deleting tasks and server
Andrew: implement adding tasks and login/ sign up
Sophia: implement calendar and UI
Hannah: implement calendar and UI

Link to project video: https://youtu.be/eZy-G8ghQMc

