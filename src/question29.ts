function myFilter(myArray: number[], callback: (sum: number) => boolean): number {
    const sum = myArray.reduce((acc, num) => acc + num, 0);

    const isEven = callback(sum);

    return sum;
}

function isEven(sum: number): boolean {
    return sum % 2 === 0;
}

const numbers = [1, 2, 3, 4, 5];
const out = myFilter(numbers, isEven);

console.log(out); 
