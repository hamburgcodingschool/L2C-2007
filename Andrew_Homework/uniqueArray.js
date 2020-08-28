//Create an array with 6 unique numbers between 1 and 49
function random(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

let array = []; // Set empty array
let counter = 0;

while (counter < 6) { // Set counter to how many numbers should be included in array
    let x = random(1, 49); // Calculate a random number between 1 and 49 (range should always be equal or greater than desired array!)

    if (array.includes(x)) { // If x is already in the array, continue 
        continue;
    } else {
        array[counter] = x; // Otherwise set the current array iteration using counter to x
        counter++; // Increase counter by 1 for the next iteration until array size reached
    }

}

console.log(array);
