// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }



for (let i = 1; i <= 10; i++) {
    
    let suffix = '';    

    if (i % 3 == 0) {
        suffix += '!';
    }

    if (i % 5 == 0) {
        suffix += '!!';
    }

    console.log(i + suffix);
}

