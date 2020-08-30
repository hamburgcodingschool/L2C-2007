/*## Exercise 1
### Input and output
Write a program that ask the user for his name and prints a greeting.
```
Please enter your name:
Hello <NAME>, welcome to the Learn to Code course.
```

> **Hint:**<br />
> Use `readline-sync` for the input and `console.log()` for the output .*/

var readlineSync = require('readline-sync');
 
// Wait for user's response.
var userName = readlineSync.question('Please enter your name: ');
console.log('Hello ' + userName + ', welcome to the Learn to Code course!');
 
