# cocktail-combo
# Our Roles

 Anu took the lead on the front end of the website, and created the CSS layout, styling, and grid system from scratch using vanilla JavaScript, also putting some time into the database and Flexbox for responsiveness. Rose helped out with front end, and contributed to CSS and HTML, and also worked on dealing with back-end bugs fix to ensure the application would work smoothly. Aaron focused on the back end, handling the server-side logic with Express and MongoDB, and additionally fixed bugs on the front end while also contributing to the database. Kayla also gave support and worked on front and back end bug fixes and deployed the project for our group to Glitch. Tanishka handled the project video creation which includes recording and editing, and helped contribute to some of the front-end design ideas and visuals. Together we were all able to combine our skills and make this project from both a technical and design perspective work. 

# Inspiration

When brainstorming ideas for our final project, we came up with an idea for a Cocktail building website that could help people with limited ingredients or supplies see what cocktails they can make, instead of search up different recipes and having to keep checking if they have the ingredients or not. We are also college students, so most of us don’t have a stocked bar at college and the project seems engaging since its an efficient tool even we might use in the future. 


# Brief Description 

Our web application is a cocktail search website that allows users to be recommended a cocktail based on the ingredients they have at home. The cocktails recommended are not limited to what the user has available. The site allows users to insert three ingredients they have, and a random cocktail will appear. The site also allows users to favorite cocktails. Their favorite cocktail will be viewable on their account page. They are also able to add/ remove the cocktail from their profile. The last big feature the app has is that it allows users to rate the cocktails, the rating will be viewable by all users. 

Our site link is https://cocktail-combo.glitch.me/. To log into the site without creating an account use the following log in details: <br/>
Username: “admin” <br/>
Password: “password”

# Technology Used and How 

HTML and CSS - to structure our web pages and style the user interface  

Vanilla JavaScript - to add dynamic behavioral and interactive features to the website 

Client-side JavaScript – to fetch the API based on user input 

Node.js – setting up the server 

Express – Manages user authentication via Google OAuth and serves static files. Handles routes for saving cocktails data from external API. 

MongoDB – Used as the database to store user profiles, rated cocktails, and saved favorites. 

Google OAuth Authentication – used for user authentication. 

API Integration – used to fetch cocktail data based on the ingredients users have at home. 

CSS Grid and Flexbox – Used for creating a flexible and responsive layout 
 

# Challenges 

Database integration: We had issues when using databases within our site. Trying to set up the registration database, the rated cocktail database, and the saved favorites database caused multiple issues for our site. 

Authentication Setup: Our biggest issue with using google authentication was trying to deploy glitch, when having google authentication on WPI wifi. Trying to troubleshoot when the issue is the wifi is difficult because you don’t expect that to be the issue with the code you create. When on a home network, we continued to have issues getting google authentication to work. We found that our code was not properly set up for it to work. 

Ui/UX Design: The issue we faced when creating our user interface was that certain features weren’t accessible with our layout. Some of our design overlapped buttons which made the buttons unusable. This problem was eventually solved after some research.

	 
# *Technical Achievements*

*Database System:* Successfully integrated a relational database to store and retrieve user information and user favorites and reviews. The application can now store, update, and delete user favorites and reviews seamlessly. We also set up a database that stored cocktail information using information from a free API that we accessed to display cocktail recipes to the user.

*Multiple Pages:* Developed a multi-page web application with content that changes based on user interactions.  

*Google Authentication:* Implemented Google authentication using OAuth to allow users to securely log in using their Google accounts. This authentication system was set up to handle user sessions and integrate with the back-end to manage users favorites and reviews. 

 
# *Design/Evaluation Achievements*

*CSS Div Styling + Grid:* Used CSS Grid and Flexbox to create flexible, responsive layouts for the website. This allowed for better control over the positioning of elements and ensured the design looked great across multiple screen sizes. 

*Layout:* Designed an intuitive and user-friendly layout that allowed users to navigate through the application with ease. The layout ensured clear separation between different sections of the application, making it visually structured and easy to use. 

*Vanilla CSS:* Styled the application with plain CSS, which was more work as we have complex designs within our application. 

# Video
https://www.youtube.com/watch?v=1rkecinoOvE

# Resources we Consulted/Initial Research:
potential apis:
- https://api.api-ninjas.com/v1/cocktail
- https://www.thecocktaildb.com/api.php
- https://github.com/lauriharpf/thecocktaildb-downloader/blob/master/thecocktaildb/src/generated/without-images/drinks.ts <-- this is where our data came from
