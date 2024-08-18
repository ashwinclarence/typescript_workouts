
function getAge<t>(age:t):t {
    return age;
}

getAge("20");
getAge(20);




// another example

// type for user
type detailedUserType = {
    name: string;
    age: number;
}

// type for admin
type detailedAdminType={
    username: string;
    age: number;
}

// merge the type

type newType = detailedAdminType & {
    role: string;
}

const userDetailed:detailedUserType = {
    name: "Ashwin",
    age: 20
}


const adminDetailed:detailedAdminType = {
    username: "Admin",
    age:29
}

function getDetails<T>(detail:T):T {
    return detail;
}

const value1=getDetails<detailedUserType>(userDetailed)
const value2=getDetails<detailedAdminType>(adminDetailed)