
// normal function
function add(num1:number, num2:number):number {
    return num1 + num2;
}

add(2, 4);


// function overloading;
function addition(num1: string, num2: string): string;
function addition(num1: number, num2: number): number;
function addition(num1:any, num2:any):any {
    return num1 + num2;
}

addition(2, 2);
addition("2", "2");