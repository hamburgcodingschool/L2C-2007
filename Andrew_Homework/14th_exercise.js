// List a table that multiplies all the numbers from 1 to 10.
let multiplicationTable = '\n';

function multiply(number) {
    for (i = 1; i <= 10; i++) {
        let formatter = i * number; // Variable for adding spaces before numbers to improve readability
        // Numbers below 10 will have 2 spaces before iteration, below 100 only 1 space
        if (formatter < 10) {
            multiplicationTable += ' ';
        }

        if (formatter < 100) {
            multiplicationTable += ' ';
        }
        // Add current number from formatter to table
        multiplicationTable += formatter + ' ';

        if (i == 10) {
            multiplicationTable += '\n'; // Once iteration is ended, add space for next line
        }
    }
    return multiplicationTable; // Returns mulitplication table for logging later
}

// Function for passing through the size of table to multiplication table function
function table(rows) {
    for (j = 1; j <= rows; j++) {
        multiply(j);
    }
    return multiplicationTable;
}

let sizeOfTable = 10; // Variable for number of rows multiplications table should have
console.log(table(sizeOfTable)); // Use size variable to call and log table
