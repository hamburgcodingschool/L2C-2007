// CREATE A PROGRAM THAT CALCULATES THE FIRST 20 NUMBERS
// OF THE FIBONACCI SEQUENCE AND STORES THEM IN AN ARRAY

// let a = 1;
// let b = 1;
// let fibo = [a, b];

// console.log('0: ' + a);
// console.log('1: ' + b);

// for (let i = 2; i < 20; i++) {
    
//     let next = a + b;
//     console.log(i + ': ' + next);
    
//     a = b;
//     b = next;

//     fibo[i] = next;
// }

let fibo = [1, 1];
for (let i = 2; i < 20; i++) {
    fibo[i] = fibo[i-1] + fibo[i-2];
}