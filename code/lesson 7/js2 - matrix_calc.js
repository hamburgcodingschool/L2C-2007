// create a function that generates a square matrix of random numbers between 1 and 9
// the function takes 1 parameter 'size' to indicate the number of lines and columns

function random(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

function generateNumberArray (size, min, max) {
    let newArray = [];
    for (let i = 0; i < size; i++) {
        newArray.push(random(min, max));
    }
    
    return newArray;
}

function generateNumberMatrix(size, min, max) {
    let newMatrix = [];
    for (let i = 0; i < size; i++) {
        let newLine = generateNumberArray(size, min, max);
        newMatrix.push(newLine);
    }
    
    return newMatrix;
}

function sumOfRowsInMatrix(matrix) {
    let sumArray = [];
    for (let i = 0; i < matrix.length; i++) {
        let total = 0;
        for (let j = 0; j < matrix[i].length; j++) {
            total += matrix[i][j];
        }
        sumArray.push(total);
    }
    return sumArray;
}

function sumOfColsInMatrix(matrix) {
    let sumArray = [];
    for (let i = 0; i < matrix.length; i++) {
        let total = 0;
        for (let j = 0; j < matrix[i].length; j++) {
            total += matrix[j][i];
        }
        sumArray.push(total);
    }
    return sumArray;
}

let matrix1 = generateNumberMatrix(4, 1, 3);
let matrix1RowSum = sumOfRowsInMatrix(matrix1);
let matrix1ColSum = sumOfColsInMatrix(matrix1);


// PRINT ALL THE LINES OF THE MATRIX AND RESPECTIVE LINE TOTAL
for (let i = 0; i < matrix1.length; i++) {
    let tempString = '';

    for (let j = 0; j < matrix1[i].length; j++) {
        if (j > 0) {
            tempString += ' + ';
        }
        tempString += matrix1[i][j];
    }
    console.log(tempString + ' = ' + matrix1RowSum[i]);
}

// DO A FOR LOOP LATER
console.log('=   =   =   =');

let tempString = '';
for (let i = 0; i < matrix1ColSum.length; i++) {
    tempString += matrix1ColSum[i] + '   ';    
}
console.log(tempString);


// for (let i = 0; i < matrix1.length; i++) {
//     let tempString = '';

//     let total = 0;
//     for (let j = 0; j < matrix1[i].length; j++) {
//         total += matrix1[i][j];
//         if (j > 0) {
//             tempString += ' + ';
//         }
//         tempString += matrix1[i][j];
//     }
//     console.log(tempString + ' = ' + total);
// }

// console.log('=   =   =   =');

// let tempString = '';
// for (let i = 0; i < matrix1.length; i++) {
//     let total = 0;
//     for (let j = 0; j < matrix1[i].length; j++) {
//         total += matrix1[j][i];
//     }
//     tempString += total + '   ';
// }

// console.log(tempString);