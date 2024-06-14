# Wheel of Fortune Quiz Game

Welcome to the Wheel of Fortune Quiz Game! This interactive game challenges players to spin a wheel, answer questions, and accumulate points. The game ends when a player makes three incorrect guesses or reaches 1000 points. Detailed below are the instructions for setting up and playing the game, as well as a brief description of the project structure.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Game Rules](#game-rules)
- [Project Structure](#project-structure)

## Features

- Interactive spinning wheel
- Multiple choice questions with varying difficulty
- Score tracking and display
- Modal pop-ups for game over and game completion
- Rules modal for game instructions

## Installation

### Prerequisites

- Web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code, Sublime Text, Atom)

### Steps

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/wheel-of-fortune-quiz-game.git
   ```
2. **Navigate to the project directory:**
   ```sh
   cd wheel-of-fortune-quiz-game
   ```

## Usage

1. **Open the `index.html` file in your web browser:**
   - You can double-click the `index.html` file or right-click and select "Open with" followed by your preferred web browser.
2. **Start the game:**
   - Click the "Spin the Wheel" button to receive a question.
   - Use the alphabet buttons to guess the letters in the answer.
3. **View rules:**
   - Click the "Rules" button to view the game rules in a modal pop-up.
4. **Restart the game:**
   - If the game ends, click the "Restart Game" button in the modal pop-up to reset and play again.

## Game Rules

1. Spin the wheel to receive a question.
2. Select letters to guess the answer.
3. You have three chances to guess incorrectly.
4. If you guess correctly, you earn points based on the wheel segment.
5. Reach 1000 points to win the game.
6. If you guess incorrectly three times, the game is over.

## Project Structure

```plaintext
wheel-of-fortune-quiz-game/
├── index.html          # Main game interface
├── styles.css          # CSS styles for the game
├── scripts.js          # JavaScript logic for the game
├── intro.html          # Introduction page with start button
├── README.md           # Project documentation
```

index.html

This file contains the main structure of the game interface including the wheel, question section, alphabet section, score section, and modals for game over, game completion, and rules.

styles.css

This file contains the CSS styles for the game, including layout, colors, fonts, and responsiveness.

scripts.js

This file contains the JavaScript logic for the game, including functions for spinning the wheel, presenting questions, selecting letters, updating the score, handling game over and game completion, and displaying/hiding modals.

intro.html

This file contains the introduction page with a welcome message and a button to start the game.
Contributing
