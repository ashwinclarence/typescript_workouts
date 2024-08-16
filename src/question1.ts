

import * as readline from 'readline-sync';

let char: string = readline.question('Enter a character:');


if (char.length === 1) {
    console.log("Entered character is ", char);
} else {
    console.log("Please enter a valid character")
}

