let readlineSync = require('readline-sync');

let amountDollar = readlineSync.questionFloat('Enter the amount you would like to conver to Euros: '); //Sets input of user as variabe for dollar
let exchangeEuro = 0.844; //Sets exchange rate for Euro for conversion
let conversion = amountDollar * exchangeEuro;

console.log(amountDollar + ' USD is currently worth ' + conversion.toFixed(2) + ' EUR'); //Prints original input plus Euro to two decimal places
