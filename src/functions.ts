function add(x: number, y: number): number {
    return x + y;
}

console.log(add(2, 3));


function buildName(firstName: string, lastName?: string): string {
    if (lastName) {
        return firstName + " " + lastName;
    } else {
        return firstName;
    }
}

console.log(buildName("Alice"));
console.log(buildName("Alice", "Johnson"));

function buildNameWithDefault(firstName: string, lastName: string = "Smith"): string {
    return firstName + " " + lastName;
}

console.log(buildNameWithDefault("Alice"));
console.log(buildNameWithDefault("Alice", "Johnson"));

function sum(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3));
console.log(sum(4, 5, 6, 7));


let myAdd: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};

console.log(myAdd(10, 20));

let multiply = (x: number, y: number): number => {
    return x * y;
};

console.log(multiply(3, 4)); // Output: 12

// With implicit return
let square = (x: number): number => x * x;

console.log(square(5));


function combine(input1: string, input2: string): string;
function combine(input1: number, input2: number): number;
function combine(input1: any, input2: any): any {
    if (typeof input1 === 'string' && typeof input2 === 'string') {
        return input1 + input2;
    }
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        return input1 + input2;
    }
}

console.log(combine("Hello, ", "World!"));
console.log(combine(10, 20));


