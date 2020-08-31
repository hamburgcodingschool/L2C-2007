// Write a guessing game where the user has to guess a secret number between 1 and 100 generated randomly by the program. After every guess the program tells the user whether their number was too large or too small.
// After 6 tries the game is over and the user loses.
let readlineSync = require('readline-sync');

function random(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

let number = random(1, 100);
let correctGuess = false;

for (let i = 6; i > 0; i--) {
    let guess = readlineSync.questionInt('Guess the number: ');

    if (guess < number) {
        console.log('Too low, try again!');
    } else if (guess > number) {
        console.log('Too high, try again!');
    } else {
        correctGuess = true;
        break;
    }
}

if (correctGuess) {
    console.log('Great job! You won against a computer. Don\'t you feel special...');
} else {
    console.log('Pathetic... Can\'t even pick numbers right, loser!');
}
