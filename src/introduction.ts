// Introduction to TypeScript

// Basci typescript syntax

// Define a function with type annotations
function greet(name: string): string {
    return `Hello, ${name}!`;
}

// Define a variable with a specific type
let userName: string = "Alice";

// Call the function and log the result
console.log(greet(userName));

// Interfaces
interface Person {
    name: string;
    age: number;
}

function introduce(person: Person): string {
    return `Hello, my name is ${person.name} and I am ${person.age} years old.`;
}

let user: Person = {
    name: "Muztahid",
    age: 1.7,
    introduce: function (): string {
        throw new Error("Function not implemented.");
    }
};

console.log(introduce(user));

class Animal {
    protected name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public introduce(): string {
        return `This is ${this.name}. It is ${this.age} years old.`;
    }
}

let animal = new Animal("Elephant", 10);
console.log(animal.introduce());


enum Color {
    Red,
    Green,
    Blue
}

let myColor: Color = Color.Green;
console.log(myColor);









