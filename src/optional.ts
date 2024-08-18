

// like option chaining ?

type Teacher={
    name: string;
    age: number;
    department: string;
    isActive: boolean;
    address?: string;
}

// the address is optional thats why we use ? in address
// if we are not use not the ? in the type then we must include the address in the teacherDetails object


let teacherDetails: Teacher={
    name: "ASHWIN",
    age: 34,
    department: "Computer",
    isActive: false,
}