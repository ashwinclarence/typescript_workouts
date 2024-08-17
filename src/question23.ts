
import * as readline from 'readline-sync';

function getArray(): number[][]{
    let arr: number[][] = [];

    let limit: number = Number(readline.question("Enter the limit of the array:"));

    for (let i = 0; i < limit; i++) { 
        let rowArray:number[]=[]
        for (let j = 0; j < limit; j++){
            let input: number = Number(readline.question(`Enter the (${i}, ${j}) element`));
            rowArray.push(input);
        }
        arr.push(rowArray);
    }

    return arr;
}

function display(arr: number[][]) {
    console.log(arr);
}


let array: number[][] = getArray();

display(array)