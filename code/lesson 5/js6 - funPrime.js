// CREATE A FUNCTION THAT RECEIVES A NUMBER AS PARAMETER
// AND RETURNS A BOOLEAN THAT TELLS YOU WETHER THE NUMBER IS PRIME OR NOT

function prime(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}

// print all the prime numbers between 1 and 100
for (let i = 1; i <= 100; i++) {
    if (prime(i)) {
        console.log(i);
    }
}


// HOMEWORK:
// NOW PRINT THE FIRST 100 PRIME NUMBERS!!!!!

let counter = 0;
let number = 1;

while (counter < 100) {
    if (prime(number)) {
        counter ++;
        console.log(counter + ": " + number);
    }
    number ++;
}
