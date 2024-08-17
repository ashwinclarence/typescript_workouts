

import * as readline from 'readline-sync';

let annualIncome: number = Number(readline.question("Enter the annual income :"));

function calculateTax(annualIncome: number): number{
    if (annualIncome > 10_00_000 && annualIncome <= 50_00_000) {
        return (annualIncome * (30 / 100));
    } else if (annualIncome > 5_00_000 && annualIncome <= 10_00_000) {
        return (annualIncome * (20 / 100));
    } else if (annualIncome > 2_50_000 && annualIncome <= 5_00_0000) {
        return (annualIncome * (5 / 100));
    } else if (annualIncome <= 2_50_000) {
        return 0
    } else {
        return 0
    }
    
}


console.log(calculateTax(annualIncome))