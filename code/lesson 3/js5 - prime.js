// ASK THE USER FOR A NUMBER
// LET THE USER KNOW IF THE NUMBER THEY WROTE IS 'PRIME' OR NOT

let readlineSync = require('readline-sync');

let number = 7; // readlineSync.questionInt("What's the number?");

// let counterOfMultiples = 0;
// for (let i = 2; i < number; i++) {
//     // console.log(i);
//     // console.log(number % i);
//     // console.log('-----');

//     if (number % i == 0) {
//         counterOfMultiples++;
//     }
// }
// if (counterOfMultiples > 0) {
//     console.log('Your number is not a prime!');
// } else {
//     console.log('BRO! You found a Prime!!!!!');
// }


// let isPrime = true;
// for (let i = 2; i < number; i++) {
//     if (number % i == 0) {
//         isPrime = false;
//     }
// }

// if (isPrime) {
//     console.log('BRO! You found a Prime!!!!!');
// } else {
//     console.log('Your number is not a prime!');
// }

let textResult = 'You have a Prime!';
for (let i = 2; i < number; i++) {
    if (number % i == 0) {
        textResult = 'That is NOT a Prime...';
    }
}

console.log(textResult);