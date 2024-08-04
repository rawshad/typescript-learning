"use strict";
//boolean
var isDone = true;
console.log(isDone);
//Number type represents both integer and floating point numbers
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
console.log(decimal, hex, binary, octal);
//The string type is used to represent text data.
var color = "blue";
color = 'red';
var fullName = "Alice Johnson";
var age = 25;
var sentence = "Hello, my name is ".concat(fullName, ". I'll be ").concat(age + 1, " years old next month.");
console.log(sentence);
//Array
var list = [1, 2, 3];
var anotherList = [4, 5, 6];
console.log(list);
console.log(anotherList);
//Tuples
var x;
x = ["hello", 10];
console.log(x[0].substring(1));
console.log(x[1].toFixed(2));
//Enum
var newColor;
(function (newColor) {
    newColor[newColor["Red"] = 0] = "Red";
    newColor[newColor["Green"] = 1] = "Green";
    newColor[newColor["Blue"] = 2] = "Blue";
})(newColor || (newColor = {}));
var c = newColor.Green;
console.log(c);
var ColorWithValues;
(function (ColorWithValues) {
    ColorWithValues[ColorWithValues["Red"] = 1] = "Red";
    ColorWithValues[ColorWithValues["Green"] = 2] = "Green";
    ColorWithValues[ColorWithValues["Blue"] = 3] = "Blue";
})(ColorWithValues || (ColorWithValues = {}));
var colorName = ColorWithValues[2];
console.log(colorName);
//ANY
var notSure = 4;
notSure = "maybe a string instead";
notSure = false;
console.log(notSure);
//Void
function warnUser() {
    console.log("This is a warning message");
}
warnUser();
//Null and Undefined
var u = undefined;
var n = null;
console.log(u, n);
//Never
function error(message) {
    throw new Error(message);
}
function fail() {
    return error("Something failed");
}
function infiniteLoop() {
    while (true) { }
}
