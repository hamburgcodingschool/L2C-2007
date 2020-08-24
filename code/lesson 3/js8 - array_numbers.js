// WANT TO KNOW
// THE SUM OF ALL THE NUMBERS
// AVERAGE OF ALL THE NUMBERS
// THE HIGHEST NUMBER
// THE LOWEST NUMBER

let numbers = [12, 6, 90, 5, 71, 42, 13];

let total = 0;
// let highest = -Infinity;
// let lowest = Infinity;
let highest = numbers[0];
let lowest = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    // console.log(numbers[i]);
    total += numbers[i];

    if (numbers[i] > highest) {
        highest = numbers[i];
    }

    if (numbers[i] < lowest) {
        lowest = numbers[i];
    }
}

let avg = total / numbers.length;

console.log('The sum is ' + total);
console.log('The average is ' + avg.toFixed(2));
console.log('The highest is ' + highest);
console.log('The lowest is ' + lowest);
