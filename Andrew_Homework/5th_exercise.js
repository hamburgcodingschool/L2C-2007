// EXERCISE: Create a programm that takes a users input and calculates the sum from 1 to n only when that iteration is divisible by 3 or 5
let readlineSync = require('readline-sync');

let userInput = readlineSync.questionInt('Enter a whole number above 3: ');
let text = '';
let sum = 0;

for (let i = 1; i <= userInput; i++) { 

  if (userInput < 3) {

    // If user input is less than 3, add error to text and exit loop
    text = 'That is not a whole number greater than 3 you dingus!;'
    break;

  } else if (i % 3 == 0 || i % 5 == 0) {

    // For all divisible iterations, add current value to sum
    sum += i;

  }

  if (i == 3) {

    //When iteration reaches 3, add only value to text
    text += i;

  } else if (i <= userInput && (i % 3 == 0 || i % 5 == 0)) {

    // For all further iterations, add plus sign before value of current iteration
    text += ' + ' + i;

  }
  
  if (i == userInput) {

    // Once final sum reached, add final sum to text
    text += ' = ' + sum;

  }

}

console.log(text);
