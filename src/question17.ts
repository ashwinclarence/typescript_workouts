import * as readline from 'readline-sync';


let choice: number = Number(readline.question("Choose an option between 1 to 4 :"));
let num1: number = 100;
let num2: number = 2;
switch (choice) {
    case 1: addition(num1,num2);
        break;
    case 2: subtraction(num1,num2);
        break;
    case 3: multiplication(num1 ,num2);
        break;
    case 4: division(num1 , num2);
        break;
    default: console.log("Invalid input");
}


function addition(num1: number, num2: number) {
    console.log(num1 + num2);
}

function subtraction(num1: number, num2: number) {
    console.log(num1 - num2);
}

function multiplication(num1: number, num2: number) {
    console.log(num1 * num2);
}

function division(num1: number, num2: number) {
    console.log(num1 / num2);
}