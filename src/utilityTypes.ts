

// making the variables inside the users as constant
type Users = {
    readonly name: string,
    age:number
}

const userInfo: Users = {
    name: "Ashwin",
    age:20
}

userInfo.age = 50;