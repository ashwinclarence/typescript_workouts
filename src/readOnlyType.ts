
// the readonly utility makes the whole type as constant and we cannot reassign another value to it.
type oldUser = {
    name: string;
    age: number;
}


const oldData:Readonly<oldUser> = {
    name: "Ashwin",
    age:20
}


console.log(oldData);


