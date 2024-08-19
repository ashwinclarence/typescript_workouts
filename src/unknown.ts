
/* The unknown type represents a value
whose type is unknown at compile-time.
Variables of type unknown can hold
values of any type but require type
checking or assertions for safe usage.*/

let studentName: unknown = "Ashwin";

const newValue = studentName as string;
