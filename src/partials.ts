

// partial is used to make the whole type as optional;

type partialType = {
    name: string;
    age: number;
}

const myDetails: partialType={
    name:"Ashwin",
    age:20
}
// this is how partial is done the whole type turns as optional
const partialObject: Partial<partialType> = {
    
}