# CS 4241 Final Project Proposal

*22 September 2024*

## Group Members

- Trajan Espelien
- Steven Oliner
- Ezra Barboza
- Christian Rua

## Project Details

### Rationale

The current way the WPI chem stockroom inventory is managed isn't the best. It's not online, not kept completely up to date and there's no log of whos updating / creating errors

### Accounts

| Account level | Permissions / Actions |
| :---- | :---- |
| **Guest (no username, no password)** | View database only (except price); Search database using item name |
| **TA\*** | Previous level \+ View their class logs only\* |
| **Employee**  | View/search entire database (including price); Update database (add row, update quantity, location, notes columns); View all logs\*; Download spreadsheet as backup\* |
| **Admin** | Previous level \+ Upload spreadsheet that replaced database\*; Add, remove, update accounts |

*(\* denotes stretch goals)*

### User Stories

- As a chemistry TA, i want to be able to view the stockroom database: name of item, quantity, location, notes, last updated (person \+ date) 

- As a chemistry TA, i want to see the transaction logs associated with my courses

- As a stockroom employee, I want to be able to see the stockroom database: name of item, quantity, location, **price**, notes, last updated

- As a stockroom employee, I want to be able to modify the available inventory listed: add new row, update row (update quantity, location, notes)

- As a stockroom employee, i want to able to download a copy of the database as a spreadsheet

- As a stockroom employee, i want to be able to upload a spreadsheet to replace the database

- As either employee, i want to be able to search the database using item names so i can easily find the items i need

## Technologies

- React
- Mongo DB
- CSS Framework TBD