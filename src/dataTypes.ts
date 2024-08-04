//boolean
let isDone: boolean = true;
console.log(isDone);

//Number type represents both integer and floating point numbers
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
console.log(decimal, hex, binary, octal);

//The string type is used to represent text data.
let color: string = "blue";
color = 'red';
let fullName: string = `Alice Johnson`;
let age: number = 25;
let sentence: string = `Hello, my name is ${fullName}. I'll be ${age + 1} years old next month.`;
console.log(sentence);

//Array
let list: number[] = [1, 2, 3];
let anotherList: Array<number> = [4, 5, 6];

console.log(list);
console.log(anotherList);

//Tuples
let x: [string, number];
x = ["hello", 10];

console.log(x[0].substring(1));
console.log(x[1].toFixed(2));

//Enum
enum newColor {
    Red,
    Green,
    Blue
}

let c: newColor = newColor.Green;
console.log(c);

enum ColorWithValues {
    Red = 1,
    Green,
    Blue
}

let colorName: string = ColorWithValues[2];
console.log(colorName);

//ANY
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;
console.log(notSure);

//Void
function warnUser(): void {
    console.log("This is a warning message");
}
warnUser();

//Null and Undefined
let u: undefined = undefined;
let n: null = null;

console.log(u, n);

//Never
function error(message: string): never {
    throw new Error(message);
}

function fail() {
    return error("Something failed");
}

function infiniteLoop(): never {
    while (true) {}
}