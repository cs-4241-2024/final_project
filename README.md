### Auto CS 2025 Tracking Sheet ###

1.
    Link: https://wpi-course-tracker-63d868ddf8d5.herokuapp.com/login
    PreMade user: test     Password: test
    Prefilled with Cole Welcher Academic Progress

Our project is an auto input tracking sheet for Computer Science majors in the class of 2025. A user can take an excel file (downloaded from My Academic Progress in WorkDay) and uploaded (sometimes will need to unmerge the first row, or take it out of protect mode). The user can upload the excel file to our website and it will autofill a tracking sheet. A user is required to login or register allowing them to view their tracking sheet after leaving the site if they save it. This allows the user to not only have a constantly updated tracking sheet wherever they are but also allows them to periodically update it with a new excel file or manually add classes to make sure they will graduate with the required courses.
        We think this is useful to the general body because it is annoying to constantly have a paper tracking sheet filled out, or to have a pdf that you're constantly filling in with your classes. Instead, simply being able to import your Academic Progress takes the time and stress off the user. Going forward we could add more possible tracking sheets (years and class). In addition there is also an About Page, Instructions Page, Home Page, Login Page, and a Register Page. 


2.
    Login: test
    Password: test

    To get to excel download:
    1. Go to WPI workday
    2. Go to Academics
    3. Go to My Academic Progress
    4. Click on the icon that looks like a building with an X in it (for the major you want CS 2025)
    ![alt text](image.png)
    5. Open the excel file and unmerge the first row and/or get out of protected view and save
        *Sometimes protected files and merged cells make parsing funky*
    6. Upload excel file to the cite

3. 
PassportJS with passport-local-mongoose: For login and user registration, hashed passwords for security
SheetJS XLSX: Excel file parsing, had to skip first row due to merged cell by default
MUI: For user interface and button layout
MongoDB with Mongoose: Database with schema validation for users and sheet data
Heroku: Hosting
React with react-router-dom: Application Layout, redirects based on authentication

4. 
    Challenges:
    1. Everyone having different schedules made it hard to work together at time
    2. XLSX parsing had some issues due to merged cells and protected view files
    3. Some people on the team have never used React
    4. Brendan was commuting from over an hour away
    5. It was difficult to get a list of all classes for the autofill, we found the xml database used by the planner.wpi.edu site and reformatted it to json for loading in our app
Figma Wire Frame Model 

5. Contribution:

    Cole Welcher:
        Excel file parsing
        Editor Page (xlsx upload, and the table components for user viewing)
        About Page
        AutoFill Combo Box for class selection/addition
    Ben Skarnes:
        Set up vite-express server
        Client-side routing with react-router-dom
        Server-side authentication
        Saving editor data to database
    Joseph Caproni:
        Worked on Front End Design 
        Created Wire Frame model in Figma 
        Utilized Material UI Component Library 
        Created registration page and helped create login page 
        Created the layout format for the remaining pages
    Brendan Byrne: 
       Assisted on Front End Design
       Updated and styled Instructions page

6. 
    YT Video: 
https://www.youtube.com/watch?v=88t-nOyel6I

