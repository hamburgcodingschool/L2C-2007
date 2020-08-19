// print all the EVEN numbers between 1 and 1000

// SOLUTION 1

// let counter = 0;
// while (counter < 1000) {
//     counter += 2;
//     // counter = counter + 2;
//     console.log(counter);
// }

// SOLUTION 2

// let counter = 0;
// while (counter < 500) {
//     counter ++;
//     console.log(counter * 2);
// }

// SOLUTION 3

let counter = 0;
while (counter < 1000) {
    counter ++;
    if (counter % 2 == 0) {
        console.log(counter);
    }
}