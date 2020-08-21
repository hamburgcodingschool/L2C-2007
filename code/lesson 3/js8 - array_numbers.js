// WANT TO KNOW
// THE SUM OF ALL THE NUMBERS
// AVERAGE OF ALL THE NUMBERS
// THE HIGHEST NUMBER
// THE LOWEST NUMBER

let numbers = [12, 6, 90, 5, 71, 42, 13];

let total = 0;

for (let i = 0; i < numbers.length; i++) {
    // console.log(numbers[i]);
    total += numbers[i];
}

let avg = total / numbers.length;

console.log('The sum is ' + total);
console.log('The average is ' + avg.toFixed(2));
