

import * as readline from "readline-sync";

let limit: number = Number(readline.question("Enter the limit of the array :"));
let arr: number[] = [];
for (let i = 0; i < limit; i++){
    let input: number = Number(readline.question(`Enter the ${i} element :`));
    arr.push(input);
}

function multiplyAdjacent(arr: number[]): number[]{
    let result: number[] = [];
    for (let i = 0; i < arr.length - 1; i++){
        result.push(arr[i] * arr[i + 1]);
    }
    return result;
}

console.log(multiplyAdjacent(arr))