const wordDisplay = document.querySelector(".word-display");
const keyboardDiv = document.querySelector(".keyboard");



const getRand = () => {
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    document.querySelector(".hint-text b").textContent = "Hint: " + hint;
    wordDisplay.innerHTML = word.split('').map(() => `<li class="letter"></li>`).join('');
};

// Create keyboard buttons
for (let i = 97; i < 123; i++) {
    const button = document.createElement('button');
    button.textContent = String.fromCharCode(i);
    button.addEventListener('click', () => {
        // Handle letter click (you can implement your logic here)
        console.log(`You clicked: ${button.textContent}`);
    });
    keyboardDiv.appendChild(button);
}

getRand();
