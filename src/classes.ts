//Basic Class Syntax
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    introduce(): string {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

let person = new Person("Alice", 30);
console.log(person.introduce());


//Access Modifiers
class Animal2 {
    public name: string;
    private age: number;
    protected species: string;

    constructor(name: string, age: number, species: string) {
        this.name = name;
        this.age = age;
        this.species = species;
    }

    public introduce(): string {
        return `This is ${this.name}. It is ${this.age} years old.`;
    }
}

class Dog extends Animal2 {
    constructor(name: string, age: number) {
        super(name, age, "Dog");
    }

    public describe(): string {
        return `This is a ${this.species} named ${this.name}.`;
    }
}

let dog = new Dog("Buddy", 5);
console.log(dog.introduce());
console.log(dog.describe()); 
// console.log(dog.age);

//Readonly Modifier
class Car {
    readonly make: string;
    readonly model: string;

    constructor(make: string, model: string) {
        this.make = make;
        this.model = model;
    }

    public details(): string {
        return `Car make: ${this.make}, model: ${this.model}`;
    }
}

let car = new Car("Toyota", "Camry");
console.log(car.details()); // Output: Car make: Toyota, model: Camry
// car.make = "Honda"; // Error: Cannot assign to 'make' because it is a read-only property.


//Getters and Setters
class Circle {
    private _radius: number;

    constructor(radius: number) {
        this._radius = radius;
    }

    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        if (value <= 0) {
            throw new Error("Radius must be positive");
        }
        this._radius = value;
    }

    public area(): number {
        return Math.PI * this._radius * this._radius;
    }
}

let circle = new Circle(10);
console.log(circle.area());

circle.radius = 20;
console.log(circle.area());

// circle.radius = -5;

//Inheritance
class Animal3 {
    constructor(public name: string) {}

    public move(distance: number): void {
        console.log(`${this.name} moved ${distance} meters.`);
    }
}

class Bird extends Animal3 {
    constructor(name: string) {
        super(name);
    }

    public fly(distance: number): void {
        console.log(`${this.name} flew ${distance} meters.`);
    }
}

let bird = new Bird("Parrot");
bird.move(5);
bird.fly(10);