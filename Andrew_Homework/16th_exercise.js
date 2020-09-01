// Perfect numbers

// Write a program that calculates which integers below 1000 are perfect numbers. A perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself.

//     Hint:
//     The first perfect number is 6. Its proper divisors are 1, 2 and 3 1 + 2 + 3 = 6.
//     The next perfect number is 28: 1 + 2 + 4 + 7 + 14 = 28.
//     8 is not a perfect number because it is evenly divisible by 1, 2 and 4 but 1 + 2 + 4 = 7.


// OPTION I
let perfectNum = ''; // variable for adding perfect numbers into
let perfectNumCheckUpTo = 1000 // To what number perfect numbers will be checked

for (let i = 6; i < 1000; i++) {
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