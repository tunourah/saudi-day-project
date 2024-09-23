const wordDisplay = document.querySelector(".word-display");
const hangImag = document.querySelector(".hangman-box img");
const keyboardDiv = document.querySelector(".keyboard");
const guessTimes = document.querySelector(".gusse-text b");
const gameModel = document.querySelector(".game-module");
const playAgainButton = document.querySelector(".play-again");

let currentWord, correctLetters, wrongCount;
const maxGuess = 6;

// Reset game function
const resetGame = () => {
    correctLetters = [];
    wrongCount = 0;
    guessTimes.textContent = maxGuess + "/" + wrongCount;
    hangImag.src = `hangman-${wrongCount}.svg`;
    keyboardDiv.querySelectorAll("button").forEach(button => button.disabled = false);
    wordDisplay.innerHTML = currentWord.split('').map(() => `<li class="letter"></li>`).join('');
    gameModel.classList.remove("show");
}

// Function to get a random word and initialize the game
const getRand = () => {
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    document.querySelector(".hint-text b").textContent = "Hint: " + hint;
    currentWord = word;
    resetGame();
};

// Handle game over (win/lose)
const gameOver = (win) => {
    setTimeout(() => {
        const message = win ? "Congratulations! You won!" : "Sorry! You lost!";
        gameModel.querySelector("img").src = win ? "victory.gif" : "lost.gif";
        gameModel.querySelector("h4").textContent = message;
        gameModel.querySelector("p").textContent = "The word was: " + currentWord;
        gameModel.classList.add("show");
    }, 300);
};

// Initialize game state and handle letter clicks
const initGame = (button, clickedLetter) => {
    if (currentWord.includes(clickedLetter)) {
        [...wordDisplay.children].forEach((letter, index) => {
            if (currentWord[index] === clickedLetter) {
                correctLetters.push(clickedLetter);
                letter.textContent = clickedLetter;
                letter.classList.add("guessed");
            }
        });
    } else {
        wrongCount++;
        hangImag.src = `hangman-${wrongCount}.svg`;  // Update hangman image
    }
    button.disabled = true; // Disable button after click
    guessTimes.textContent = maxGuess + "/" + wrongCount;

    // Check if game over (lose)
    if (wrongCount === maxGuess) {
        return gameOver(false);
    }

    // Check if player won
    const uniqueLetters = [...new Set(currentWord)].length;
    if (correctLetters.length === uniqueLetters) {
        return gameOver(true);
    }
};

// Create keyboard buttons dynamically
for (let i = 97; i < 123; i++) {
    const button = document.createElement('button');
    button.textContent = String.fromCharCode(i);
    button.addEventListener('click', () => console.log(`You clicked: ${button.textContent}`));
    keyboardDiv.appendChild(button);
    button.addEventListener('click', e => initGame(e.target, String.fromCharCode(i)));
}

// Start the game when the page loads
getRand();

// Reset the game when "Play Again" button is clicked
playAgainButton.addEventListener("click", getRand);
