// oop

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    greet(): string {
        return `Hello, my name is ${this.name} and I am ${this.age}`;
    }
}

const person = new Person("mike", 30);
console.log(person.greet())

// access modifiers

// readonly modifier to make a property immutable after it is initialized
class Example {
    public publicProp: string = "public";
    private privateProp: string = "private";
    protected protectedProp: string = "protected";

    readonly id: number;

    constructor(id: number){
        this.id = id;
    }

    public showProps() {
        console.log(this.publicProp); // Accessible
        console.log(this.privateProp); // Accessible
        console.log(this.protectedProp); // Accessible
    }

}

class SubExample extends Example {
    public showProtected(){
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
    private _password: string;

    constructor(password: string){
        this._password = password;
    }

    get password(): string{
        return this._password;
    }

    set password(newPassword: string){
        if(newPassword){
            this._password = newPassword;
        }else{
            console.log("Password must have characters")
        }
    }
}

const user = new User("securePassword");

console.log(user.password);
user.password =  "";


// Inheritance
// extends keyword - classes
// implements keyword - interfaces

class Animal{
    constructor(public name: string){}

    speak(): string{
        return `${this.name} makes a noise`
    }
}

class Dog extends Animal {
    speak(): string{
        return `${this.name} barks.`
    }
}

// abstract classes

abstract class Shape {
    abstract area(): number; // must be implemented by subclasses

    describe(): string {
        return "I am a shape";
    }
}

class Circle extends Shape{
    constructor(public radius: number){
        super();
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
    
}

// interfaces
interface Drivable {
    speed: number;
    drive(): void;
}

class Car implements Drivable {
    speed: number;
    constructor(speed: number){
        this.speed = speed;
    }
    drive(): void {
        console.log(`Driving at ${this.speed}`)
    }
}


// static
// static means that the property or method belongs to the class itself, not its instances
class MathUtils {
    static PI: number = 3.14;

    static circleArea(radius: number): number{
        return this.PI * radius * radius;
    }
}

// Private constructors and singleton classes
class Singleton {
    private static instance: Singleton;

    private constructor(){}

    static getInstance(): Singleton {
        if(!Singleton.instance){
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }
}

