// CREATE A FUNCTION THAT RECEIVES A NUMBER AS PARAMETER
// AND RETURNS A BOOLEAN THAT TELLS YOU WETHER THE NUMBER IS PRIME OR NOT

// print all the prime numbers between 1 and 100
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

for (let i = 1; i <= 100; i++) {
    if (prime(i)) {
        console.log(i);
    }
}

// HOMEWORK:
// NOW PRINT THE FIRST 100 PRIME NUMBERS!!!!!








