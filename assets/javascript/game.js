//All possible computer choices
var computerChoices = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

//Starting point

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var letter = [];

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var letterText = document.getElementById("letter-text");

 //Randomly chooses a choice from the options array. This is the computer's guess.
 var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


//This function is run whenever the user presses a key.
document.onkeyup = function(event) {
  
    //Determines which key was pressed.
    var userGuess = event.key;

     //Randomly chooses a choice from the options array. This is the computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    //Only keeps score when these keys are chosen
    var options = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    
    //What happens when a possible letter is chosen
    if (options.indexOf(userGuess) > -1) {

        //If user wins
        if (userGuess === computerGuess) {
            wins++;
            guessesLeft = 9;
            letter = [];
        }

        //If user does not guess correct letter
        if (userGuess !== computerGuess) {
            guessesLeft --;
            letter.push(userGuess);

        }

        //If user runs out of guesses
         if (guessesLeft === 0) {
             guessesLeft = 9;
             losses ++;
             letter = [];
         }
    }
   


    //Displaying results
   winsText.textContent = "Wins: " + wins;
   lossesText.textContent = "Losses: " + losses;
   guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
   letterText.textContent = "Already Guessed: " + (letter.join(", "));


};