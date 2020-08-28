// create a function that takes 2 paramaters an `array of numbers` and a `number`
// return a boolean that tells you if the number exists in the array

function itExists(needle, haystack) {

    for (let i = 0; i < haystack.length; i++) {
        if (needle == haystack[i]) {
            return true;
        }
    }
    return false;
}

let number = 15;
let someNumbers = [2, 3, 5, 15, 15, 4];

console.log(itExists(number, someNumbers));

// for the lazy coders...
// someNumbers.includes(number);



// CREATE AN ARRAY WITH 6 UNIQUE RANDOM NUMBERS BETWEEN [1..49]
