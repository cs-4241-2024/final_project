## Group 7 
## Easy Jobs

https://group-7-final-project.glitch.me/

1. A brief description of what you created, and a link to the project itself (two paragraphs of text)

  This project is a job application tracker. The goal of this project is to help students track each application they send out during the application season. Upon the landing page the user will have access to a central hub to store and edit information about their applications. On the same page there is an option for the user to export all their data into a CSV for external use outside of the application. 

  Additionally, there's a navigation bar to traverse through the other pages of the website along with an extremely cool logo in the top left. Users are also able to see what other community members have applied to, to get informed of other job opportunities. There's a page that shows the user the statistics of their applications. This includes charts for whether they submitted an application or not and their application stage. Users are able to log in and out using passport.  

2. Any additional instructions that might be needed to fully use your project (login information etc.)

Log in using github authentication. 

3. An outline of the technologies you used and how you used them.

- React: Application framework
- Vite: Faster React development
- Express: Backend
- MongoDB: Database storage
- Mongoose: Set schema for database
- Passport-github: Authentication using github
- Cookie-session: User session management 
- Chart.js: Create pie charts for the statistics


4. What challenges you faced in completing the project.

- Setting up the github repository: When setting up the the repo we clone it to our local devices creating a new directory but when we run the starter command "npm create vite-express" it created an additional repository on our local devices. Making the directory nested and unable to run.
- Pushing to main: When trying to push to main from changes made on other branches it didnt allow us to push and it reverted to previous commits where to code doesnt work.
- Transitioning to Glitch: When importing from github we found that our dependecies on the package.json werent loading properly on glitch it took older version instead of newer once we specified. 
- Github Authentication: The callback route was not working properly so we had to go back into github and change the route there so it matches correctly with the one in the code.
- Edit values in the table/database: The route for edit and delete was having issues where we would get 200 erros, we had to look at it for a while to get it working with the call from the client side.
- Charts: When adding the charts to teh stats tab it would zoom in to the webpage and not display the graph as it should be. This was problaby thanks to our inexperience with chart.js.
- Mainting CRAP principles: We had to make sure that for the tables there was always enough contrast for the text. And that everything was in line and in proximity to like elements, while being aligned with other items in the page. It was a lot of mixing and justifying and remodifying to ensure standards.

5. What each group member was responsible for designing / developing.

- Kenneth: Styling, creating the navigation bar, formatting the buttons. 
- Najum: Tables, styling, logo
- Gabriel: Backend routes, authentication, database 
- Anthony: Charts, export to csv, delete all 
- Samruddhi: Styling, tables, buttons


6. A link to your project video.

https://youtu.be/iPMYym-34XQ



Think of 1,3, and 4 in particular in a similar vein to the design / tech achievements for A1—A4… make a case for why what you did was challenging and why your implementation deserves a grade of 100%.

-We went beyond the teaching of the class and implemented features that we werent familiar with but we overcame it by researching, doing trial and error. Some of theese features are export to csv, real time data updating like the stats based new added data to the my appplications tab. Not only that but we implemented all the knowledge from past assigments like a1 through a4 by using technologies that were tought in class such as react, vite, and the mongo server. 
We also aimed for solving direct user problems: community involvement with the aggregated posts, export to csv for external operations, deleting all applications for a new application season, stats to guage how the current application season is going.
