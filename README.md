# CS 4241 Final Project

[Hosted Link](https://final.tempel-alpha.ts.net)
 - user: `test`, password: `test`

[Proposal](PROPOSAL.md)

[Video Link](https://youtu.be/xcT_byKhagc)

## Team
 - Liam Snow (database)
 - Jake Olsen (server)
 - Ben Tyler (front end)
 - Ryan Wright (database, concept design)

## Description
In the food business, manually taking inventory is a tedious task, but the importance of it cannot be undervalued. Running low on or running out of inventory for certain foods can be detrimental for a restaurant, especially during busy hours when demands are high. Additionally, manually taking inventory takes up time that could be spent doing other tasks. An application that streamlines the process of taking inventory would not only benefit staff, but it would make the restaurant run much more smoothly. Additionally, having the ability to keep track of your own home ktichen can help save time when it comes to checking what you have in stock, what you need, and how much of an item you might need.

The Kitchen Inventory App is an app used to track the inventory of a given kitchen. It was created with the target audience being managers of resturants within the food buisness, however it is more than capable to also keep track of a households kitchen inventory. When first loading the site you are greeted by the sign in page. If a user does not have an account they are given the option to sign up. This feature is useful if their are multiple users, like roommates within an apartment, who all have their own inventories of food, or for multiple resturants. After signing in you are brought to the Locations page. This page is used to seperate your kitchen into many different places such as a pantry, refrigerator, freezer, etc. We decided to separate inventory by the location of the items because in my experience, most inventory is divided by location and most orders are placed by location, though if users want to have one table for all inventory they can do so. After adding a location you can then clock on it which brings you to that locations inventory. here you can view foods you have stocked as well as add more. There are many different fields for a food item to have including Name, Category, Quantity, Wanted Quantity, and Price. The most interesting fields here are the Quantity and Wanted Quantity field because it helps the application determine what you need more of. When the quantity you have is less than the wanted quantity the item will turn red as well as appear on the To-Order List. This lets the user easily see which items they need to order. This is especially important because there are so many items in inventory that it's hard to keep track of them all, so the program automatically notifying the user if they're low on certain items is very beneficial and a huge time-saver. The To-Order List is found on the Locations page and allows user to see exactly what they need to buy from all locations. This is useful when it comes to shopping or ordering new food to restock your kitchen's inventory. 

## Technology
This project has a core focus around server side rendering (SSR)
and CRUD. Everything on the client side is handled by HTMX
which means there is zero client side Javascript, while still
being a reactive fast webapp.

This webapp was built using the following technologies:
 - [Express.js](https://expressjs.com): web/server framework
 - [Handlebars](https://handlebarsjs.com/): HTML templating
 - [daisyUI](https://daisyui.com/) (tailwind): UI components
 - [HTMX](https://daisyui.com/): javascript behavior in HTML attributes
 - [SQLite](https://www.sqlite.org/): lightweight file-based database
 - __Self Hosted__: hosted on Arch Linux server with Docker and Tailscale (see [Hosting](#hosting))

### Achievements
 - Secure storage of user credentials using hashing with salting
 - Protected endpoints: even with the `locationID` of another users location, it cannot be viewed
 - Protected database calls: users can only view, create, edit, or delete locations and foods for their account (this is checked at every database call)
 - Seamless HTML injection (no page reload): whenever a food is added or edited, a POST request is made which returns new HTML (only inside `<body>`), which HTMX replaces with the current body content

### Challenges
 1. The biggest challenge we faced in this project was using SvelteKit. We had many attempts at it, but eventually decided that doing this project without a front-end framework (SSR) was more feasible.
 2. Another challenge we faced with this project was how to make the edit food dialog/modal. Every other dialog in this app gets generated at page load. In order to solve this we used some more advaned HTMX features. When the edit food button is pressed it fetches the api `/location/{locationID}/edit-food-dialog/{foodID}` and injects the response (HTML for dialog) into a div at the bottom of the page. Whenever that div is changed (`hx-on::after-swap`) it opens the modal.
 3. One more challenge came when considering how the program should function. We weren't sure if all food items in the inventory should be displayed on the same page or if they should be on different pages for each location where food is stored. We settled on having different locations because from my experience working in a kitchen, my boss would manually take inventory on separate clipboards for different locations, and would usually place separate orders for each location.

## Development
```bash
npm run server # to view website (hosted at `http://localhost:3000`)
npm run tailwind # to live reload css
```

## Hosting

This project was self hosted on an Arch Linux
server with Docker and Tailscale.

__Example Docker Compose__ (tailscale removed):
```yaml
name: final
services:
  final:
    container_name: final
    image: node:latest
    volumes: [.:/app]
    working_dir: /app
    command: sh -c "npm install && npm start"
    restart: unless-stopped
```

__`.env` File__:
```bash
NODE_ENV=production
```


