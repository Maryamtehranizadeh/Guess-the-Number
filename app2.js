//pc generates a number 0-100
//pc asks the user to guess it via prompt
// user validates the number
//pc compares the number and gives hint
// pc leads until 10 trial
//pc gives the result

const generatedNumber = Math.ceil(Math.random() * 100);
console.log(generatedNumber);
let userGuess;
let counter = 0;

const takeUserGuess = () => {
  userGuess = Number(prompt("Please guess the number from 1-100"));
  console.log(userGuess);
};

const guessValidation = () => {
  if (userGuess <= 100 && userGuess > 0) {
    console.log("Valid guess!");
  } else {
    console.log("Sorry! Invalid guess!");
    return;
  }
};

const compare = () => {
  counter++;
  if (counter > 6) {
    console.log("You have tried enough! Game Over!");
    return;
  } else if (generatedNumber === userGuess) {
    console.log("Correct! You won!");
  } else if (generatedNumber > userGuess) {
    console.log("More!");
    takeUserGuess();
    guessValidation();
    compare();
  } else if (generatedNumber < userGuess) {
    console.log("Less!");
    takeUserGuess();
    guessValidation();
    compare();
  }
};

takeUserGuess();
guessValidation();
compare();
