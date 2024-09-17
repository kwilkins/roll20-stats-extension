# Roll20 Stats Extension
[Extension install](https://chromewebstore.google.com/detail/roll20-dice-stats/omaelodcjkngmabmfkbnmkmamgifimkm)

Calculates statistics from the dice rolls in a roll20.net game chat log!

Curious how you and your friends are rolling in your roll20 D&D campaign? This extension breaks down your game's history of d20 rolls into some fun stats, see who is rolling the most 1's or most 20's!

Features:
- Calculates natural `20` and natural `1` count, most common roll, and if the average roll is statistically significant
- Allows combining character statistics if for same player
- Works within roll20 game window for end of session stats
- Works within chat archive for entire game history
- Currently only details for d20 rolls

Future Plans:
- track 2d6 rolls for the PbtA players
- damage rolls from common attack roll templates

## Usage

Navigate to either your roll20 game or chat archive and then activate the extension. Depending on how long the chat is, gathering the dice logs may take some time. In the extension window you will see an entry per character name that was found in the game log with the associated roll count.

### Statistics

The statistics service tracks and records dice roll results based on the type of die that was rolled. Sometimes statistic results may be statistically insignificant, for example if the user has rolled the maximum roll result on a dice, and are not shown.

The dice roll results do not take any modifiers into consideration when calculating statistics. Whether you roll 1d20+1 or 1d20+15, it is the result of the actual dice that is used.

#### D20
- Average roll result
  - The average calculated by divding the sum of all roll results by the count of rolls made
  - The average roll on a d20 is technically 10.5, if this statistic result is somewhere in the range of 10 - 11 it is classified as statistically insignificant
- Natural twenty count
  - The number of times the maximum result was rolled, a critical success
- Highest roll result
  - The highest result that has been rolled
  - If this statistic result is 20 (the maximum result on the dice) it is classified as statistically insignificant
- Natural one count
  - The number of times the minimum result was rolled, a critical failure
- Lowest roll result
  - The lowest result that has been rolled
  - If this statistic result is 1 (the minimum result on the dice) it is classified as statistically insignificant
- Most common roll result
  - The result that has been rolled the most

### Combining

The extension supports grouping different roller identities if the same player has rolled with multiple characters the roll20 name changed for some other reason. Simply drag and drop one roller persona onto another.

## Development

This project was originally bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Testing

Running `npm test` launches the test runner in the interactive watch mode.

Tested in: 
![Google Chrome](https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white)
![Edge](https://img.shields.io/badge/Edge-0078D7?style=for-the-badge&logo=Microsoft-edge&logoColor=white)
