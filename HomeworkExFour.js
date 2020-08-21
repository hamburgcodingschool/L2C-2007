//the trouble to put the input in the function...

var readlineSync = require('readline-sync');
var array = readlineSync.question("Give me a number between 1 and hundert.");
var array = [100, 0];
var max = Math.max.apply(Math, array); // any number >100
var min = Math.min.apply(Math, array); // 0

function sumSeries (smallest, largest) {
    // The formulate to sum a series of integers is
    // n * (max + min) / 2, where n is the length of the series.
    var n = (largest - smallest + 1);
    var sum = n * (smallest + largest) / 2; 

    return sum;
}

var sum = sumSeries(min, max);
console.log(sum);