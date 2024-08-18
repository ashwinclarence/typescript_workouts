

type UserType = {
    name: string;
    getUserName: () => string;
}


const currentUserAvailable:UserType = {
    name: "Ashwin",
    getUserName() {
        return "hello"
    }
}