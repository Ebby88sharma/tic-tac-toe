# Tic Tac Toe with Smart AI

A classic Tic Tac Toe game built with React, featuring a **Player vs AI** mode. The AI is designed to block the player from winning and make intelligent moves, providing an engaging and competitive experience.

---

## Features
- **Interactive Gameplay**: Play against an AI or restart the game anytime.
- **Responsive Design**: Fully responsive game board that works on desktop and mobile devices.
- **AI Logic**:
  - Blocks the player’s winning moves.
  - Makes random moves when blocking isn’t necessary.
- **Winner Detection**:
  - Detects wins for both the player and the AI.
  - Identifies draw conditions when no valid moves remain.
- **Restart Button**: Easily restart the game and play again.

---

## Live Demo
Play the game live here: [Tic Tac Toe on Vercel](https://tictactoe-oyre3o1q2-ebby88sharmas-projects.vercel.app/)

## Github Link
[Github](https://github.com/Ebby88sharma/tic-tac-toe)
---

## Technologies Used
- **React**: For building the user interface and managing game state.
- **CSS**: For responsive and visually appealing design.
- **Vercel**: For deployment and hosting.

---

## Project Structure

```plaintext
.
├── public/
│   └── index.html              # Main HTML file
├── src/
│   ├── components/
│   │   ├── Board.js            # Main game logic and AI implementation
│   │   ├── Cell.js             # Individual cell component
│   │   └── WinnerMessage.js    # Displays winner or draw message
│   ├── App.js                  # Main app component
│   ├── index.js                # React entry point
│   └── styles.css              # Styling file
├── .gitignore                  # Git ignore file
├── package.json                # Project configuration
├── package-lock.json           # Lock file for dependencies
└── README.md                   # Documentation
