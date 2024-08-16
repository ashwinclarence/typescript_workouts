"use strict";
let arr = [3, 452, 56, 1, 2, 3, 5, 76, 8, 45, 3, 1, 4, 56, 64];
function countEven(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }
    return sum;
}
console.log(countEven(arr));
