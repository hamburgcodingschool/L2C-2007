// ASK THE USER FOR A NUMBER
// LET THE USER KNOW IF THE NUMBER THEY WROTE IS 'ODD' OR 'EVEN'

let readlineSync = require('readline-sync');

let number = readlineSync.questionInt("What's the number?");

if (number % 2 == 0) {
    console.log('EVEN');
} else {
    console.log('ODD');
}