"use strict";
let row = 3;
let column = 3;
let arr1 = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];
let arr2 = [[2, 2, 2], [2, 2, 2], [2, 2, 2]];
let result = new Array(row).fill(0).map(() => new Array(column).fill(0));
for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
        result[i][j] = arr1[i][j] + arr2[i][j];
    }
}
console.log(result);
