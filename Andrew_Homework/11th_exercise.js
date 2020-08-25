// Write a program that asks the user for a sentence and outputs the words in the console, 
// one per line, in a rectangular frame. For example the sentence "Hello World in a frame" gets printed as:

let readlineSync = require('readline-sync');
 
// Ask for sentence.
let sentence = readlineSync.question('Enter the sentence you would like to be framed: ');
let sentenceWords = sentence.split(' ');
let longest = '';

for (let i = 0; i < sentenceWords.length; i++) {
    if (sentenceWords[i].length > longest.length) {
        longest = sentenceWords[i];
    }
}
console.log(longest);

for (let i = 0; i < sentenceWords.length; i++) {
    while (sentenceWords[i].length < longest.length) {
        sentenceWords[i] += ' ';
    }
}

let sentenceFramed = '';
let frameEdge = '*'
for (let i = 0; i < sentenceWords.length; i++) {
    sentenceFramed = '* ' + sentenceWords[i] + ' *';
    console.log(sentenceFramed);

}

// console.log(sentenceWords);

// for (let i = 0; i < sentence.length; i++) {
//     sentenceWord = sentence[i]
//     console.log('* ' + sentenceWord + ' *');
// }
