let readlineSync = require('readline-sync');

let a = readlineSync.question('What\'s the first number?');
let b = readlineSync.question('What\'s the second number?');

// a = parseInt(a);
// b = parseInt(b);

// a = a * 1;
// b = b * 1;

let sum = a + b;
let sub = a - b;
let mult = a * b;
let divi = a / b;
let remd = a % b;

console.log(a + ' + ' + b + ' = ' + sum);
console.log(a + ' - ' + b + ' = ' + sub);
console.log(a + ' x ' + b + ' = ' + mult);
console.log(a + ' / ' + b + ' = ' + divi);
console.log(a + ' mod ' + b + ' = ' + remd);