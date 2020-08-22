// EXERCISE: Take an array of names and only log the odd arrays to the console, one name per line
let names = ['Josie', 'Cathrin', 'Bob', 'Max', 'Hannah', 'Alex', 'Miriam', 'Markus', 'Sebastian', 'Connor'];

for (let i = 0; i < names.length; i++) {   
    if (i % 2 == 0) {
        console.log(names[i]); // Logs every other name in the array to the console
    }
}