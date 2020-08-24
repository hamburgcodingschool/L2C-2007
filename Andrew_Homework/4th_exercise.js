let readlineSync = require('readline-sync');

let userInput = readlineSync.questionInt('Enter a number: '); 
let text = ''; 
let sum = 0;

for (let i = 1; i <= userInput; i++) {
    sum += i; // Add each iteration to the sum

    if (i < userInput) {
        text += i + ' + '; // Add each iteration to sum and text including "+" when less than input
    } else {
        text += i + ' = ' + sum; // Add final iteration to sum + text and log to console
        console.log(text);
    }
}
