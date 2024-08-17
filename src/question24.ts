import * as readline from 'readline-sync';

class Area{
    circle(radius: number): number{
        let area: number = 3.14 * radius * radius;
        return area;
    }

    square(side: number): number { 
        let area: number = side * side;
        return area;
    }

    rectangle(length: number, breath: number): number{
        let area: number = length * breath;
        return area;
    }
    
    triangle(base: number, height: number): number{
        let area: number = 0.5 * base * height;
        return area;
    }
}

class MyClass extends Area{
    main() {
        let choice: number = Number(readline.question("Enter your choice :"));

        switch (choice) {
            case 1:
                let radius: number = Number(readline.question("Enter the radius of the circle :"));
                console.log(`Area of circle with radius ${radius} is ${this.circle(radius)}`);
                break;
            case 2:
                let side: number = Number(readline.question("Enter the side of the square :"));
                console.log(`Area of square with side ${side} is ${this.square(side)}`);
                break;
            case 3:
                let length: number = Number(readline.question("Enter the length of the rectangle :"));
                let breadth: number = Number(readline.question("Enter the breadth of the rectangle :"));
                console.log(`Area of rectangle with length ${length} and breadth ${breadth} is ${this.rectangle(length, breadth)}`);
                break;
            case 4:
                let base: number = Number(readline.question("Enter the base of the triangle :"));
                let height: number = Number(readline.question("Enter the height of the triangle :"));
                console.log(`Area of triangle with base ${base} and height ${height} is ${this.triangle(base, height)}`);
                break;
            default: console.log("Invalid choice");
        }
    }
}

let obj = new MyClass();
obj.main()