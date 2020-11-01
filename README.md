# cube19 UI Coding Test

## Overview
We're looking for a small React SPA (single-page-application) that emulates a leaderboard. The aim of this exercise is to test your ability to write clean maintainable code and your understanding of the React library.

## Details and rules
Your solution must be written in JS using React. The `quickstart.html` file in this repo is provided as a minimal (and optional) starting point. You could alternatively use a project scaffolding tool like create-react-app as long as you provide clear and simple instructions on how to build, test and run your project.

You can bring in any libraries you wish - we suggest using Immutable.js, this library has been included in `quickstart.html`.

We’re looking for good design and architecture sensibilities, not software perfection. Gold plating is not necessary or expected. A great partial solution will be marked much higher than a mediocre complete solution.

Your solution should be:
* Adequately tested
* Of a quality you would be happy to run in production
* Of a quality you would be happy to hand off to a coworker
* As simple as possible
* Completed in about 3 hours

Things we really like at cube19:
* Functional and declarative code
* Immutability
* Code that is (mostly) pure functions taking and returning values

TO SUBMIT - Please do not place code into a public source control repo (github, bitbucket, gitlab etc).  An invite to a private repo or a zip file containing all source are preferred. Please put clear instructions on how to build and run your project in a readme file in your repo.

## Functionality
### Part 1 of 5 - Update a user’s score
It should be possible to enter the score of a user. If a user has not been seen before then a new user should be created automatically. Inputs will be a string for the user’s name and an integer for the user’s score.

A leaderboard should be shown of the users' name, rank, score. It should be clearly indicated whether users are new entrants, climbers (they’ve moved ahead of another person) or fallers (someone has moved in front of them).

Your design of the leaderboard should match `leaderboard-mockup.png`.

### Part 2 of 5 - Load An Initial Leaderboard State
Instead of your application starting with no users or scores, it should now load the initial state from an API.
You should make a GET request to http://coding-test.cube19.io/frontend/v1/starting-state to receive a JSON response with initial state to display.

An example response from this endpoint is:

[
  {
    "name": "nick",
    "score": 6
  },
  {
    "name": "alan",
    "score": 11
  },
  {
    "name": "chris",
    "score": 8
  }
]


### Part 3 of 5 - User Name Enrichment
While it should be possible to add new users at any point, some users will have been pre-registered.

When adding a new user, you should first POST to http://coding-test.cube19.io/frontend/v1/user-enrichment .  The payload you should send is:
{
  "username": "the username entered"
}

You will receive a response with the username to display: 
{
  "display-name": "The username we’d like you to display"
}

### Part 4 of 5 - Display Highest Scores

There should be an area/areas of the app that shows:
The highest score achieved by any player and who achieved it.
For each player, the highest score they achieved.

Your design of this section should be based on `highscores-mockup.png`.

### Part 5 of 5 - Revert to a Historical State

It should be possible to ‘rewind time’ and jump to an earlier state of the leaderboard. Doing this should cause the app to update both the leaderboard and high scores.

It should be clear to the user that they’re viewing a historical state.
It should be easy for the user to get back to the latest state.

The design of these controls is upto you.
