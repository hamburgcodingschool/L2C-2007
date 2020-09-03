// EXERCISE: Create a program that checks if a given number is in an array and logs the fitting boolean to the console
let readlineSync = require('readline-sync');
let numbers = [12, 41, 55, 12, 1, 2, 6, 5, 100, 20, 40];

//SUM OF ALL NUMBERS
let n = readlineSync.questionInt('Enter a number to check if it is present: ')

let result = false; // Sets assumption to false

for (let i = 0; i < numbers.length; i++) {   
    if (numbers[i] == n) {
        result = true; // If number is found during an iteration, changes result to true
    }
}

if (numbers.length == 0) {
    console.log('The array is empty, no numbers found.');
} else {
    console.log(result); // Logs the result to the console
}
