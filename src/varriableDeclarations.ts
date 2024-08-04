function varExample() {
    // console.log(x); Output: undefined (due to hoisting)
    var x = 10;
    if (true) {
        var x = 20;
        console.log(x); // Output: 20
    }
    console.log(x); // Output: 20 (var is function-scoped)
}

varExample();


function letExample() {
    // console.log(y); // Error: Cannot access 'y' before initialization
    let y = 10;
    if (true) {
        let y = 30;
        console.log(y); // Output: 20
    }
    console.log(y); // Output: 10 (let is block-scoped)
}

letExample();


function constExample() {
    const z = 5;
    // z = 20; // Error: Assignment to constant variable.
    if (true) {
        const z = 40;
        console.log(z); // Output: 20
    }
    console.log(z); // Output: 10 (const is block-scoped)
}

constExample();
