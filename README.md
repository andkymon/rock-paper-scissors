# Rock, Paper, Scissors

This is a simple implementation of the classic Rock, Paper, Scissors game in JavaScript. The game allows a human player to play against the computer, with the game being played over 5 rounds.

## Functions

### `getComputerChoice()`

Generates a random choice for the computer from the options: "rock", "paper", or "scissors".

### `getHumanChoice()`

Prompts the human player to enter their choice. Valid inputs are "rock", "paper", or "scissors". The function will alert the player if the input is invalid or if the prompt is canceled.

### `playGame()`

Main function that controls the flow of the game:
- Initializes scores for the human and computer.
- Plays 5 rounds of the game.
- Displays the result of each round and the current score.
- Announces the final result at the end of the game.
