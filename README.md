FrameRate! An app made for gamers. Login, select your favorite games, give them a rating and a comment, and see other peoples reviews! FrameRate! holds a database of over 3000 video games, allowing users to find the indie games up to the major companies.

**Front End**
In the front-end of our application we have multiple pages built in react. The users first load into a Main Page that hosts all of our video games in the database. The user can then select Login from here, or go straight into viewing games. To select a game, simply click on the cover art. The user will now be able to see a zoomed in image of the cover art, the game title, rating section, and past ratings from users.
When logged into your own account, you'll be presented the option to delete a comment you made. No one else can delete your comments.
**Back End**
The server follows close to A4, created by using express-vite. We are using MongoDB / Mongoose for the database (./server/database/mongodb.mjs). As well as using the IGDB API to pull games down from. 

**Glitch Link**: https://glitch.com/~a5-group-5-final-project

**Login Information**:

- To login, the user can register an account, and then login with those credentials.

**Technologies Used**:

- React: React was used to create all of the front-end aspects.
- MUI: MUI was used for styling and helping build the front-end. Each page has MUI items such as the MainPage with the image list, the Login screen, and each DisplayGame page.
- CSS/HTML: Hand written CSS / tailwind and MUI.
- TailwindCSS: Used for design purposes.
- express/vite: Setting up the server.
- MongoDB / Mongoose: Set up databases to hold all our information.
- IGDB API: API with thousands of video games that we used to pull in the information from.

**What challenges you faced in completing the project**.
Some challenges that our team faced while completeing the project included:

- Login issues: had to go back to make sure the delete button would only be present if you are logged in. Our login functionality was also broken at multiple points while working, but then we ended up finishing it up with no issues.
- React Components: Components such as the comment (and comment classes) were a challenge during production.
- Pulling in the information from the IGDB API, was tricky at first, since there are a ton of game within that database.
- Delay when you add a comment or delete a comment from when it hears from the DB. Still works, just slower. 

**Piper O'Connell**:

- React Components, Display (front-end), and Styling

**Sophia Woodward**:

- Database, Server, and help with front-end.

**Link to Video**: https://youtu.be/WC0mWiVPRr8
