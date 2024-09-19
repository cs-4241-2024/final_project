## Names
Brendan Byrne  
Joseph Caproni  
Ben Skarnes  
Cole Welcher  


# Proposal: Tracking Sheet AutoFill Out

&emsp;&emsp;When going into a student's workday at WPI, they can download a .xlsx file of all classes they can take. We plan to make a website where you can upload your .xlsx file, and it will auto-populate a specific class year tracking sheet. This will allow students to see what class they need to take. Once a user is happy with what classes are where they can save it so that they can log in anywhere with the internet and pull up their online tracking sheet.  
&emsp;&emsp;Each field will also have an input where a user can start typing and select what classes they plan to take in the future. The selected field will populate with the class. This allows the user to plan their future classes and have access to them at all times. Hopefully, we can have more than just a CS tracking sheet and also have it scrape classes and tracking sheets from the WPI website, so it is constantly updated.

## Technologies

- express for server
- Mongoose w/MongoDB - Database
- React for frontend JS
- Typescript
- Bootstrap for CSS Framework (tentative)

## Potential Libraries
- XLSX (sheetjs) - used for .xlsx file parsing
- passport.js - used for login of the user as well as OAuth (with GitHub)
- Multer - used for file uploads in node.js
- Typeahead.js - autocomplete inputs
