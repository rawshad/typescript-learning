"use strict";
function add(x, y) {
    return x + y;
}
console.log(add(2, 3));
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + " " + lastName;
    }
    else {
        return firstName;
    }
}
console.log(buildName("Alice"));
console.log(buildName("Alice", "Johnson"));
function buildNameWithDefault(firstName, lastName) {
    if (lastName === void 0) { lastName = "Smith"; }
    return firstName + " " + lastName;
}
console.log(buildNameWithDefault("Alice"));
console.log(buildNameWithDefault("Alice", "Johnson"));
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (acc, curr) { return acc + curr; }, 0);
}
console.log(sum(1, 2, 3));
console.log(sum(4, 5, 6, 7));
var myAdd = function (x, y) {
    return x + y;
};
console.log(myAdd(10, 20));
var multiply = function (x, y) {
    return x * y;
};
console.log(multiply(3, 4)); // Output: 12
// With implicit return
var square = function (x) { return x * x; };
console.log(square(5));
function combine(input1, input2) {
    if (typeof input1 === 'string' && typeof input2 === 'string') {
        return input1 + input2;
    }
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        return input1 + input2;
    }
}
console.log(combine("Hello, ", "World!"));
console.log(combine(10, 20));
