//EXERCISE 16: Write a program that calculates which integers below 1000 are perfect numbers.

//this function checks if a number is a "perfect number"
function isPerfectNum(x) {
    let sum = 0;
    for (let i = 0; i < x; i++) {
        if (x % i == 0) {
            sum+= i;
        }
    }
    if (sum == x) {
        return true;
    } else {
        return false;
      }
}

//this function uses the above one to iterate all integers from 1 to x to find all the "perfect Numbers"
//and then returns a list of these numbers as a string.
function PerfectNumUntil(x) {
    let PerfectNumList = "";
    for (let i = 1; i < x; i++) {
        if (isPerfectNum(i)) {
            if (PerfectNumList.length == 0) {
                PerfectNumList += i;
            } else {
                PerfectNumList += " - " + i;
            }
        }
    }
    return PerfectNumList;
}

let x = 1000;
console.log("The 'perfect numbers' until " + x + " are:")
console.log(PerfectNumUntil(x));