let readlineSync = require('readline-sync');

// EXERCISE 12

console.log("Welcome to this incredible custom asterisk triangle printer!");

let t = 5 // later ask for input: readlineSync.question("How many asterisks should the base of your triangle consist of?");
let r = 3 // later ask for input: readlineSync.question("How many times would you like to have the asterisk triangle repeated?");

//SOLUTION 1: Function containing a loop that, in each run, adds asterisk to string, then prints current string
// This function is then repeated using another function

// function triangle (t) {
//     let starLine = "";
//     while (starLine.length < t) {
//      starLine += "*";
//      if (starLine.length == t) {
//          break;
//      } else {
//          console.log(starLine);
//      }
//     }
//     return starLine;
// }

// function repeatTriangle (r) {
//     for (let i = 1; i < r; i++) {
//         console.log(triangle(t));
//     }
//     return triangle(t);
// }

// console.log(repeatTriangle(r));

// SOLUTION 2: Creating function that prints string consisting of t asterisks
// then using loop counting up to t that repeats line print in each run using length of current counter value
// to repeat triangle, the for loop is wrapped in a while loop that repeats as long as counter < r

function starLineFunct(t) {
    let starLine = "";
    while (starLine.length < t) {
    starLine += "*";
    }
    return starLine;
  }
  
  let repeatCount = 0;
  
  while (repeatCount < r) {
      for (let i = 1; i <= t; i++) {
        console.log(starLineFunct(i));
      }
      repeatCount++;
  }