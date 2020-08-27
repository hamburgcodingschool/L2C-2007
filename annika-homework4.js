let readlineSync = require('readline-sync');

// EXERCISE 12

console.log("Welcome to this incredible custom asterisk triangle printer!");

let t = 5 // later ask for input: readlineSync.question("How many asterisks should the base of your triangle consist of?");
let r = 3 // later ask for input: readlineSync.question("How many times would you like to have the asterisk triangle repeated?");

function triangle (t) {
    let starLine = "";
    while (starLine.length < t) {
     starLine += "*";
     if (starLine.length == t) {
         break;
     } else {
         console.log(starLine);
     }
    }
    return starLine;
}

function repeattriangle (r) {
    for (let i = 1; i < r; i++) {
        console.log(triangle(t));
    }
    return triangle(t);
}

console.log(repeattriangle(r));