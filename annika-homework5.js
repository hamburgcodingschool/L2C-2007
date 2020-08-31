let readlineSync = require('readline-sync');

//---------------------------------------------------------
//EXERCISE 13: Write a program that asks the user for a height h and then output a tree with the height of h.
//---------------------------------------------------------

// let h = readlineSync.question("Type in the desired line height of your tree. Keep in mind the stem is +1 extra line :) ");

// let starLine = "";
// function starLineFunct(h) {
//     while (starLine.length < h) {
//     starLine += "*";
//     }
//     return starLine;
//   }

// let space = " ";
// for (let i = 1; i <= 2 * h; i++) {
//     if (i % 2 != 0) {
//        let x = (2 * h - 1 - i)* 0.5;
//        console.log(space.repeat(x) + starLineFunct(i));
//     }
// }

// console.log(space.repeat(h - 1) + "I");

//-------------------------------------------------------
//EXERCISE 14: List a table that multiplies all the numbers from 1 to 10.
// Format your output to something like this:

// 1   2   3   4   5   6   7   8   9  10
// 2   4   6   8  10  12  14  16  18  20
// 3   6   9  12  15  18  21  24  27  30
// 4   8  12  16  20  24  28  32  36  40
// 5  10  15  20  25  30  35  40  45  50
// 6  12  18  24  30  36  42  48  54  60
// 7  14  21  28  35  42  49  56  63  70
// 8  16  24  32  40  48  56  64  72  80
// 9  18  27  36  45  54  63  72  81  90
// 10  20  30  40  50  60  70  80  90 100
//---------------------------------------------------------

//14.3 - THIRD ATTEMPT: function that multipl. n by all numbers from 1 to m and prints resulting values as a string
//it also adds spaces before the number if that number has less than 3 characters ("digits") to create right alignment

// function NumbersMultipl (n, m) {
//     let string = "";
//     for (let i = 1; i < m; i++) {
//       let char = (n * i).toString();
//       let space = " ";
//       if (i > 1) {
//             string += space.repeat(4 - char.length) + char;
//       } else {
//         string += space.repeat(2 - char.length) + char;
//       }        
//     }
//     return string;
//   }
  
//   for (let i = 1; i <= 10; i++) {
//     console.log(NumbersMultipl(i, 11));
//   }

//14.2 - SECOND ATTEMPT: creating array, multiplying it by each of its values (or, since it works in this case, by current counter value)

// //starting with a string bc array would be changed during the first loop
// let table = "1 2 3 4 5 6 7 8 9 10"

// //function takes any array and multiplies each of its values by another parameter you give it
// function multiplyArray (array, m) {
//     for (let i = 0; i < array.length; i++) {
//         array[i] *= m;
//     }
//     return array;
// }

// // splitting string to array, multiplying array, then joining array items to string again
// for (let i = 1; i <= 10; i++) {
//     let tableArray = table.split(" ");
//     multiplyArray(tableArray, i); // can replace i with tableArray[i-1] if array numbers you want to multiply by cannot be represented by counter 
//     console.log(tableArray.join(" "));
//     // more complicated version:
//     // console.log(tableArray[0] + " " + tableArray[1] + " " + tableArray[2] + " " + tableArray[3] + " " + tableArray[4] + " " 
//     // + tableArray[5] + " " + tableArray[6] + " " + tableArray[7] + " " + tableArray[8] + " " + tableArray[9]);
// }

//14.1 - FIRST ATTEMMPT: two counters > while loops, DOES NOT WORK

// let table = "1 2 3 4 5 6 7 8 9 10"

// let c = 0;
// let i = 0;
// while (c < 10) {
//     while (i < 10) {
//         tableArray = table.split(" ");
//         tableArray[i] *= tableArray[c];
//         console.log(tableArray.join(" "));
//         i++;
//     }
// c++;
// }

//---------------------------------------------------------
//EXERCISE 15: Write a game where user has to guess a random number between 1 and 100. After 6 attempts, the game is over
//---------------------------------------------------------

// function random(min, max) {
//     return Math.floor(Math.random() * (max + 1 - min)) + min;
// }

// console.log("Welcome to the number guessing game! Can you guess what number the algorithm will come up with? You've got 6 tries.")

// for (let i = 0; i < 6; i++) {
//   let a = 0;
//   if (i == 0) {
//     a = readlineSync.question("Please choose a number between 1 and 100. ");
//   } else {
//     a = readlineSync.question((6 - i) + " chance(s) left! Try again. ");
//     }
    
//   while (isNaN(a) || a > 100 || a < 1 ) {
//     if (isNaN(a)) {
//       a = readlineSync.question("That value is not a number! Now make a better choice for try #" + (i+1) + " ");
//     } else {
//       a = readlineSync.question("Between 1 and 100! Now make a better choice for try #" + (i+1) + " ");
//       }
//   }
    
//   let x = random(1, 100);
//   if (x == a) {
//     console.log("You won!");
//     break;
//   } else if (i == 5) {
//     console.log("GAME OVER. You lose!");
//     }
// }

