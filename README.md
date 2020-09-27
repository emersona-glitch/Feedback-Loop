# Feedback Loop

## Description

_Duration: Weekend Project_

This web app is a simple interface to receive feedback from a program similar to the one I was enrolled in at Prime Academy. Users are guided, step by step, to submit feedback about their weekly experience.

### Prerequisites

You will need [Node.js](https://nodejs.org/en/) and the node package manager to install dependencies for this app.
You will also need [PostgresQL](https://www.postgresql.org/) to run the database for this app.

## Installation

1. Fork this repository and Clone using `git clone <repo-url.git>`
2. Install any dependencies by navigating to the project directory and using `npm install` in terminal.
3. Create a database named `prime_feedback`,
4. The queries in the `database.sql` file are set up to create the table required for this project.
   The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed.
   I recommend using Postico to run the CREATE TABLE queries, as this is what I used.
7. Run `npm run server` in your terminal
8. Run `npm run client` in your terminal -- the app should automatically open in your browser.

## Usage

1. Users will be prompted with a landing page upon opening the app. Clicking "start" to begin submitting feedback
2. After clicking "start," the user will be asked to select how well they are feeling, on a scale from 1 - 5. Once they have made a selection, they can click the "Next" button to move on to the next view.
3. The app continues collecting information from the user in a similar fashion for: How well the user feels they are understanding material and how supported they feel. The user will also have an opportunity to submit optional comments.
4. After submitting information on the previous pages, the user can review what they've submitted and go back and make any changes if they're not satisfied.
5. Once satisfied, clicking "submit" will bring the user to a "Thank You" page, where they can choose to repeat the process and submit more feedback.

## Built With

I built this app using React-Redux, PostgresQL, node, and express.

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who gave me the training and guidance to complete this project. Special thanks to [Dane Smith](https://github.com/DoctorHowser), my instructor!

## Support
If you have suggestions or issues, please email [emerson.aagaard@gmail.com](emerson.aagaard@gmail.com)!
