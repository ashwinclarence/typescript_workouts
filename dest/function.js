"use strict";
let loyola = {
    name: "christ nagar school",
    place: "trivandrum",
    isOpen: false,
    totalStudents: 5000,
    age: 50,
};
// return a string type
function getUserName(school) {
    return school.name;
}
// return a number type
function getUser(school) {
    return school.age;
}
let something = getUserName(loyola);
