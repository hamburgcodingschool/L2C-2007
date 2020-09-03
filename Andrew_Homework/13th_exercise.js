// Write a programa that asks the user for a height h and then output a Xmas Tree with an height of h.
let ReadlineSync = require('readline-sync');

let lines = ReadlineSync.questionInt('Enter the number of rows, between 5 and 20, you would like the christmas tree to have: ');
let treeLeaves = '';
let treeTrunk = '';

// Tree function
function christmasTree(lines) {

    for (let i = 1; i <= lines; i++) {

        if (i > 1) {
            treeLeaves += '\n'; // Starting after the first row, add line break for next row
        }
        treeLeaves += ' '.repeat(lines - i); // Add spaces equal to length of user input minus current iteration
        treeLeaves += '☘'.repeat(i * 2 - 1); // In order for the leaves to fit, multiply i by two and subtract one

        if (i == 1) { // Tree trunk should be in the same position as the first leaf, so only add on this iteration
            treeTrunk += '\n';
            treeTrunk += ' '.repeat(lines - i);
            treeTrunk += '|';
        }

    }
    return treeLeaves += treeTrunk; // Return treeLeaves concatenated with treeTrunk
}

if (lines < 5 || lines > 20) { // If user input is too small or large, give error, other log tree function
    console.log('Ho, ho, ho-ld on there! Only a number between 5 and 20 is possible.')
} else {
    console.log(christmasTree(lines));
}
