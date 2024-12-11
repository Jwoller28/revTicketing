"use strict";
// oop
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age}`;
    }
}
const person = new Person("mike", 30);
console.log(person.greet());
// access modifiers
// readonly modifier to make a property immutable after it is initialized
class Example {
    constructor(id) {
        this.publicProp = "public";
        this.privateProp = "private";
        this.protectedProp = "protected";
        this.id = id;
    }
    showProps() {
        console.log(this.publicProp); // Accessible
        console.log(this.privateProp); // Accessible
        console.log(this.protectedProp); // Accessible
    }
}
class SubExample extends Example {
    showProtected() {
        console.log(this.protectedProp); // accessible
        // console.log(this.privateProp); // inaccessible
    }
}
const example = new Example(234);
console.log(example.publicProp);
console.log(example.id);
// example.id = 44; read only prop
// getters and setters
class User {
    constructor(password) {
        this._password = password;
    }
    get password() {
        return this._password;
    }
    set password(newPassword) {
        if (newPassword) {
            this._password = newPassword;
        }
        else {
            console.log("Password must have characters");
        }
    }
}
const user = new User("securePassword");
console.log(user.password);
user.password = "";
// Inheritance
// extends keyword - classes
// implements keyword - interfaces
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        return `${this.name} makes a noise`;
    }
}
class Dog extends Animal {
    speak() {
        return `${this.name} barks.`;
    }
}
// abstract classes
class Shape {
    describe() {
        return "I am a shape";
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}
class Car {
    constructor(speed) {
        this.speed = speed;
    }
    drive() {
        console.log(`Driving at ${this.speed}`);
    }
}
// static
// static means that the property or method belongs to the class itself, not its instances
class MathUtils {
    static circleArea(radius) {
        return this.PI * radius * radius;
    }
}
MathUtils.PI = 3.14;
// Private constructors and singleton classes
class Singleton {
    constructor() { }
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}
