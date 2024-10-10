# Daytime

by Harshith Iyer and Edward Stump

## Overview

Daytime is a calendar app that allows users to add events and tasks to their calendar, as well as view both on the same calendar component. In Outlook Calendar, you are able to view tasks and calendar on the same screen, but tasks show up as a separate window underneath the calendar, making both the tasks window and calendar window smaller, harder to navigate, and less useful overall. We wanted to create a version of a calendar app similar to Google Calendar + Google Tasks, where tasks show up as pieces on your calendar, with events showing up differently but on the same view.

Project Link:
https://cs4241final.harbar20.dev/

## Usage Instructions

To use the app, login with github. On the calendar page, there is a blank weekly calendar. To add tasks and events to the calendar, click ether the add task or add event button. Some fields are required, which will prevent the form from being submitted. Once submitted, the event or task will show up on the calendar as long as it falls within the week being displayed. Use the left and right arrows at the top of the screen to change the display week.

## Technologies

### React + Vite

We used react to create a component based website. React was a good choice for us because we were both already somewhat familiar with React and knew it would do a good job of managing the state we have in our application.

### Typescript

We used typescript to program all react components as the type checking it provides helped us keep our project error free.

### Tailwind

We used tailwindcss to style our project as both of us were already familiar with tailwind syntax.

### MongoDB

We used MongoDB to store data. The simplicity of storing a collection of JSON objects was perfect for our calendar app, as each task or event can easily be represented as a JSON object.

### NodeJS + Express Server

We used Express and NodeJS as our server of choice. 
TODO: Harshith explain more pls

### Clerk authentication

We used Clerk as our authentication provider. Clerk provides github authentication and is very easy to set up with a react project. Using Clerk SignedIn and SignedOut components also allowed us not to have a seperate login page.

## Challenges Faced

Because we were making a complicated project with only two people, time was an issue. We ran out of time to implement a few of the features that we set out to complete, such as alternate calendar views (monthly / daily) as well as tags for events and tasks.

## Work Distribution

Harshith:

-   Weekly Calendar Component
-   Server.js
-   MongoDB Setup
-   Clerk Auth Setup

Eddie:

-   CreateEvent Component
-   CreateTask Component
-   README Document

## Project Video Link

TODO: Link Project Video
