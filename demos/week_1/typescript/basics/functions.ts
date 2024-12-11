function greet(name: string): string{
    return `Hello, ${name}`
}

const arrowFunction = (value: number):number => value + 1; 

// optional and default values
function greetOption(name: string, greeting?: string):string{
    return `${greeting || "Hello"}, ${name}!`
}

console.log(greetOption("Mike"));
console.log(greetOption("Mike", "Hi"));


function greetDefault(name: string, greeting: string = "Hello"): string{
    return `${greeting}, ${name}`;
}

console.log(greetDefault("Jim"));
console.log(greetDefault("Jim", "Hi"));


// Rest Parameters
// This is used when you want to include a variable number of arguments
function sum(...numbers: number[]):number{
    return numbers.reduce((total, num) => total + num, 0);
}

// Overloading Functions
function getInfo(id: number): string
function getInfo(name: string): string
function getInfo(value: number | string): string{
    if (typeof value === "number"){
        return `User with ID: ${value}`;
    }
    return `User with name: ${value}`;
}


