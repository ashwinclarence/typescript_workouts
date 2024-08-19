

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

// The void type represents the absence of
// any type in TypeScript.
// It is commonly used as the return type of
// functions that do not explicitly return a
// value.
// Variables of type void can only be
// assigned undefined or null.
