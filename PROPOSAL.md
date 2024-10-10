# CS4241 Final Project

## Team
 - Liam Snow
 - Jake Olsen
 - Ben Tyler
 - Ryan Wright

## General Description

Our final project will be an application used for tracking inventory in a kitchen/restaurant. In the food business, manually taking inventory is a tedious task, but the importance of it cannot be undervalued. Running low on or running out of inventory for certain foods can be detrimental for a restaurant, especially during busy hours when demands are high. Additionally, manually taking inventory takes up time that could be spent doing other tasks. An application that streamlines the process of taking inventory would not only benefit staff, but it would make the restaurant run much more smoothly.

Our idea for the application will likely change as we develop the application, but here is our proposal. The app will have a table of products that the user has in their restaurant. The table will have different sections for different kinds of products - dairy, meat, produce, etc. Next to each item in the table is a number that indicates how much of the item is left in the restaurant. The program will then use the number of how much is left, as well as how much of the item the user normally has in stock, to calculate how much of each item should be ordered. For example, if the user typically has 8 turkey breasts at the start of the day, and the owner only has 3 turkey breasts by the end of the day, then the program will calculate that 5 turkey breasts should be ordered. Under the table of products, there will be another table that contains products that are low on inventory, and a number next to each product that indicates how much of the product the owner should order.


## Technology Stack

 - [Express.js](https://expressjs.com): web/server framework
 - [Handlebars](https://handlebarsjs.com/): HTML templating
 - [daisyUI](https://daisyui.com/) (tailwind): UI components
 - [HTMX](https://daisyui.com/): javascript behavior in HTML attributes
 - [SQLite](https://www.sqlite.org/): lightweight file-based database
 - __Self Hosted__: the superior hosting method
