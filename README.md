# Calendar

Website: 
https://team-19-final-project.glitch.me/ <br>
Video: 
https://youtu.be/Ix7XwDossaE

For our project, we created a web app that allows users to view a calendar, create and delete events on that calendar, and invite other users to their own events.
This app is designed to make it easy for people to manage their important tasks, such as meetings. The main focus is on the calendar, as it provides a user's event information
in a visually engaging way. We also wanted users to be able to include people they know in their own events, so we added functionality for users to share their events with other users and their calendars. <br>

Users can log in or create an account on the front page. This will check and store the user's information in a database. On the calendar page, the server will serve all the events
associated with that user's database entry. The calendar has multiple view modes that allow users to see entire months, weeks, specific days, or an overall agenda of upcoming events.
Users can create their own events on the event creation page by specifying a name for the event, the date, and the start and end times. Newly created events will then appear when returning to the calendar.
Events on the calendar can be deleted by clicking on an event. Then, a user can see which events they've been invited to by other users on the invitations page, and choose to accept or decline them. 
Users can invite others by specifying the name of another user present in the database and choosing an event to send to them.
Accepted invites will appear on the user's calendar as added events.

## Technologies Used

- React: We use react routers to manage routing throughout our application. We also used the a react component called BigCalendar to create a Calendar component on the screen.
- Vite: Vite was used to package the project into modules and to configure the server
- Express: Node.js Express was used to create a communicative server and streamline the process of handling data going to/from clients
- MongoDB: MongoDB was used as the database of choice, storing all user information in one collection and handling invites between users in another collection.

## Challenges

We initially ran into much trouble in trying to include Vite/React when starting on Glitch. We eventually had to scrap our original server and package files and start from scratch.
We also had some trouble deciding on how to make the calendar component, eventually deciding on one included with React. 
Getting the functionality for deleting specific events was also a struggle, as our first tries either didn't delete anything from a database entry or deleted every event field from one.


## Group Members - Contributions

- Sebastian Gurgol: Main work was with database queries and requests. Also did some CSS styling.
- Lorenzo: Mainly worked on react frontend forms and routing. Helped out with server requests and CSS styling.
- Giovanni: Worked on getting the server and react working together. I also implemented the calendar and did work on fetching and server requests.