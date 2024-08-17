import * as readline from 'readline-sync';


function getArray(): number[]{
    let arr: number[] = [];

    let limit: number = Number(readline.question("Enter the limit of the array:"));

    for (let i = 0; i < limit; i++){
        let input: number = Number(readline.question(`Enter the ${i} element :`));
        arr.push(input);
    }

    return arr;
}

function sumOfArray(arr1: number[], arr2: number[]): number[]{
    let result:number[]=[]
    for (let i = 0; i < arr1.length; i++){
        result[i] = arr1[i] + arr2[i];
    }
    return result;
}


function displayArray(arr: number[]) {
    console.log(arr)
}


let arr1: number[] = getArray();
let arr2: number[] = getArray();

let sum: number[] = sumOfArray(arr1, arr2);

displayArray(sum)