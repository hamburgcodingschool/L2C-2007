// create a function that takes 2 paramaters an `array of numbers` and a `number`
// return a boolean that tells you if the number exists in the array

function random(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

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


let numberOfSlots = 5;
let rangeMin = 1;
let rangeMax = 4;





// CREATE AN ARRAY WITH 6 UNIQUE RANDOM NUMBERS BETWEEN [1..49]

let newArray = [];
for (let i = 0; i < 6; i++) {
    let randomNumber = random(1, 5);

    while (newArray.includes(randomNumber)) {
        randomNumber = random(1, 5);
        console.log("keep trying")
    }

    newArray.push(randomNumber);
    
}

console.log(newArray);