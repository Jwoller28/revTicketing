"use strict";
// basic types
let age = 12;
// age = "string";
let names = "greg";
let isActive = true;
let jsEmulatedValue = 123;
jsEmulatedValue = "string";
// special types
function logMessage() {
    console.log("This is a message");
}
// null and undefined
// never - represents values that never occur (e.g. functions that throw errors)
// object types
let user = {
    name: "Alice",
    age: 34
};
// array
let numbersArray = [1, 23, 4];
// tuples
let tuple = [1, "Mike"];
// string and numeric enums
// a set of named string constants
var Status;
(function (Status) {
    Status["Active"] = "ACTIVE";
    Status["Inactive"] = "INACTIVE";
})(Status || (Status = {}));
console.log(Status.Active);
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 10] = "North";
    Direction[Direction["East"] = 33] = "East";
    Direction[Direction["South"] = 34] = "South";
    Direction[Direction["West"] = 35] = "West";
})(Direction || (Direction = {}));
var HttpStatusCode;
(function (HttpStatusCode) {
    HttpStatusCode[HttpStatusCode["NotFound"] = 404] = "NotFound";
    HttpStatusCode[HttpStatusCode["Accepted"] = 200] = "Accepted";
    HttpStatusCode[HttpStatusCode["Created"] = 202] = "Created";
})(HttpStatusCode || (HttpStatusCode = {}));
console.log(Direction.North);
console.log(Direction.West);
console.log(HttpStatusCode.NotFound);
// union types
// unions allow you to to hold more than one type
let id;
id = 101;
id = "A123";
let john = {
    name: "",
    age: 0
};
let userContact = {
    email: "user@email.com",
    street: "123 street",
    city: "Metropolis"
};
let mike = {
    name: "Mike",
    age: 45
};
let userContact2 = {
    email: "email",
    street: "Street",
    city: "city",
    phone: "1234234234"
};
// When to use each
/*
    Use type aliases when you need to define more complex types usch as unions, intersections, or when you want to have a more general purpose way of creating types

    Use interfaces when you are working with OOP patterns, or defining the shape of objects, especially when you are extending or implementing them
*/
