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

let matrix1 = generateNumberMatrix(4, 1, 9);

for (let i = 0; i < matrix1.length; i++) {
    let tempString = '';
    for (let j = 0; j < matrix1[i].length; j++) {
        if (j > 0) {
            tempString += ' + ';
        }
        tempString += matrix1[i][j];
    }
    console.log(tempString);
}

