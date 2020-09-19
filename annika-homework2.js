let readlineSync = require('readline-sync');

//EXERCISE 5: modify exc. 4 (see homework 1) so that only multiples of 3 and 5 are added to sum

/*

console.log("------------------EXERCISE 5------------------");

let n = readlineSync.question("Please choose a number between 1 and 10.");

let sum = 0;

for (let i = 0; i < n; i++) {
    if (i % 5 == 0) {
        sum += i;
    } else if (i % 3 == 0) {
    sum += i;
    }
}

console.log("Thanks! The sum of all integers that are multiples of 3 or 5 ranging between 1 and the number you selected is " + sum);

*/

//EXERCISE 6: modify exc. 4 (see homework 1) so that the program asks the user for a number n
// and gives them the possibility to choose between computing the sum or computing the product of 1 to n.

/*

console.log("------------------EXERCISE 6------------------");

let n = readlineSync.question("Please choose a number between 1 and 10.")
let choice = ["Sum", "Product"];
let index = readlineSync.keyInSelect(choice, "Would you like to compute the sum, or the product of all integers from 1 to the number you chose?");

let total = 0;

if (choice[index] == "Sum") {
    for (let i = 0; i <= n; i++) {
        total += i;
        }
    console.log("The sum of all integers from 1 to the one you chose equals " + total)
} else if (choice[index] == "Product") {
    total = 1;
    for (let i = 1; i <= n; i++) {
        total = total * i;
        }
    console.log("The product of all integers from 1 to the one you chose equals " + total)
} else {
    console.log("You cancelled the operation, or did not make a choice.")
}

*/

//EXERCISE 7: Write a program that checks wether a number exists inside an array of numbers.

/*

console.log("------------------EXERCISE 7------------------");

let n = readlineSync.question("Please choose a number between 1 and 10.")

let numbers = [2, 19, 35, 17, 90, 102];
let found = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == n) {
    found = true;
    }
}

if (found) {
    console.log("Your chosen number " + n + " is part of the 'numbers' array.");
} else {
    console.log("Your chosen number " + n + " is NOT part of the 'numbers' array.");
}

*/

//EXERCISE 8: Write a program that prints 1 per line only the names on odd positions in an array of names.

/*

console.log("------------------EXERCISE 8------------------");

let names = ["Josie", "Cathrin", "Bob", "Max", "Hannah", "Alex"];

for (let i = 0; i < names.length; i++) {
    if (i % 2 > 0) {
        console.log(names[i]);
    }
}

*/

//EXERCISE 9: Write a program that prints the name with more characters in an array of names.

/*

console.log("------------------EXERCISE 9------------------");

let names = ["Flauschi", "Brötchen", "Pirat", "Supercalifragilistigexpialigetisch", "Holzköpfchen", "Wutplüsch"]
let longest = 0;
let longindex = 0;

for (let i = 0; i < names.length; i++) {
    if (names[i].length > longest) {
        longest = names[i].length;
        longindex = i;
    }
}
console.log("The name consisting of the most characters is " + names[longindex]);

*/