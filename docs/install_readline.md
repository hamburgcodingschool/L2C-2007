# Installing Readline for user input in Node.

## Adding the package to your project folder

1. Open the terminal and navigate to your project folder.

2. Once you are on the correct folder in the terminal run `npm init` and follow the wizard to create the package.json file. Don't worry too much about the options all the default values are fine 😄.

3. Now run `npm install readline-sync`.

## Adding the readline module to your javascript file

1. On every javascript file where you need user input you need to start with `let readlineSync = require('readline-sync');`

2. User the `readlineSync.question()` to ask the user for input and store it in a variable.

### Full working Example:

```
let readlineSync = require('readline-sync');

let name = readlineSync.question("What's your name?");
console.log("Hello " + name);
```

### More Info:
https://www.npmjs.com/package/readline-sync
