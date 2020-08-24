// DASH IT UP
// 'banana'
// 'b-a-n-a-n-a'

// let name = 'banana'; // ask the use later
// let dashedName = '';

// for (let i = 0; i < name.length; i++) {
//     if (i > 0) {
//         dashedName += '-';    
//     }
//     dashedName += name[i];   
// }

// console.log(dashedName);

let name = 'banana'; // ask the use later
let dashedName = name[0];

for (let i = 1; i < name.length; i++) {
    dashedName += '-';
    dashedName += name[i];   
}

console.log(dashedName);