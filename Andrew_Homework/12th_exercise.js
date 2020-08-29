// Write a programa that asks the user for a size `s` and then outputs a triangle with the height and width of `s`
let readlineSync = require('readline-sync');
 
// Ask user for size and numer of triangles
let size = readlineSync.questionInt('Enter the desired size (greater than 1) of the triangle: ');
let amount = readlineSync.questionInt('Enter the number of triangles: ');
let triangleRow = ''; // Variable for logging triangle rows

// Function for creating triangle
function triangle(size) {
    for (let i = 1; i <= size; i++) {
        triangleRow += '\n'; // Add space before each new row 
        triangleRow += '*'.repeat(i); // Repeat star by number of current iteration, important for use of numOfTriangles
    }
    return triangleRow; 
}

function numOfTriangles(amount) { 
    for (let i= 1; i < amount; i++) {
        triangle(size); // For each iteration of "amount", calls triangle function
    }
    return triangle(size); // Returns the triangle function after the for loop
}

// If size and amount are too low, give error, otherwise log the called numOfTriangles function
if (size < 2 || amount < 1) {
    console.log('Size of triangle must be greater than 1 and number of triangles must be at least 1!')
} else {
    console.log(numOfTriangles(amount));
}
