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
const readline = __importStar(require("readline-sync"));
class Area {
    circle(radius) {
        let area = 3.14 * radius * radius;
        return area;
    }
    square(side) {
        let area = side * side;
        return area;
    }
    rectangle(length, breath) {
        let area = length * breath;
        return area;
    }
    triangle(base, height) {
        let area = 0.5 * base * height;
        return area;
    }
}
class MyClass extends Area {
    main() {
        let choice = Number(readline.question("Enter your choice :"));
        switch (choice) {
            case 1:
                let radius = Number(readline.question("Enter the radius of the circle :"));
                console.log(`Area of circle with radius ${radius} is ${this.circle(radius)}`);
                break;
            case 2:
                let side = Number(readline.question("Enter the side of the square :"));
                console.log(`Area of square with side ${side} is ${this.square(side)}`);
                break;
            case 3:
                let length = Number(readline.question("Enter the length of the rectangle :"));
                let breadth = Number(readline.question("Enter the breadth of the rectangle :"));
                console.log(`Area of rectangle with length ${length} and breadth ${breadth} is ${this.rectangle(length, breadth)}`);
                break;
            case 4:
                let base = Number(readline.question("Enter the base of the triangle :"));
                let height = Number(readline.question("Enter the height of the triangle :"));
                console.log(`Area of triangle with base ${base} and height ${height} is ${this.triangle(base, height)}`);
                break;
            default: console.log("Invalid choice");
        }
    }
}
let obj = new MyClass();
obj.main();
