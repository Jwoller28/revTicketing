function indentity<T>(value: T): T{
    return value;
}

console.log(indentity<string>("Hello"));
console.log(indentity<number>(42));

// interface
interface Box<T> {
    value: T
}

const stringBox: Box<string> = {value: "Hello"};
const numberBox: Box<number> = {value: 123};

// Classes
class GenericQueue<T> {
    private items: T[] = [];

    enqueue(item: T): void {
        this.items.push(item);
    }

    dequeue(): T | undefined {
        return this.items.shift();
    }
}

const queue = new GenericQueue<number>();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue());
console.log(queue.dequeue());


// Type Aliases
type Pair<T, U> = [T, U];

const pair: Pair<string, number> = ["Alice", 30];

// Generic Utility Types
// Partial<T>
// makes the properties of T optional
interface Users{
    name: string;
    age: number;
}

const partialUser: Partial<Users> = {name: "Alice"};

// Readonly<T>
// Makes the properties of T read-only
const readonlyUser: Readonly<Users> = {name: "Mike", age: 30};
// readonlyUser.name = "Jim"; error

// Record<K, T>
// Creates an object type with keys K and value T
const roles: Record<string, string> = {admin: "Jim", user: "Mike"};


// casting
// Used to override typescripts type inference
let value: any = "hello world"
let lengths: number = (value as string).length;

// let number: number = 123;