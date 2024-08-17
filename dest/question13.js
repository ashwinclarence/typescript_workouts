"use strict";
function checkPalindrome(word) {
    if (word.length <= 1) {
        return true;
    }
    if (word[0] !== word[word.length - 1]) {
        return false;
    }
    return checkPalindrome(word.substring(1, word.length - 1));
}
console.log(checkPalindrome("racecar"));
console.log(checkPalindrome("hello"));
