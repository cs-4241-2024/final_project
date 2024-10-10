# Featherfest App

## General description

Link to deployment: ...

### A brief description of what you created, and a link to the project itself (two paragraphs of text)

The Featherfest application target users are players and administrators of the Featherfest tournament. See this [spreadsheet](https://docs.google.com/spreadsheets/d/1xY_97RSohWpRhs2Pl82CX-zxPfdYPViR-zOnRO4sN2Q/edit?gid=737066836#gid=737066836) as how the model of the tournament is played. As players submit game scores to the web application, other parts of the website will be updated, such as the round-robin page, the bracket page, and the dashboard page. The round-robin page displays the points won during round-robin stage in each team's respective pool. Later on, these points decide their seeding (based on performance). The bracket page, after the round-robin stage is over (total round-robin points across all teams is 30) will be updated with teams being seeded. Players then can submit games for elimination or bracket stage. Lastly the dashboard page features an up-to-date tracking and updates of all matches, ensuring that participants and administrators are able to see match results throughout the tournament. 

Prior to the tournament, **HENRY?**

#### Additional Instructions/Login Information

- Login Information:
  - username: test
  - password: test

#### Outline of Technologies Used

- **Frontend**:
  - We used React for our front-end instead of angular due to our team's prior experience with React within Software
    Engineering. We used React's useState to store data on the page along with useEffect to keep the data updated.
  - We used Tailwind to design our application because we liked its flexibility and accessibility.
- **Backend**:
  - We chose MongoDB for our database due to its flexibility, having 3 total collections: users (login-info), teams (schools), and matches.
  - We used Node.js and Express for our server.
- **Other Tools**
  - We used Vite for running our development server and for building the final app for production.

#### Challenges Faced

- One challenge we faced was the implementation of the bracket page as it is only used after the round robin stage. We
  had to figure out how to update the bracket page after the round robin stage was over.
- We also ran into a few configuration issues. We still aren't really sure what was causing these, but occasionally we would get mysterious errors like port 3000 being occupied when no other process was running, or our `.env` config would get messed up somehow.

#### Individual Responsibilities

- **Jeremy** was responsible for the game submission page and the bracket page. Jeremy additionally was responsible for the
  backend/frontend logic of round robin and bracket page.
- **ChenXi** was responsible for the implementation and design of the round-robin page with Tailwind, following a mockup made in Figma beforehand.
- **Alden** was responsible for the backend implementation of looking up players and worked on conditional rendering in
  the header, displaying different navigation options depending on whether the user is logged in or not. Alden was also responsible for deploying the app.
- **Henry** was responsible for ...
- **Skyler** was responsible for the implementation of the dashboard page, home page, and bracket page styling. 

A link to your project video.
[Video](https://www.youtube.com/)
