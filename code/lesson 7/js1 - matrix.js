// let someOtherArray = [1, 2, "Some Text", 4, 5];


// let array1 = [someOtherArray, 2, 3, 4, 5];

// for (let i = 0; i < array1.length; i++) {
//     console.log(array1[i]);
// }

// console.log(array1[0][2][5]);



// let temp = [2, 3, 5, 6, 10];

// let tempString = '';
// for (let i = 0; i < temp.length; i++) {
//     tempString += temp[i];
//     tempString += ' ';
// }
// console.log(tempString);


let matrix = [
    [2, 4, 2, 1],
    [9, 1, 3, 3],
    [2, 1, 3, 5],
    [2, 2, 6, 1]
];

for (let i = 0; i < 4; i++) {
    
    // matrix[i] is another array
    // so we treat it as such and iterate again
    
    let tempString = '';
    for (let j = 0; j < 4; j++) {
        if (j > 0) {
            tempString += ' - ';
        }
        tempString += matrix[i][j];
    }
    console.log(tempString);
}


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

generateNumberArray(4, 1, 9);

