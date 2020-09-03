let someNumbers = [12, 43, 4000, 20, 429, 11, 30];

someNumbers.sort(function (a, b) {
    if (a > b) {
        return 1;
    }
    if (a < b) {
        return -1;
    }
    if (a == b) {
        return 0;
    }
});

console.log(someNumbers);
