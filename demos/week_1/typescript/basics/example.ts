// basic types

let age: number = 12;
// age = "string";
let names: string = "greg";
let isActive: boolean = true;

let jsEmulatedValue: any = 123;
jsEmulatedValue = "string";

// special types
function logMessage(): void{
    console.log("This is a message");
}

// null and undefined
// never - represents values that never occur (e.g. functions that throw errors)

// object types

let user: {name: string; age: number} = {
    name: "Alice",
    age: 34
};

// array

let numbersArray: number[] = [1, 23, 4]

// tuples
let tuple: [number, string] = [1, "Mike"];


// string and numeric enums
// a set of named string constants
enum Status {
    Active = "ACTIVE",
    Inactive = "INACTIVE"
}

console.log(Status.Active);

enum Direction {
    North = 10,
    East = 33,
    South,
    West
}

enum HttpStatusCode {
    NotFound = 404,
    Accepted = 200,
    Created = 202
}

console.log(Direction.North);
console.log(Direction.West);


console.log(HttpStatusCode.NotFound);

// union types
// unions allow you to to hold more than one type
let id: number | string;
id = 101;
id = "A123";


// Type Aliases and Interfaces
// Type Aliases

type AliasName = number;

type Person = {
    name: string,
    age: number
}

let john: Person = {
    name: "",
    age: 0
}

type ID = string | number; // ID can be either string or a number

// intersection type

type Contact = {email: string}
type Address = {
    street: string;
    city: string;
}

type ContactDetails = Contact & Address;
let userContact: ContactDetails =  {
    email: "user@email.com",
    street: "123 street",
    city: "Metropolis"
}


// Interfaces

interface PersonInterface {
    name: string;
    age: number;
}

let mike: Person = {
    name: "Mike",
    age: 45
}

interface ContactInterface {
    email: string
}

interface AddressInterface {
    street: string;
    city: string;
}

interface ContactDetailsInterface extends Contact, Address {
    phone: string;
}

let userContact2: ContactDetailsInterface = {
    email: "email",
    street: "Street",
    city: "city",
    phone: "1234234234"
}

// When to use each
/*
    Use type aliases when you need to define more complex types usch as unions, intersections, or when you want to have a more general purpose way of creating types

    Use interfaces when you are working with OOP patterns, or defining the shape of objects, especially when you are extending or implementing them
*/




// as const
// Literal type inference
// Instead of inferring a data type from a value, you can infer as the literal value itself

let currentStatus = "active"; // inferred as a string
let currentStatusConst = "Inactive" as const; // inferred as "Inactive"

const currentValue = 1234;


// Type Guards
// These are used to guard a specific section of code on the type that it receives

function printId(id: number | string){
    if(typeof id === "string"){
        console.log("Id is a string");
    }else{
        console.log("Id is a number")
    }
}

class Cat {
    meow(){
        console.log("Meow");
    }
}
class Bird {
    Sing(){
        console.log("Bird Singing");
    }
}

function makeSound(animal: Cat | Bird){
    if (animal instanceof Cat){
        animal.meow();
    }else{
        animal.Sing();
    }
}
