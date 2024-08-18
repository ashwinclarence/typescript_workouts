


type userType = {
    name: string;
    age: number;
}


const userObject: Pick <userType, 'age'> = {
    age: 55,
}