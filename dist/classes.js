"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Basic Class Syntax
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.introduce = function () {
        return "Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old.");
    };
    return Person;
}());
var person = new Person("Alice", 30);
console.log(person.introduce());
//Access Modifiers
var Animal2 = /** @class */ (function () {
    function Animal2(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
    Animal2.prototype.introduce = function () {
        return "This is ".concat(this.name, ". It is ").concat(this.age, " years old.");
    };
    return Animal2;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, age) {
        return _super.call(this, name, age, "Dog") || this;
    }
    Dog.prototype.describe = function () {
        return "This is a ".concat(this.species, " named ").concat(this.name, ".");
    };
    return Dog;
}(Animal2));
var dog = new Dog("Buddy", 5);
console.log(dog.introduce());
console.log(dog.describe());
// console.log(dog.age);
//Readonly Modifier
var Car = /** @class */ (function () {
    function Car(make, model) {
        this.make = make;
        this.model = model;
    }
    Car.prototype.details = function () {
        return "Car make: ".concat(this.make, ", model: ").concat(this.model);
    };
    return Car;
}());
var car = new Car("Toyota", "Camry");
console.log(car.details()); // Output: Car make: Toyota, model: Camry
// car.make = "Honda"; // Error: Cannot assign to 'make' because it is a read-only property.
//Getters and Setters
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this._radius = radius;
    }
    Object.defineProperty(Circle.prototype, "radius", {
        get: function () {
            return this._radius;
        },
        set: function (value) {
            if (value <= 0) {
                throw new Error("Radius must be positive");
            }
            this._radius = value;
        },
        enumerable: false,
        configurable: true
    });
    Circle.prototype.area = function () {
        return Math.PI * this._radius * this._radius;
    };
    return Circle;
}());
var circle = new Circle(10);
console.log(circle.area());
circle.radius = 20;
console.log(circle.area());
// circle.radius = -5;
//Inheritance
var Animal3 = /** @class */ (function () {
    function Animal3(name) {
        this.name = name;
    }
    Animal3.prototype.move = function (distance) {
        console.log("".concat(this.name, " moved ").concat(distance, " meters."));
    };
    return Animal3;
}());
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird(name) {
        return _super.call(this, name) || this;
    }
    Bird.prototype.fly = function (distance) {
        console.log("".concat(this.name, " flew ").concat(distance, " meters."));
    };
    return Bird;
}(Animal3));
var bird = new Bird("Parrot");
bird.move(5);
bird.fly(10);
