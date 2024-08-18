
// record makes the type as anything

type Food = Record<string, any>;

// here the type will be string no other data types can't be used
type Spray = Record<string, string>;



const food: Food = {
    
}