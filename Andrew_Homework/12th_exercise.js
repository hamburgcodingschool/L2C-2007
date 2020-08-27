// Write a programa that asks the user for a size `s` and then outputs a triangle with the height and width of `s`

let readlineSync = require('readline-sync');
 
// Ask user for size and numer of triangles
let size = readlineSync.questionInt('Enter the desired size (greater than 1) of the triangle: ');
let amount = readlineSync.questionInt('Enter the number of triangles: ');
let triangleRow = ''; // Variable for logging triangle rows

// Function for logging each triangle
function triangle(size) {
    for (let i = 0; i < size; i++) {
        triangleRow += '*'; // Add current iteration of row to variable and log to console
        console.log(triangleRow);
    }
    return triangleRow = ''; // Resets variable to empty string for further triangles to be printed
}

function print(amount) { // Function for passing through user amount through the triangle function
    for (let i= 0; i < amount; i++) {
        triangle(size); // For each iteration of "amount", calls triangle function for logging
    }
}

// If size and amount are too low, give error, otherwise call the print function
if (size < 2 || amount < 1) {
    console.log('Size must be greater than 1 and amount must be at least 1!')
} else {
    print(amount);
}
