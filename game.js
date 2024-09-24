const wordDisplay = document.querySelector(".word-display");
const hangImag = document.querySelector(".hangman-box img");
const keyboardDiv = document.querySelector(".keyboard");
const guessTimes = document.querySelector(".gusse-text b");
const gameModel = document.querySelector(".game-module");
const playAgainButton = document.querySelector(".play-again");
const addGame = document.querySelector(".custom-page");
const formGame = document.querySelector(".form-game");
const addWords = document.getElementById("add-words");
const errorAlert = document.getElementById("error");

//
addGame.addEventListener("click", function () {
  formGame.classList.add("active");
  gameModel.classList.remove("show");
});
// api
// Initialize the wordList with predefined words
const wordList = [
    { word: "الوطني", hint: "يتم الاحتفال به في 23 سبتمبر" },
    { word: "السعودية", hint: "اسم الدولة التي نحتفل بها" },
    { word: "الاحتفال", hint: "نشاط يتم في اليوم الوطني" },
    { word: "الطائف", hint: "مدينة سعودية تشتهر بالورود" },
    { word: "النشيدالوطني", hint: "موسيقى وكلمات تعبر عن حب الوطن" },
    { word: "تراث", hint: "يمثل عادات وتقاليد المملكة" },
    { word: "الدرعية", hint: "مهد الدولة السعودية الأولى" },
    { word: "الزيالسعودي", hint: "ملابس تعكس الثقافة السعودية" },
    { word: "علمالمملكة", hint: "راية خضراء تتوسطها كلمة التوحيد" },
    { word: "العلا", hint: "مدينة أثرية تعكس تاريخ المملكة" },
  ];
  
  // Add event listener for adding new words
  addWords.addEventListener("click", function () {
    const newWord = document.getElementById("newWord").value;
    const newHint = document.getElementById("newHint").value;
    const successAlert = document.getElementById("successAlert");
    
    if (!newWord || !newHint) {
      errorAlert.textContent = "الرجاء إدخال كلمة وتلميح";
      return; // Exit early if validation fails
    }
  
    // Send data to the API using fetch
    fetch("https://66f168d9415379191550c6e8.mockapi.io/newWord", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ word: newWord, hint: newHint }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Word added:", data);
        
        // Push the new word and hint to the local wordList
        wordList.push({ word: data.word, hint: data.hint }); // Use the data returned from the API
  
        getRand(); // Start the game after adding the word
        formGame.classList.remove("active");
         // Show success message
      successAlert.textContent = "تمت إضافة الكلمة بنجاح!";
      successAlert.style.color = "green"; // Style the message
      })
      .catch((error) => {
        console.error("Error adding word:", error);
      });
  });
  
  // Fetch existing words to initialize wordList
  fetch("https://66f168d9415379191550c6e8.mockapi.io/newWord")
    .then((response) => response.json())
    .then((data) => {
      // Initialize wordList with existing data
      wordList.push(...data.map(item => ({ word: item.word, hint: item.hint })));
      getRand(); // Start the game after fetching the initial words
    })
    .catch((error) => console.error("Error fetching words:", error));
  
  
  // Fetch existing words to initialize wordList
  fetch("https://66f168d9415379191550c6e8.mockapi.io/newWord")
    .then((response) => response.json())
    .then((data) => {
      // Initialize wordList with existing data
      wordList = data.map(item => ({ word: item.word, hint: item.hint }));
      getRand(); // Start the game after fetching the initial words
    })
    .catch((error) => console.error("Error fetching words:", error));

let currentWord, correctLetters, wrongCount;
const maxGuess = 6;

// Reset game function
const resetGame = () => {
  correctLetters = [];
  wrongCount = 0;
  guessTimes.textContent = maxGuess + "/" + wrongCount;
  hangImag.src = `hangman-${wrongCount}.svg`;
  keyboardDiv
    .querySelectorAll("button")
    .forEach((button) => (button.disabled = false));
  wordDisplay.innerHTML = currentWord
    .split("")
    .map(() => `<li class="letter"></li>`)
    .join("");
  gameModel.classList.remove("show");
};

// Function to get a random word and initialize the game
const getRand = () => {
  const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
  document.querySelector(".hint-text b").textContent = " " + hint;
  currentWord = word;
  resetGame();
};

// Handle game over (win/lose)
const gameOver = (win) => {
  setTimeout(() => {
    const message = win ? "مبروك! لقد فزت!" : "عذراً! لقد خسرت!";
    gameModel.querySelector("img").src = win ? "victory.gif" : "lost.gif";
    gameModel.querySelector("h4").textContent = message;
    gameModel.querySelector("p").textContent = "الكلمة كانت: " + currentWord;
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
    hangImag.src = `hangman-${wrongCount}.svg`; // Update hangman image
  }
  button.disabled = true; // Disable button after click
  guessTimes.textContent = maxGuess + "/" + wrongCount;

  // Check if game over (lose)
  if (wrongCount === maxGuess) {
    return gameOver(false);
  }

  // Check if player won (fix with unique letters handling)
  const uniqueLetters = [...new Set(currentWord)].length;
  const guessedUniqueLetters = [...new Set(correctLetters)].length;

  if (guessedUniqueLetters === uniqueLetters) {
    return gameOver(true);
  }
};

// Create keyboard buttons dynamically
const arabicLetters = [
  "أ",
  "ا",
  "ب",
  "ت",
  "ث",
  "ج",
  "ح",
  "خ",
  "د",
  "ذ",
  "ر",
  "ز",
  "س",
  "ش",
  "ص",
  "ض",
  "ط",
  "ظ",
  "ع",
  "غ",
  "ف",
  "ق",
  "ك",
  "ل",
  "م",
  "ن",
  "ة",
  "هـ",
  "و",
  "ي",
  "ئ",
    "ؤ",
    "إ",
    "ى",
    "آ",
    "ء",
    
];

arabicLetters.forEach((letter) => {
  const button = document.createElement("button");
  button.textContent = letter;
  button.addEventListener("click", (e) => initGame(e.target, letter));
  keyboardDiv.appendChild(button);
});

// Start the game when the page loads
getRand();

// Reset the game when "Play Again" button is clicked
playAgainButton.addEventListener("click", getRand);
