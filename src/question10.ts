import * as readlineSync from 'readline-sync';

function getArrayFromInput(prompt: string): number[] {
    let input = readlineSync.question(prompt);
    return input.split(',').map(Number);
}

function displayArray(arr: number[]): void {
    console.log(arr.join(', '));
}

function swapArrays(): void {
    console.log("Enter the elements of the first array (comma-separated):");
    let array1 = getArrayFromInput("Array 1: ");
    
    console.log("Enter the elements of the second array (comma-separated):");
    let array2 = getArrayFromInput("Array 2: ");
    
    console.log("Original Arrays:");
    console.log("Array 1: ");
    displayArray(array1);
    console.log("Array 2: ");
    displayArray(array2);
    
    [array1, array2] = [array2, array1];
    
    console.log("\nArrays after swapping:");
    console.log("Array 1: ");
    displayArray(array1);
    console.log("Array 2: ");
    displayArray(array2);
}

swapArrays();
