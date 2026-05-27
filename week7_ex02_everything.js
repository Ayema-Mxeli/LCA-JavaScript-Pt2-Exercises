// TODO: Create a function called sum
function sum(num) {

    // Check if value is a number and an integer
    if (typeof num !== "number" || num % 1 !== 0) {
        return "The value passed is not a number";
    }

    let total = 0;

    for (let i = 0; i <= num; i++) {
        total += i;
    }

    return total;
}

// Testing sum function
console.log(sum(5));       // 15
console.log(sum(10));      // 55
console.log(sum("hello")); // The value passed is not a number
console.log(sum(4.5));     // The value passed is not a number



// TODO: Create a function called factorial
function factorial(num) {

    let result = 1;
    let output = "";

    for (let i = num; i >= 1; i--) {
        result *= i;

        output += i;

        if (i !== 1) {
            output += "*";
        }
    }

    console.log(output + " = " + result);
}

// Testing factorial function
factorial(4); // 4*3*2*1 = 24
factorial(5); // 5*4*3*2*1 = 120



// TODO: Create a function called funkyMath
function funkyMath(a, b, c, d) {

    // If called with 2 arguments
    if (arguments.length === 2) {
        return b - a;
    }

    // If called with 3 arguments
    else if (arguments.length === 3) {
        return a + b + c;
    }

    // If called with 4 arguments
    else if (arguments.length === 4) {
        return (a + b) / (c + d);
    }

    else {
        return "Invalid number of arguments";
    }
}

// Testing funkyMath
console.log(funkyMath(5, 10));       // 5
console.log(funkyMath(2, 3, 4));     // 9
console.log(funkyMath(8, 2, 3, 5));  // 1.25



// TODO: Remove odd numbers from array and add them to a new array
let numbers = [1, 2, 33, 45, 6, 44];

let oddNumbers = [];
let evenNumbers = [];

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] % 2 !== 0) {
        oddNumbers.push(numbers[i]);
    } else {
        evenNumbers.push(numbers[i]);
    }
}

// Bonus: arrange odd numbers from smallest to biggest
oddNumbers.sort(function(a, b) {
    return a - b;
});

console.log("Original Array:", numbers);
console.log("Odd Numbers:", oddNumbers);
console.log("Even Numbers:", evenNumbers);



// TODO: Create an object called 'me'
let me = {
    firstName: "Ayema",
    lastName: "Mxeli",
    age: 20,
    favouriteColour: "Pink",
    dreamCar: "Mini cooper"
};

console.log(me);



// TODO: Add favourite food property
me.favouriteFood = "Pizza";

console.log(me);



// TODO: Delete age property
delete me.age;

console.log(me);