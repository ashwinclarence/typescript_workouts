

type School = {
    name: string;
    place: string;
    isOpen: boolean;
    totalStudents?: number;
    age: number;
}

let loyola: School = {
    name: "christ nagar school",
    place: "trivandrum",
    isOpen: false,
    totalStudents:5000,
    age:50,
}

// return a string type
function getUserName(school:School):string {
    return school.name;
}

// return a number type
function getUser(school: School):number{
    return school.age
}


let something = getUserName(loyola)
