#Webware Group 8: Songtopia
1. &nbsp;&nbsp;&nbsp;&nbsp;We created an application that allows users to keep track of their favorite playlists and songs in an online database as well as allow them to interact and discuss their songs and playlists together through forum posts. In order to use our website the user is required to sign in through a GitHub account, after which they are able to access all of the site’s features.
t <br />&nbsp;&nbsp;&nbsp;&nbsp;Users are able to add songs to the database by providing information such as the song name, artist, album, length, and genre. Each song can then be inserted into playlists, which can be created by any user. Each playlist can be updated by the owner, allowing them to be able to add new songs to a playlist or deleting old songs. Users are also able to create forum posts about either a song or a playlist which then can have replies left on it by themselves or other users allowing for community discussion. User’s are also able to favorite songs so that they can easily get back to them later. Forum posts, playlists, and favorite songs can all be found on a user’s profile page which can each be clicked on to navigate to. The homepage of our website has a search bar for searching through all songs, playlists, and forum posts, as well as buttons for creating new songs, playlists, and forum posts. The homepage also displays the most recent forum posts for the user so that they can easily navigate to them to join the discussion.
<br />Link to project: https://webware-group-8.glitch.me
2. In order to log in you must have a GitHub account to log in through which you will be prompted to sign in using.
3. We used MongoDB for our backend database since all of the members of our group were familiar with how to use it and Node.js to connect our website to the database information. We also used express routes and controllers for this project, to allow us to make easy database calls.
4. Some challenges that we faced as a group were confusion with divided tasks due to our own individual skill levels as it relates to creating full stack website applications. Once we figured out what everyone’s strengths were in website development we were able to divide work up accordingly by assigning work to the person best equipped to handle each task. We also had constant communication with each other through Discord which allowed us to easily help each other debug as well as with anything that we got stuck on. We as well did not fully consider the skill levels of all group members, and decided on a project that was partially out of our scope for what we could accomplish within the two week span of the project.
5. Members
- Stryder:
  - Created backend routes for
    - Playlists (getting, deleting, creating, modifying, and searching)
    - Users (getting, deleting, creating, modifying, and searching)
    - Songs (searching)
    - Posts (getting, deleting, creating, modifying, and searching) [except for retrieveRecentPosts]
  - Implemented Github login with Oauth
    - Also protected certain routes so they cannot be used when not logged in
  - Created and implemented the front end pages
    - addPost.html
    - addPlaylist.html
    - Playlist.html
  - Helped others debug
- Winston:
  - Created front end for:
    - profile.html
    - Index.html (homepage)
  - Added functionality for:
    - Displaying posts from all users on index.html (homepage)
      - For this, I adjusted the main.js file, the postcontroller.js file, and the postroutes.js file
    - Displaying saved playlists for the logged in user on the profile.html page
    - Displaying favorite songs for the logged in user on the profile.html page
    - Displaying posts for the logged in user on the profile.html page
  - Implemented css for:
    - profile.css
    - homepageForumStyling.css
    - songs.css
- Brittany:
  - Created front end for
    - forum.html
    - search-results.html
    - The navigation bar
   - Added functionality for:
     - All of the search-results page functionality
       - Dynamically embedding html for each of the search results for songs, playlists, and posts
     - All of the forum post page functionality
       - The ability to dynamically show a post with the linked song or playlist it is for and the replies below it with the ability to comment on the post and have it immediately show up.
      - The buttons on the profile page
      - The buttons on the home page
      - Created a JavaScript helper functions file for URL handling
   - Implemented/Modified CSS for:
      - Every page and every CSS file
   - Helped others debug and helped manage the team
 - Elijah:
   - Created Front end for
     - Song.js(updating all fields with the relevant information + song title)
       - Functionality to be incorporated with any accessible song on the site after creation
     - Playlist.js(Textbox implementation for user post data)
    - Implemented front end pages for
      - Login.html
      - Song.html
      - Playlist.html
     - Implemented css for
       - login.css
       - song.css
       - playlist.css
       - home.css
       - Added stuff to main.css
     - Aided with team planning
- Kenyon:
  - Created backend routes for:
    - Songs (creating, retrieving, updating, and deleting)
    - SongController.js, SongRoutes.js
    - Replies (creating, retrieving, updating, and deleting)
    - ReplyControllers.js, ReplyRoutes.js
  - Added functionality for:
    - Adding songs to database and song page
    - addSong.js
   - Implemented front end pages for:
     - add-song.html
    - Implemented css for:
      - addSong.css
6. https://drive.google.com/file/d/1zqXL9MJYdAgZzssFKKMYk4Qa1tn4Bg_0/view?usp=sharing
addSong.css
(VIDEO LINK)



