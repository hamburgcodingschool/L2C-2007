let readlineSync = require('readline-sync');

//part 1: Ask user for name and print it in a welcome sentence.

let name = readlineSync.question("Please enter your name:");
console.log("Hello " + name + ", welcome to the Learn to Code Course.");

//part 2: Choose an Ascii art and print to console.

console.log(`%c￼        _______
                     //  ||\\ \\
               _____//___||_\\ \\___
              )  _          _    \\
             |_/ \\________/ \\___|
            ___\\_/________\\_/______`, "font-family:monospace")

//part 3: Write a program that asks the user for an amount in USD. Output that amount converted to EURO.
// Bonus goal: Use a precision of 2 decimal points

let amount = readlineSync.question("How many USD did you spend during your trip to NYC?");
//set current exchange rate
let exrate = 0.8429;
let eur = (Math.round(exrate * amount * 100) / 100).toFixed(2);

console.log("In €, that's " + eur + "EUR. Hope you bought some useful stuff!");

//part 4: Write a program that asks the user for a number n and prints the sum of the numbers 1 to n.

let n = readlineSync.question("Please choose a number between 1 and 10.");

//part 4, version 1: gaussian sum formula
/*
let nsum = (Number(n)*(Number(n)+1))/2;
console.log("Thanks! The sum of all integers from 1 to the one you selected is " + nsum);
*/

//part 4, version 2: while loop
let i = 0;
let sum = 0;
while (i < n) {
    i++;
    sum += i;
}
console.log("Thanks! The sum of all integers from 1 to the one you selected is " + sum);