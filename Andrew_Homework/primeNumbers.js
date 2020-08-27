// Return a list of all prime numbers between 1 - 10k

function primeNumbers(number) {

    for (let i = 2; i <= Math.sqrt(number); i++) { // TODO: Look up information on remainder of square roots

        if (number % i == 0) {
            return false;
        }
      }

      return true;

}

//OPTION I
let primes = '';
let number = 2;

for (let i = 1; i <= 100; ) {

    if (primeNumbers(number)) {
        primes += i + ': ' + number + '\n';
        i++;
    }

    number++;
}

// OPTION II
// let counter = 1;
// let instance = 2;

// while (counter <= 100) {

//     if (primeNumbers(instance)) {
//         primes += counter + ': ' + instance + '\n';
//         counter++;
//     }

//     instance++;
// }

// OPTION III
// for (let i = 2; counter <= 100; i++) {

//     if (primeNumbers(i)) {
//         primes += counter + ': ' + i + '\n';
//         counter ++;
//     }
// }

console.log(primes);
