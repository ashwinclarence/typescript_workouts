"use strict";
// this function will never return anything 
function throwError(message) {
    throw new Error(message);
}
// this function will not return anything as it just console log the message so the return type is set as void
function logMessage(message) {
    console.log(message);
}
