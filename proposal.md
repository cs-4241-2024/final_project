Team members: Ronit Kapoor, Sophia Kalavantis, Hanna Trinh, Andrew Cash

Our team plans to create a web application called [name]. The basic features of this application will be user accounts/logins, submission form for calendar events, a virtual calendar populated with given user events, an ordered list of calendar events, and the ability to edit/delete existing events. We will connect to a database to store each user's events that we will use to populate the calendar depending on the account currently logged in. 
	The UI of the application will consist of three pages: 
Login/landing page 
Create an account page
Calendar, list, and event submission
The login page will show the title of the application alongside a simple username and password login feature. Underneath will show a button to enter the page and a button to create an account. This button will lead to the creation of an account page. This page will show various input lines that will require the user to fill in personal information about themselves. A “submit” button will end this form, storing this information in the database and sending the user back to the login page. Once the user inputs their user and password, they will click the “enter” button which leads to their own calendar page. This page will show a calendar, a scrolling list of ordered events, display the user's name, and an input line for a date and description. Next to the input line there will be a submit button which clears the line and adds the event to the visual calendar. The event will also be added to the ordered events list. The events on the calendar will be modifiable, having the ability to click on each and either edit or delete it entirely. When pressing on the user’s name on the top right corner of the screen, an option will show to log out of the account or delete the account. When clicking the delete user button, it will alert and ask the user if they are sure before deleting. 
The backend will be using MongoDB. The information we will be storing is the user login info such as the username and password, and the events which will consist of the date, the event title, and the event description. 

Key Technologies/Libraries:
NodeJS
Bootstrap
MongoDB


