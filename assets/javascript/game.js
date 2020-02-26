//All possible computer choices
var computerChoices = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

//Starting point

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var letter = [];
var eachofLetters = null;

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var letterText = document.getElementById("letter-text");


//This function is run whenever the user presses a key.
document.onkeyup = function(event) {
  
    //Determines which key was pressed.
    var userGuess = event.key;

    //Randomly chooses a choice from the options array. This is the computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
    //What happens if user wins
    if (userGuess === computerGuess) {
        wins++;
        guessesLeft = 9;
        letter = [event.key]
    }
//User won so game has to restart
    else if (userGuess !== computerGuess) {
            guessesLeft--;
    }
//User runs out of guesses, resulting in loss
    else if (guessesLeft == 0) {
        losses++;
        letter = []
        guessesLeft = 9;
    }
//Does not double log the same letter in single
    else if (letter.indexOf(userGuess) >= 0) {

    }else {
        letter.push(userGuess);
        document.getElementById('userGuess');
        console.log(letter);
    }

   winsText.textContent = "Wins: " + wins;
   lossesText.textContent = "Losses: " + losses;
   guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
   letterText.textContent = "Already Guessed: " + event.key;


};