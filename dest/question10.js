"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = __importStar(require("readline-sync"));
function getArrayFromInput(prompt) {
    let input = readlineSync.question(prompt);
    return input.split(',').map(Number);
}
function displayArray(arr) {
    console.log(arr.join(', '));
}
function swapArrays() {
    console.log("Enter the elements of the first array (comma-separated):");
    let array1 = getArrayFromInput("Array 1: ");
    console.log("Enter the elements of the second array (comma-separated):");
    let array2 = getArrayFromInput("Array 2: ");
    console.log("Original Arrays:");
    console.log("Array 1: ");
    displayArray(array1);
    console.log("Array 2: ");
    displayArray(array2);
    [array1, array2] = [array2, array1];
    console.log("\nArrays after swapping:");
    console.log("Array 1: ");
    displayArray(array1);
    console.log("Array 2: ");
    displayArray(array2);
}
swapArrays();
