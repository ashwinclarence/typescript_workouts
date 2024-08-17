"use strict";
let counter = 1;
let limit = 4;
for (let i = 1; i <= limit; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += counter + " ";
        counter++;
    }
    console.log(row);
}
