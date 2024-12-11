"use strict";
function indentity(value) {
    return value;
}
console.log(indentity("Hello"));
console.log(indentity(42));
const stringBox = { value: "Hello" };
const numberBox = { value: 123 };
// Classes
class GenericQueue {
    constructor() {
        this.items = [];
    }
    enqueue(item) {
        this.items.push(item);
    }
    dequeue() {
        return this.items.shift();
    }
}
const queue = new GenericQueue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue());
console.log(queue.dequeue());
const pair = ["Alice", 30];
const partialUser = { name: "Alice" };
// Readonly<T>
// Makes the properties of T read-only
const readonlyUser = { name: "Mike", age: 30 };
// readonlyUser.name = "Jim"; error
// Record<K, T>
// Creates an object type with keys K and value T
const roles = { admin: "Jim", user: "Mike" };
// casting
// Used to override typescripts type inference
let value = "hello world";
let lengths = value.length;
let number = 123;
