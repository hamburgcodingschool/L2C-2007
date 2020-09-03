// Write a program that calculates which integers below 1000 are perfect numbers.

// OPTION I with (nested) loops
let perfectNum = ''; // variable for adding perfect numbers

for (let i = 6; i < 10000; i++) {
    let divisor = 0; // Divisor set in loop to reset each time i increases

    for (let j = 1; j < i; j++) { // Secondary loop to continuously check each divisors up to i

        if (i % j == 0) {
            divisor += j; // Anytime i / j leaves no remainders, add the current iteration of j to the divisor
        }
        
        if (j == i - 1 && divisor == i) { // Once j is 1 less than i, if also equal to divisor it is a perfect number
            perfectNum += i;
            perfectNum += ' ';
        }
    }
}

console.log(perfectNum); // Log perfect numbers after for loop

// OPTION II as function (with nested loops)
function perfectNumber1(upTo) {
    let perfectNum1 = '';
    for (let i = 6; i < upTo; i++) {
        let divisor = 0; 

        for (let j = 1; j < i; j++) { 

            if (i % j == 0) {
                divisor += j; 
            }
            
            if (j == i - 1 && divisor == i) { 
                perfectNum1 += i;
                perfectNum1 += ' ';
            }
        }
    }
    return perfectNum1;
}

console.log(perfectNumber1(10000));

//OPTION III with 2 separate functions
function perfectNumber(upTo) {
    for (let i = 6; i < upTo; i++) {
        checkIfPerfectNumber(i); // Sets iteration of i as parameter to be passed through checkPerfectNumbers function
    }
    return perfectNumForFunction; // Returns perfect numbers after function check
}

function checkIfPerfectNumber(number) { // Function to check if a single number is perfect
    let divisor = 0;

    for (let i = 1; i < number; i++) { // User parameter number for the loop

        if (number % i == 0) { // If parameter divided by current iteration has no remainders, add this value to the divisor
            divisor += i;
        }
        
        if (i == number - 1 && divisor == number) { // If the number is perfect once reaching last iteration, return number with space
            return perfectNumForFunction += number + ' ';
        }
    }
    return false; // If the number is not perfect, return false
}

let perfectNumForFunction = '';

console.log(perfectNumber(10000));
// console.log(checkPerfectNumbers(9));
