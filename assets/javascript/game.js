//ask the user to guess a letter - placed in HTML

//Display wins, losses, and guesses left

var computerChoices = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var wins = 0;
var losses = 0;
var guesses = 9;
var guess;
var letters = [];

//Display user's guesses

//Generate a random letter by the computer

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var guessesText = document.getElementById("guesses-text");

function computerGuess() {
  guess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  console.log(guess);
}

computerGuess();

document.onkeyup = function (event) {
  var userGuess = event.key;

  if (userGuess == guess) {
    wins++;
    guesses = 9;
    letters = [];
    computerGuess();
  } else if (userGuess !== guess) {
    guesses--;
    letters.push(userGuess);
    for (i = 0; i < letters.length; i++) {
      userGuess += letters[i];
    }
  }
  if (guesses === 0) {
    losses++;
    guesses = 9;
    letters = [];
    computerGuess();
  }

  winsText.textContent = "Wins: " + wins;
  lossesText.textContent = "Losses: " + losses;
  guessesLeftText.textContent = "Guesses Left: " + guesses;
  guessesText.textContent = "Your Guesses So Far: " + letters;
};
