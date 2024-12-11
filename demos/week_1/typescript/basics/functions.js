"use strict";
function greet(name) {
    return `Hello, ${name}`;
}
const arrowFunction = (value) => value + 1;
// optional and default values
function greetOption(name, greeting) {
    return `${greeting || "Hello"}, ${name}!`;
}
console.log(greetOption("Mike"));
console.log(greetOption("Mike", "Hi"));
function greetDefault(name, greeting = "Hello") {
    return `${greeting}, ${name}`;
}
console.log(greetDefault("Jim"));
console.log(greetDefault("Jim", "Hi"));
// Rest Parameters
// This is used when you want to include a variable number of arguments
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
function getInfo(value) {
    if (typeof value === "number") {
        return `User with ID: ${value}`;
    }
    return `User with name: ${value}`;
}
