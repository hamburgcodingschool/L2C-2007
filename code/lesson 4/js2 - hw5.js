let readlineSync = require('readline-sync');

let number = 17; // ask for number later

let sum = 0;
let output = '';

for (let i = 1; i <= number; i++) {
    
    if (i % 3 != 0 && i % 5 != 0) {
        continue;
    }

    if (i > 3) {
        output += ' + ';
    }
    output += i;

    // console.log(sum);
    sum += i; // sum = sum + i;

}

console.log(output + ' = ' + sum);