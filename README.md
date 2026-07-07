# Rock Paper Scissors Game

A fun and interactive web-based implementation of the classic Rock, Paper, Scissors game built with HTML, CSS, and JavaScript.

## 📋 Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Project Structure](#project-structure)
- [How to Play](#how-to-play)
- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [Game Rules](#game-rules)
- [License](#license)

## ✨ Features

- **Interactive UI**: Click on rock, paper, or scissors to make your move
- **Real-time Score Tracking**: Keep track of wins, losses, and draws
- **Computer Opponent**: Play against a computer that makes random choices
- **Visual Feedback**: Color-coded messages showing game outcomes:
  - 🟢 Green for wins
  - 🔴 Red for losses
  - 🔵 Blue for draws
- **Responsive Design**: Works on desktop and mobile devices
- **Easy to Play**: Simple and intuitive user interface with images for each choice

## 🎮 Demo

To see the game in action, visit the GitHub Pages link (if enabled for this repository) or follow the installation instructions below.

## 📁 Project Structure

```
Rock-Paper-Scissors-Game/
├── index.html          # Main HTML file with game structure
├── styles.css          # Styling and layout
├── app.js              # Game logic and event handling
├── rock.png            # Rock choice image
├── paper.png           # Paper choice image
├── scissors.png        # Scissors choice image
└── README.md           # This file
```

## 🎯 How to Play

1. **Clone or download** this repository to your local machine
2. **Open** `index.html` in your web browser
3. **Click** on Rock, Paper, or Scissors to make your move
4. The **computer** will automatically make its choice
5. The **game result** will be displayed with your updated score
6. **Play again** by clicking your next choice!

## 🚀 Installation

### Option 1: Local Setup
```bash
# Clone the repository
git clone https://github.com/tiwari-nikhil/Rock-Paper-Scissors-Game.git

# Navigate to the project directory
cd Rock-Paper-Scissors-Game

# Open index.html in your browser
# On macOS: open index.html
# On Windows: start index.html
# Or simply double-click index.html
```

### Option 2: Online
- You can also enable GitHub Pages for this repository in the repository settings to play it online

## 🛠️ Technologies Used

- **HTML5** - Structure and semantic markup
- **CSS3** - Styling and responsive layout
- **JavaScript (ES6)** - Game logic and DOM manipulation

### Key JavaScript Features Used:
- `querySelectorAll()` - DOM element selection
- Event listeners for click handling
- `Math.random()` - Computer choice generation
- Dynamic styling with `backgroundColor`
- String template literals for messages

## 📜 Game Rules

The classic Rock, Paper, Scissors rules apply:

- **Rock** ✊ beats Scissors
- **Scissors** ✌️ beats Paper
- **Paper** ✋ beats Rock

If both players choose the same option, the game is a **Draw**.

## 🎓 Code Highlights

### Game Logic
The main game logic is implemented in `app.js`:
- `playGame()` - Main game controller
- `genCompChoice()` - Generates random computer choice
- `showWinner()` - Updates score and displays results
- `drawGame()` - Handles draw scenarios
- Event listeners for user choice interaction

### Styling
The `styles.css` file includes:
- Flexbox layout for responsive design
- Color-coded messages (green for win, red for loss, blue for draw)
- Image-based choice buttons
- Score board display
- Centered game interface

## 🤝 Contributing

Feel free to fork this repository and submit pull requests for any improvements!

## 📝 License

This project is open source and available under the MIT License.

---

**Enjoy the game! 🎮**
