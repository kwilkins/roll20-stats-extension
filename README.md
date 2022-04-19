# Roll20 Stats Extension

Calculates dice roll stats from roll20.net game chat log!

Curious how you and your friends are rolling in your roll20 D&D campaign? This extension breaks down your game's history of d20 rolls into some fun stats, see who is rolling the most 1's or most 20's!

Features:
 - Calculates natural `20` and natural `1` count, most common roll, and if the average roll is statistically different.
 - Allows combining character statistics if for same player.
 - Works within roll20 game window for end of session stats.
 - Works within chat archive for entire game history.
 - Currently only details for d20 rolls.

Upcoming:
 - 2d6 rolls for the PbtA players
 - damage rolls from common attack roll templates

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Usage

Navigate to to either roll20 game window or chat archive and then activate the extension. Depending on how long the chat is, gathering the dice logs may take some time. In the extension window you will see an entry per character name that was found in the game log with the associated roll count and stats.

### Statistics

### Combining

## Deployment

### Testing

Running `npm test` launches the test runner in the interactive watch mode.

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
