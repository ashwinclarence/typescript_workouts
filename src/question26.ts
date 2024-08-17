import * as readline from 'readline-sync';

function reverseString(num: string): string{
    try {
        let result = num.split('').reverse().join('');
        return result;
    
    } catch (err) {
        console.log(`Error on reversing the string ${err}`);
        return ''
    }
}

let input: string = readline.question("Enter the string to reverse :");

console.log(reverseString(input));