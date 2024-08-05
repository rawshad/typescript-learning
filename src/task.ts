/**
 * ### 1. Introduction to TypeScript

1. What are the key differences between TypeScript and JavaScript?

TypeScript is a superset of JavaScript that adds static types. This means that TypeScript code is transpiled to JavaScript before it runs. Key differences include:
Static Typing: TypeScript allows you to define types for variables, functions, etc., which are checked at compile time.
Type Inference: TypeScript can infer types, providing type safety without explicit type annotations.
Interfaces and Generics: TypeScript supports interfaces and generics, which help in defining complex types and reusable components.
Compilation: TypeScript code needs to be compiled into JavaScript using the TypeScript compiler (tsc).

2. Can you explain the concept of static typing in TypeScript and its advantages?
Static typing means that the types of variables are known at compile time. This helps in:
Early Error Detection: Errors can be caught during compilation rather than at runtime.
Better Tooling: IDEs can provide better autocompletion, navigation, and refactoring tools.
Improved Documentation: Type annotations act as documentation for the code.
Maintainability: Type checks make it easier to understand and maintain the codebase.

3. How does TypeScript help in detecting and preventing bugs compared to JavaScript?

TypeScript catches type-related errors at compile time, which can prevent many common bugs that occur in JavaScript. For example, assigning a string to a variable that should hold a number will be caught by the TypeScript compiler.

let age: number = 25;
age = "twenty-five"; // Error: Type 'string' is not assignable to type 'number'


4. What is the purpose of TypeScript's configuration file, `tsconfig.json`, and what are some common settings?
tsconfig.json is used to configure the TypeScript compiler options for a project. It specifies the root files and the compiler options required to compile the project.
Common settings include:
compilerOptions: Contains options like target, module, strict, outDir, etc.
include: Specifies the files or directories to include.
exclude: Specifies the files or directories to exclude.
Example tsconfig.json:
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "strict": true,
    "outDir": "./dist"
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}

5. How does TypeScript handle backward compatibility with JavaScript?

TypeScript is designed to be backward compatible with JavaScript. Any valid JavaScript code is also valid TypeScript code. TypeScript files can use JavaScript libraries, and the TypeScript compiler transpiles TypeScript code to JavaScript that runs on any JavaScript engine.


### 2. Basic Data Types

1. What are the main primitive data types in TypeScript, and how do they differ from JavaScript?

The main primitive data types in TypeScript are the same as in JavaScript: number, string, boolean, null, undefined, and symbol. TypeScript adds a static type system on top of these primitives.
let isDone: boolean = false;
let age: number = 30;
let name: string = "John";

2. How does TypeScript enforce type safety, and what happens if you try to assign a value of the wrong type?
TypeScript enforces type safety by checking the types at compile time. By assigning a value of the wrong type, the TypeScript compiler will throw an error.

let name: string = "Alice";
name = 42; // Error: Type 'number' is not assignable to type 'string'



3. What is the difference between `null` and `undefined` in TypeScript, and how does the `strictNullChecks` option affect their usage?

undefined means a variable has been declared but not assigned a value.
null means a variable is explicitly assigned a value of nothing.
When strictNullChecks is enabled, null and undefined are treated as user defined data types, and handled explicitly.
let value: string | null = null; value = "Hello"; // Okay value = undefined; // Error when strictNullChecks is enabled

4. How do you create and use union types in TypeScript, and what are some common use cases?

Union types allow a variable to hold more than one type. You use the | operator to combine types.
let value: string | number;
value = "Hello"; // Okay
value = 42; // Okay


5. Can you explain how TypeScript handles type assertions and type casting?
Type assertions are used to tell the TypeScript compiler to treat a value as a specific type.

let someValue: any = "Hello, World!";
let strLength: number = (someValue as string).length;


### 3. Variable Declaration

1. What are the differences between `var`, `let`, and `const` in TypeScript?

var: Function-scoped or globally-scoped, can be redeclared, and hoisted.
let: Block-scoped, cannot be redeclared within the same scope, and not hoisted.
const: Block-scoped, must be initialized at declaration, and cannot be reassigned.
var x = 1; let y = 2; const z = 3;

2. How does TypeScript's type inference work when declaring variables?

TypeScript can infer the type of a variable based on the value assigned to it. Do not always need to explicitly declare the type.
3. What are the implications of using `const` for variable declarations in TypeScript?
Using const means the variable cannot be reassigned after its initial value is set. It ensures that the value remains constant throughout the program.
const PI = 3.14;
// PI = 3.1415; // Error: Cannot assign to 'PI' because it is a constant.


4. How do you declare and use tuples in TypeScript, and how do they differ from arrays?

Tuples allow you to define an array with a fixed number of elements of specific types.

let tuple: [string, number];
tuple = ["Hello", 42]; // Okay
// tuple = [42, "Hello"]; // Error: Type 'number' is not assignable to type 'string'

Tuples differ from arrays in that the types and number of elements are fixed and defined.

5. What is the purpose of the `readonly` modifier in TypeScript, and how is it applied to variables and properties?

The readonly modifier makes a property or variable immutable after its initial assignment.
class Person {
  readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const alice = new Person("Alice");
// alice.name = "Bob"; // Error: Cannot assign to 'name' because it is a read-only property.


### 4. Functions

1. How do you define a function in TypeScript with typed parameters and a return type?
function greet(name: string): string {
  return `Hello, ${name}`;
}

console.log(greet("Alice"));


2. What are optional parameters in TypeScript functions, and how are they declared and used?

Optional parameters are parameters that may or may not be provided when the function is called. They are declared with a ? after the parameter name.
function greet(name: string, greeting?: string): string {
  if (greeting) {
    return `${greeting}, ${name}`;
  } else {
    return `Hello, ${name}`;
  }
}

console.log(greet("Alice"));
console.log(greet("Alice", "Hi"));


3. How can you create a function in TypeScript with default parameter values, and what are the benefits?

Default parameters provide a default value if no argument is passed.

function greet(name: string, greeting: string = "Hello") {
  console.log(`${greeting}, ${name}.`);
}

greet("John"); // Hello, John.
greet("John", "Hi"); // Hi, John.

Benefits include reducing the need for function overloading and simplifying function calls.


4. What is function overloading in TypeScript, and how does it differ from function overloading in other languages?

Function overloading allows the same function to have different signatures.

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
  return a + b;
}

let sum = add(1, 2);
let concatenation = add("Hello, ", "world!");

TypeScript's function overloading only works with one implementation, while other languages may support multiple implementations.


5. How does TypeScript handle the `this` keyword in functions, and what are some common pitfalls and solutions?

TypeScript provides better support for this by allowing type annotations.

class Counter {
  count: number = 0;

  increment() {
    this.count++;
  }
}

let counter = new Counter();
let increment = counter.increment;
increment(); // Error: `this` is undefined

// Solution: Bind the method
let boundIncrement = counter.increment.bind(counter);
boundIncrement();

Common pitfall: Losing the context of this when passing functions as callbacks. Solution: Use bind or arrow functions.


### 5. Classes

1. How do you define a class in TypeScript, and what are the key features that TypeScript adds to JavaScript classes?
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

let john = new Person("John", 25);
john.greet(); // Hello, my name is John.

Key features:
Access modifiers (public, private, protected).
Type annotations for properties and methods.
readonly properties.

2. What are access modifiers in TypeScript, and how do `public`, `private`, and `protected` affect class members?

public: Accessible from anywhere (default).
private: Accessible only within the class.
protected: Accessible within the class and its subclasses.
Example:
class Animal {
  public name: string;
  private age: number;
  protected sound: string;

  constructor(name: string, age: number, sound: string) {
    this.name = name;
    this.age = age;
    this.sound = sound;
  }
}


3. How do you implement inheritance in TypeScript, and what are some best practices for using inheritance?

class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  move(distance: number) {
    console.log(`${this.name} moved ${distance} meters.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof! Woof!");
  }
}

let dog = new Dog("Buddy");
dog.bark();
dog.move(10);

Best practices:
Use inheritance to share common behavior.
Prefer composition over inheritance for more flexibility.

4. How do interfaces work in TypeScript, and how do they differ from classes? Can you provide an example of using interfaces with classes?

Interfaces define contracts for classes to implement.
interface Greetable {
  greet(): void;
}

class Person implements Greetable {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

let john = new Person("John");
john.greet(); // Hello, my name is John.

Interfaces:
Cannot contain implementation.
Only define method and property signatures.

5. What are abstract classes in TypeScript, and how do they differ from regular classes? Can you give an example of when to use an abstract class?

Abstract classes cannot be instantiated and can have both implemented and abstract methods.
abstract class Animal {
  abstract makeSound(): void; // Abstract method

  move(): void {
    console.log("Moving...");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Woof! Woof!");
  }
}

let dog = new Dog();
dog.makeSound(); // Woof! Woof!
dog.move(); // Moving...

To share common functionality and enforce subclasses to implement specific methods use abstract classes.


 */