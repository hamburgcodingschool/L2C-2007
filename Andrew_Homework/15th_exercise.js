// Write a guessing game where the user has to guess a secret number between 1 and 100 generated randomly by the program. After every guess the program tells the user whether their number was too large or too small.
// After 6 tries the game is over and the user loses.
let readlineSync = require('readline-sync');

function random(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

let number = random(1, 100);
let correctGuess = false;

for (let i = 6; i > 0; i--) {
    let guess = readlineSync.questionInt('Guess the number between 1 and 100 (' + i + ' attempt(s) remaining):\n');

    if (guess < number && i > 1) {
        console.log('Too low, try again!');
    } else if (guess > number && i > 1) {
        console.log('Too high, try again!');
    }

    if (guess == number) {
        correctGuess = true;
        break;
    }
}

if (correctGuess) {
    console.log('\nGreat job! You won against a computer. Don\'t you feel special...\n');
} else {
    console.log('\nPathetic... Can\'t even pick numbers right, loser!\n');
}
