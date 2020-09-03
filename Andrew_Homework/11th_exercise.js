let readlineSync = require('readline-sync');
 
// Ask user for sentence to be framed.
let sentence = readlineSync.question('Enter the sentence you would like to be framed: ');
let sentenceWords = sentence.split(' ');
let longest = '';

for (let i = 0; i < sentenceWords.length; i++) { // For loop to find the longest word in the split input to be used in later calculations

    if (sentenceWords[i].length > longest.length) {
        longest = sentenceWords[i];

    }

}

for (let i = 0; i < sentenceWords.length; i++) { // For loop to add necessary extra spaces to words less in length than longest

    while (sentenceWords[i].length < longest.length) {

        sentenceWords[i] += ' ';

    }

}

let frameEdge = ''; 

for (let i = -4; i < longest.length; i++) { // For loop to calculate the number of * symbols needed for the top and bottom of frame

    frameEdge += '*'

}

let sentenceFramed = '';

for (let i = -1; i <= sentenceWords.length; i++) { // For loop for logging the framed text

    if (i == -1 || i == sentenceWords.length) { // Immediately log the frameEdge at beginning of loop and again once i reaches end of loop

        console.log(frameEdge);

    } else {

    sentenceFramed = '* ' + sentenceWords[i] + ' *'; // Concactenates and logs framed words to console in-between frameEdges
    console.log(sentenceFramed);

    }

}
