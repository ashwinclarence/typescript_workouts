"use strict";
function sortArray(arr) {
    arr.sort((a, b) => a - b);
    return arr;
}
let array = [8, 54, 3, 2, 576, 0, 23];
console.log(sortArray(array));
