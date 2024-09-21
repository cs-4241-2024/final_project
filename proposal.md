# Final Project
*Due October 10th by 11:59 AM*

Team Members:
Alden Cutler, Jeremy Kurtz, Chenxi Zeng, Skyler Lin, Henry Hribar

## General description
For our project, we plan to create an accessible web application designed to manage tournaments efficiently. This tournament management web application will provide users with a user-friendly interface to store, organize, and track data. 

## User Registration (sign up): 
Administrators, host of entire tourneys, will be able to make, alter, and post matches 
- Ability to alter/change data post-match (crucial for mistakes)
- Players mistype match points
- Make final decisions for match winners
- Keep score
- Coaches, captain of individual teams, will be able to add data for their individual members of their teams
- Can add their roster at the start of the tournament
- Dictates which players/teams they will send to play in the initial rounds 
- Dictate which players are in what teams (Singles 1, Doubles 3 etc.)

## Round Robin:
- Schools/teams will be sorted into either Pool A or Pool B by administrators
- Teams will play through 5 rounds or round robin
- Teams will have a cumulative amount of points based on how many schools they won against
- If teams are tied for points its determined by the point differential who is number one seed (for bracket)
    
## Elimination Bracket Tournament Creation
- Based on Round Robin results on their cumulative points teams will get seeded automatically
- The #1 teams in each pool get a bye (don't have to play in first round [preliminaries] of elimination bracket)

## Accessibility Features
- Toast notification (Delighter)
- Pop-up feature that displays quick, non-intrusive messages on updates for recent tournaments played or results
- Filter feature 
- Allow users to sort and search through match data by date, name, and school 
- Pop up notifications (Delighter)
- Alert users to important events or upcoming matches based on time sensitivity function

## Technologies/Libraries: 
- Next.js 
- React.js
- TypeScript
- Tailwind.css
- MongoDB
- Express
- Node.js
