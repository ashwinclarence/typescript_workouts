"use strict";
class Car {
    constructor(name, mileage, maxSpeed) {
        this.name = name;
        this.mileage = mileage;
        this.maxSpeed = maxSpeed;
    }
}
let obj = new Car("BMW", 50, 150);
console.log(obj.name);
console.log(obj.mileage);
console.log(obj.maxSpeed);
