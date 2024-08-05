"use strict";
// Introduction to TypeScript
// Basci typescript syntax
// Define a function with type annotations
function greet(name) {
    return "Hello, ".concat(name, "!");
}
// Define a variable with a specific type
var userName = "Alice";
// Call the function and log the result
console.log(greet(userName));
function introduce(person) {
    return "Hello, my name is ".concat(person.name, " and I am ").concat(person.age, " years old.");
}
var user = {
    name: "Muztahid",
    age: 1.7,
    introduce: function () {
        throw new Error("Function not implemented.");
    }
};
console.log(introduce(user));
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }
    Animal.prototype.introduce = function () {
        return "This is ".concat(this.name, ". It is ").concat(this.age, " years old.");
    };
    return Animal;
}());
var animal = new Animal("Elephant", 10);
console.log(animal.introduce());
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
/*
### 1. Introduction to TypeScript

1. What are the key differences between TypeScript and JavaScript?
i) Type System -
Javascript - Javascript is dynamically typed language. which means types are determinded at runtime. This can lead type errors. Errors are only identified after code execution.

Typescript - Typescript is statically typed means types are determined at code compilation. Errors can be identified at the development process.

ii) Type Annotations -
Javascript - Javascript has no type annotation.

Typescript - Typescript has type annotation. annotation can directly use in code. Example
let message : string = "hello, Typescript!";

iii) Compilation -
Javascript - JavaScript is an interpreted language. Code is executed directly by the JavaScript engine in browsers or Node.js.

Typescript - TypeScript code must be compiled (or transpiled) to JavaScript before it can be executed. The TypeScript compiler (tsc) performs this conversion.

iv) Tooling and Editor Support -
JavaScript: Modern editors and IDEs provide good support for JavaScript with features like IntelliSense, code completion, and linting.
TypeScript: TypeScript offers superior tooling support due to its static type system. Editors can provide more accurate autocompletion, refactoring tools, and real-time error detection.

v) ES6+ Features

JavaScript: Support for newer ECMAScript (ES6+) features depends on the JavaScript engine (e.g., browsers, Node.js). Not all environments support the latest features natively.
TypeScript: TypeScript supports many ES6+ features and can compile them down to older versions of JavaScript, making it possible to use modern features in environments that don't support them natively.

vi)Interfaces and Enums

JavaScript: JavaScript does not have native support for interfaces or enums.
TypeScript: TypeScript introduces interfaces and enums to provide more robust type definitions and facilitate more expressive code.

// TypeScript interface
interface Person {
    name: string;
    age: number;
}

// TypeScript enum
enum Color {
    Red,
    Green,
    Blue
}

vii) Namespaces and Modules

JavaScript: JavaScript has native module support (ES6 modules) but does not have namespaces.
TypeScript: TypeScript provides both namespaces (for organizing code within a global scope) and modules (for encapsulating code).
Example:

typescript
Copy code
// TypeScript namespace
namespace Utility {
    export function log(message: string) {
        console.log(message);
    }
}

Utility.log("Hello");

viii) Decorators

JavaScript: JavaScript does not have native support for decorators.
TypeScript: TypeScript has experimental support for decorators, which are a special kind of declaration that can be attached to classes and methods.

ix) Backward Compatibility
JavaScript: JavaScript code is forward-compatible with TypeScript. You can gradually adopt TypeScript in a JavaScript codebase.
TypeScript: TypeScript can use any existing JavaScript library or framework. It can also be configured to work in a mode that is compatible with various versions of JavaScript.

2. Can you explain the concept of static typing in TypeScript and its advantages?
What is Static Typing?
Static typing means that the type of a variable is known at compile time. In TypeScript, you can specify types for variables, function parameters, return values, and more. This type information is checked by the TypeScript compiler before the code is executed, ensuring that type-related errors are caught early in the development process.

Example: A simple TypeScript function with static typing.
function add(a: number, b: number): number {
    return a + b;
}

let result = add(10, 20); // Correct usage
// let errorResult = add("10", "20"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'

*/
