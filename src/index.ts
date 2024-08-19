


interface fruit{
    getName: () => void;
}

class Some implements fruit{
    getName() {
        console.log("this is inside the getname");
        
    }
}

let a = new Some();

a.getName();