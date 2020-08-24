let readlineSync = require('readline-sync');

let number = 5; // ask for number later

let sum = 0;
let output = '';

for (let i = 1; i <= number; i++) {

    if (i > 1) {
        output += ' + ';
    }
    output += i;

    // console.log(sum);
    sum += i; // sum = sum + i;
}

console.log(output + ' = ' + sum);