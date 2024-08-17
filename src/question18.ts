import * as readline from 'readline-sync';


let writtenTest: number = Number(readline.question("Enter the mark scored in written exam :"));
let labExam: number = Number(readline.question("Enter the mark scored in lab exam :"));
let assignment: number = Number(readline.question("Enter the mark scored for assignments :"));

function findTotalScore(writtenTest: number, labExam: number, assignment: number): number{
    
    let result: number = ((writtenTest * 70) / 100) + ((labExam * 20) / 100) + ((assignment * 10) / 100);

    return result;
}

console.log(findTotalScore(writtenTest,labExam,assignment))