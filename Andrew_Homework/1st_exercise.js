let readlineSync = require('readline-sync');
 
// Ask for user response.
let name = readlineSync.question('May I have your name? ');
console.log('Hello ' + name + ', welcome to the Learn to Code course!'); //Prints user response to console
