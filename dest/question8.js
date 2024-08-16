"use strict";
function calculateOddSum(limit) {
    let sum = 0;
    for (let i = 1; i < limit; i += 2) {
        sum += i;
    }
    return sum;
}
console.log(calculateOddSum(3));
