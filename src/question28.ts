

class Car {
  name: string;
  mileage: number;
    maxSpeed: number;
    

  constructor(name: string, mileage: number, maxSpeed: number) {
    this.name = name;
    this.mileage = mileage;
    this.maxSpeed = maxSpeed;
  }
}

let obj = new Car("BMW", 50, 150);

console.log(obj.name)
console.log(obj.mileage)
console.log(obj.maxSpeed)