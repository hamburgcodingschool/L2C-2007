// for (let i = 0; i < 100; i++) {
//     let x = Math.random();
//     console.log(x);
// }

function randomBetween0And9() {
    let x = Math.random();

    console.log(x);
    
    x = x * 10;
    
    x = Math.floor(x);
    
    // console.log(x);
    
    return x;
}

// function random(min, max) {

//     let x = Math.random();

//     x = x * (max + 1 - min);

//     x = Math.floor(x);

//     x = x + min;

//     return x;
// }


function random(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

for (let i = 0; i < 100; i++) {
    let someNumber = random(2, 4);
    console.log(someNumber);
}

// CREATE AN ARRAY WITH 100 RANDOM VALUES BETWEEN 0 AND 9

let randomNumbers = [];
for (let i = 0; i < 100; i++) {
    randomNumbers[i] = random(0, 9);
}

console.log(randomNumbers)


// GENERATE 100_000 RANDOM NUMBERS BETWEEN 0 AND 9
// COUNT HOW MANY TIMES 5 SHOWS UP!

// let fivesCounter = 0;
// for (let i = 0; i < 100_000; i++) {
//     let x = random(0, 9);
//     if (x == 5) {
//         fivesCounter ++;
//     }
// }
// console.log("5 showed up " + fivesCounter + " times");


let counter = [0, 0, 0, 0, 0, 0, 0, 0, 0 , 0];

for (let i = 0; i < 100_000; i++) {
    let x = random(0, 9);
    counter[x] ++;
  
}
console.log(counter);