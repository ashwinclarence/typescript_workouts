

let counter: number = 1;
let limit: number = 4;

for (let i = 1; i <= limit; i++){
    let row: string = '';
    for (let j = 1; j <= i; j++){
        row += counter + " ";
        counter++;
    }
    console.log(row);
}

