# Daytime

by Harshith Iyer and Edward Stump

## Overview

Daytime will be a calendar app that allows users to add events and tasks to their calendar, as well as view both on the same calendar component. In Outlook Calendar, you are able to view tasks and calendar on the same screen, but tasks show up as a separate window underneath the calendar, making both the tasks window and calendar window smaller, harder to navigate, and less useful overall. I wanted to create a version of a calendar app similar to Google Calendar + Google Tasks, where tasks show up as pieces on your calendar, with events showing up differently but on the same view.

## Features

- Users can add events and tasks to their calendar
- Users can view events and tasks on the same calendar
- Users can view tasks as a list in a separate window
- Users can edit events, with the following fields:
  - Title
  - Description
  - Location
  - Start Time
  - End Time
  - Tags
- Users can edit tasks, with the following fields:
  - Title
  - Description
  - Due Date
  - Tags
- Users can delete events and tasks

## Technologies

- React + Vite
- Typescript
- Tailwind
- MongoDB
- React server components
- Clerk authentication

## Technical Overview

The frontend of our application will be built using Typescript, React, and Tailwind CSS for styling.

Events and tasks will be stored in a MongoDB instance in the same collection as documents. Each document will have a 'type' field, differentiating events and tasks. Each document will also have a 'user' field, allowing the server to sort and only return events and tasks relevent to the currently logged in user.

Database querying and posting will be done using React server components, and authentication will be done using Clerk's authentication system.
