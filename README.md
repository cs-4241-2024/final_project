# Stockroom Inventory

*09 October 2024*

**Glitch:** https://cs4241-webware-chem-stockroom-project.glitch.me/

**Project Video:** https://youtu.be/RJgQraYsfmg

Currently, the WPI chemistry stockroom's entire inventory is on an Excel sheet and only accessible through the desktop there. It’s not online, there’s no log of who’s been updating / creating errors. Really not the best solution for a fast pace environment like WPI. We wanted to create a website to view and edit the inventory, and use Excel as a safety net instead. It being online allows WPI members to quickly see what’s available to them at the chemistry stockroom. The different account levels we have let only workers at the stockroom to make modifications to the inventory database. We included an admin level account with all permissions to manage accounts and reset the database from a backup in case something goes wrong.

## Features

- Login and account system (with account management and permission levels)
- Navigable database with search to quickly locate items and detailed item info
- On some permission levels, ability to edit database contents
- On some permission levels, ability to download a backup of the database, upload a backup file to replace the database
- Built for mobile first, but designed to also be usable on desktop computers

## Permission Levels

There are four different access levels that accounts can have. Currently, there are four existing accounts that can be used to navigate the website. Each existing account's username and password are its respective permission level (the "guest" account has no password).

| Username | Password | Permissions |
| :---- | :---- | :---- |
| guest | *No password required* | View only, don’t see price, search |
| ta | ta | View only, don’t see price, search |
| employee | employee | Previous \+ edit all fields, download backup |
| admin | admin | Previous \+  upload from backup excel, manage accounts |

## Technology

Our tech stack included React, Express, Node, and MongoDB. Christian also wrote Python scripts to initially populate the database from a spreadsheet. For styling we used basic CSS.

## Challenges

We faced a number of challenges in this project. A big part of this project involved learning React, especially managing React state and dynamically changing the UI depending on permission levels. Another challenge we faced was debugging features across the tech stack: client, server, and database. For example, we resolved bugs with functions passed as React props and miscommunications about what the columns of our database were called. We leveraged the web browser debugger, server debugging tools, and lots of `console.log` to find and fix these bugs.

*Please note that we used a file titled `private.js` to store our database login information. This is not included in this repo and, instead, we have submitted it with the same syntax as our Glitch project.*

## Work Distribution

We split up the work relatively evenly among the four of us:

1. **Christian Rua:** account manager menu, main database code, python scripts
2. **Steven Oliner:** login, permissions, deploying to Glitch
3. **Ezra Barboza:** initial figma mockup, search, upload and download
4. **Trajan Espelien:** initial figma mockup, initial ui prototype, editable popovers including permissions
