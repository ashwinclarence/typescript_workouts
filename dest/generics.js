"use strict";
function getAge(age) {
    return age;
}
getAge("20");
getAge(20);
const userDetailed = {
    name: "Ashwin",
    age: 20
};
const adminDetailed = {
    username: "Admin",
    age: 29
};
function getDetails(detail) {
    return detail;
}
const value1 = getDetails(userDetailed);
const value2 = getDetails(adminDetailed);
