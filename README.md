# cube19 UI Coding Test

## Overview
We're looking for a small React SPA (single-page-application) that emulates a leaderboard. The aim of this exercise is to test your ability to write clean maintainable code and your understanding of the React library.

## Details and rules
Your solution must be written in JS using React. The `quickstart.html` file in this repo is provided as a minimal (and optional) starting point. You could alternatively use a project scaffolding tool like [Create React App](https://create-react-app.dev/) as long as you provide clear and simple instructions on how to build, test and run your project.

You can bring in any libraries you wish - we suggest using [Immutable.js](https://github.com/immutable-js/immutable-js), this library has been included in `quickstart.html`.

We’re looking for good design and architecture sensibilities, not software perfection. Gold plating is not necessary or expected. **A great partial solution will be marked much higher than a mediocre complete solution.**

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

TO SUBMIT - Please do not place code into a public source control repo (github, bitbucket, gitlab etc).  An invite to a private repo or a zip file containing all source are preferred. Please put clear instructions on how to build and run your project in a readme file.

## Functionality
### Design resources
* Your design of the leaderboard should look as similar as possible to this: https://www.figma.com/file/jAKhOyRqenu29iW9saJH5c/Leaderboard
* Your design of the areas for updating / adding user scores should be based on this: https://github.com/cube19/ui-coding-test/blob/main/update-scores.png
* You can find the SVG asset for the cartoon people here: https://github.com/cube19/ui-coding-test/blob/main/business-people.svg

### Part 1 of 5 - Enter scores and show leaderboard
It should be possible to enter the score of a new user or edit the score of an existing user. Inputs are a string for the user’s name and an integer for the user’s score.

A leaderboard should be shown of the users' names, ranks and scores. It should be clearly indicated whether users are new entrants, climbers (they’ve moved ahead of another person) or fallers (someone has moved in front of them).

### Part 2 of 5 - Load initial state via ajax
Instead of your application starting with no users or scores, it should load the initial state from an API.
You should make a GET request to http://coding-test.cube19.io/frontend/v1/starting-state to receive a JSON response with initial state to display.
20% of requests sent to this endpoint will fail, you should retry your request until it responds successfully. Some users may be missing a score attribute, you may assume a score of zero in this case.

An example response from this endpoint is:

```json
[
  {
    "name": "nick"
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
```

### Part 3 of 5 - Server side user processing
While it should be possible to add new users at any point, some users will have been pre-registered.

When adding a new user, you should first POST to http://coding-test.cube19.io/frontend/v1/process-user
The payload you should send is:
```json
{
  "username": "the username entered"
}
```

You will receive a response with the username to display: 
```json
{
  "display-name": "The username we’d like you to display"
}
```

20% of requests sent to this endpoint will fail, you should retry your request until it responds successfully.

### Part 4 of 5 - Display Highest Scores

There should be an area/areas of the app that shows:
The highest score achieved by any player and who achieved it.
For each player, the highest score they achieved.

### Part 5 of 5 - Revert to a Historical State

It should be possible to step back and forwards through the history of the leaderboard, undoing or redoing score changes to the users. Doing this should update both the leaderboard and high scores to the correct values for the point in history chosen.

It should be clear to the user that they’re viewing a historical state.
It should be easy for the user to get back to the latest state.

The design of these controls is upto you.
