// EXERCISE: Create a programm that takes a users input and calculates the sum from 1 to n only when that iteration is divisible by 3 or 5
let readlineSync = require('readline-sync');

let userInput = readlineSync.questionInt('Enter a number above 3: ');
let text = '';
let sum = 0;

for (let i = 0; i <= userInput; i++) { 

  if (userInput < 3) {

    // If user input is less than 3, add error to text and exit loop
    text = 'That is not a whole number greater than 3 you dingus!;'
    break;

  } else if (i < 3) {

    // If i is less than 3, continue to next iteration
    continue;

  } else if (i == userInput && userInput == 3) {

    // If input was 3, add tautology to text to be logged to console after loop
    sum += i;
    text += i + ' = ' + sum;

  } else if (i < userInput && i == 3) {

    // Once i reaches 3, if input greater than 3, add first number to text
    sum += i;
    text += i;

  } else if (i < userInput && (i % 3 == 0 || i % 5 == 0)) {

    // If an iteration is divisible by 3 or 5, add information to text with prefixed addition sign
    sum += i;
    text += ' + ' + i;

  } else if (i == userInput && (i % 3 == 0 || i % 5 == 0)) {

    // If input itself is divisible by 3 or 5, add final part of calculation to the text
    sum += i;
    text += ' + ' + i + ' = ' + sum;

  } else if (i == userInput) {

    // If input not divisible by 3 or 5, simply add last part of calculation and sum to text
    text += ' = ' + sum;

  }
}

console.log(text);
