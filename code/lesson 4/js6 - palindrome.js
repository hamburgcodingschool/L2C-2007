
let name = 'tacocat'; // ask the use later
let isPalindrome = true;

for (let i = 0; i < name.length * 0.5; i++) {
    let mirrorIndex = name.length - 1 - i;
    if (name[i] != name[mirrorIndex]) {
        isPalindrome = false;
        break;
    }
}

if (isPalindrome) {
    console.log('DUUUUDE!!!! That is a nice palindrome!');
} else {
    console.log('Bro you need to try again...');
}

// let name = 'hahahahanoway'; // ask the use later
// let reverseName = '';

// for (let i = name.length - 1; i >= 0; i--) {
//     reverseName += name[i];
// }

// if (name == reverseName) {
//     console.log('it\'s a palindrome')
// } else {
//     console.log('it is not')
// }