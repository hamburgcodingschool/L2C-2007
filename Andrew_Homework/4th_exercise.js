let readlineSync = require('readline-sync');

let userInput = readlineSync.questionInt('Enter a number: '); 
let text = ''; 
let sum = 0;

for (let i = 1; i <= userInput; i++) {
    sum += i;

    if (i < userInput) {
        text += i + ' + ';
    } else {
        text += i + ' = ' + sum;
        console.log(text);
    }
}