// *********
// * Hello *
// * World *
// * in    *
// * a     *
// * Box   *
// *********

function longestWordLengthInArray(array) {
    let maxLength = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > maxLength) {
            maxLength = array[i].length;
        }
    }
    return maxLength;
}

let sentence = "Hello World in a Box"; // ask the user later
let words = sentence.split(' ');
let longest = longestWordLengthInArray(words);

let topBottomLine = "*".repeat(longest + 4);

let middleContent = "";
for (let i = 0; i < words.length; i++) {
    if (i > 0) {
        middleContent += "\n"
    }
    middleContent += "* ";
    middleContent += words[i];
    middleContent += " ".repeat(longest - words[i].length);
    middleContent += " *";
}

let fullBox = topBottomLine + "\n" + middleContent + "\n" + topBottomLine;

console.log(fullBox);
