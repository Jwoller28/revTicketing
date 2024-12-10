console.log("Hello");

// let or const or var
// values assigned with let and const have block scope

let num = 10; // declare and assign a variable

num = "string";


const PI = 3.14;

// PI = 3; // invalid assignment


// Variable Scope

// Global Scope
// local Scope (function scope)
// block scope ES6
// Lexical scope (Closures)

{
    // var x = 10;
    let names = "Greg";
    console.log(num);
}

// console.log(x);
// console.log(names);


// Type coercion

// Implicit Type Coercion

num = 5;

const str = "10";

const result = num + str; // The number is coerced to a string and concatenated to the other string

console.log(result);

// Comparison with loose equality ==

const x = 5;
const y = "5";
console.log(x == y); // y is coerced to be a number

// Strict equality ===

console.log(x === y);


// Truthy and Falsy values

// JS has truthy and falsy values, where some values are considered "truthy" when coerced to a boolean and others are considered a "falsy"

if("hello"){
    console.log("truthy");
}

/*
Falsy Values

- false
- 0
- '' empty string
- null (variable assigned empty)
- undefined (not defined variable)
- NaN (Not a Number)

Everything else is considered truthy
*/

// Explicit Type Conversions

const numStr = "43";
const number = Number(numStr); // explicit conversion of string to a number
console.log(typeof number);


// Reference Data Types

// Objects
const person = {"firstName": "John", lastName: "Doe"};

const numbers = [1, 2, 3, 4, 5];

function greet(name){
    return `Hello, ${name}`;
}

console.log(numbers[0]);

const mixed = [1, , {}, 4];

console.log(mixed);

numbers[0] = 55;

numbers.push(3); // add 3 to the end of the array
numbers.pop(); // remove the last element 3

// splice(index, how many)

numbers.splice(0, 1);


// closures  (lexical scope)

function outer(){
    const message = "hello, ";

    function inner(name){
        console.log(`${message} ${name}`);
    }

    return inner;
}

const greetClosure = outer();

greetClosure("Greg");

//this
// this keyword is used to identify the current object or context within which the code is running
// the value of this can change depending on where and how a function is called

console.log(this == window); // in a browser environment

const person2 = {
    name: "john",
    greet: function () {
        console.log(`Hello, ${this.name}`);
    }
}


// Arrow Functions

// A concise way of writing anonymous functions in JS

const square = (x) => {
    return x * x;
}

const square2 = x => x * x; // implicit return

square(3); // 9


const person3 = {
    name: "Greg",
    greet: () => console.log(`Hello, ${this.name}`)
}

person3.greet();

// Arrow functions have no this binding, they inherit the value from their enclosing (lexical) context
// This can lead to unexpected behaviors if not aware of