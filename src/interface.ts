interface Detail{
    name: string;
    age: number;
    salary: number;
    getName:()=> void;
}

let userDetail: Detail = {
    name: "ASHWIN",
    age: 20,
    salary: 2500,
    getName() {
        console.log(this.name);
    },
}

let adminDetail: Detail = {
    name: "ADMIN",
    age: 23,
    salary: 5600,
    getName() {
        console.log(this.name);
        
    }
}