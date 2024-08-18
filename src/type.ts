type Details = {
    name: string;
    age: number;
    salary: number;
    getName:()=> void;
}

let userDetails: Details = {
    name: "ASHWIN",
    age: 20,
    salary: 2500,
    getName() {
        console.log(this.name);
    },
}

let adminDetails: Details = {
    name: "ADMIN",
    age: 23,
    salary: 5600,
    getName() {
        console.log(this.name);
        
    }
}