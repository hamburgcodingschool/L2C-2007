


// let counter = 0;

// while (counter < 1000) {
//     counter ++;
    
//     if (counter % 15 == 0) {
//         console.log(counter + "!!!");
//     } else if (counter % 5 == 0) {
//         console.log(counter + "!!");
//     } else if (counter % 3 == 0) {
//         console.log(counter + "!");
//     } else {
//         console.log(counter);
//     }
// }


let counter = 0;

while (counter < 1000) {
    counter ++;

    let suffix = '';

    if (counter % 3 == 0) {
        suffix += '!';
    }

    if (counter % 5 == 0) {
        suffix += '!!';
    }

    console.log(counter + suffix);
}