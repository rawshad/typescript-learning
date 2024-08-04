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
console.log(myColor); // Output: 1
