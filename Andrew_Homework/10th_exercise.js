let readlineSync = require('readline-sync');
 
// Ask user for name.
let name = readlineSync.question('Enter your name and I will spell it backwards for you: ');
let nameBackwards = '';

for (let i = name.length - 1; i >= 0; i--) {
    nameBackwards += name[i];
}

console.log(nameBackwards);