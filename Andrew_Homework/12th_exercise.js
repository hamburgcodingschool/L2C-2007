// # Homework
// - [Exercise 12](#exercise-12)

// ## Exercise 12
// ### Triangles
// Write a programa that asks the user for a size `s` and then outputs a triangle with the height and width of `s`

// > **Example:**<br />
// > User inputs `4`<br />
// > Output:
// ```
// *
// **
// ***
// ****
// ```
// > **Bonus goal:**<br />
// > Also ask the user for how many triangles to print.<br />
// > User inputs size `3`<br />
// > User inputs times`2`<br />
// > Output:
// ```
// *
// **
// ***
// *
// **
// ***
// ```

let readlineSync = require('readline-sync');
 
// Ask user for size of triangle
let size = readlineSync.questionInt('Enter the desired size (greater than 1) of the triangle: ');
let amount = readlineSync.questionInt('Enter the number of triangles: ');
let triangleRow = '';

function triangle(size) {
    for (let i = 0; i < size; i++) {
        triangleRow += '*';
        console.log(triangleRow);
    }
    return triangleRow = '';
}

function print(amount) {
    for (let i= 0; i < amount; i++) {
        triangle(size);
    }
}

if (size < 2 || amount < 1) {
    console.log('Size must be greater than 1 and amount must be at least 1!')
} else {
    print(amount);
}
