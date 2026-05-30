// TODO: Create a function that validates user input
function validateUserInput(name) {
    try {
        if (typeof name !== "string") {
            throw new TypeError("Input must be a string.");
        }

        if (name.trim() === "") {
            throw new Error("Input cannot be empty.");
        }

        console.log("Valid input:", name);
    } catch (error) {
        console.log("Validation Error:", error.message);
    }
}

// Test validation
validateUserInput("Ayema");
validateUserInput("");
validateUserInput(123);

// TODO: Create a function that demonstrates multiple error types
function demonstrateErrors(value) {
    try {
        if (value === null) {
            throw new ReferenceError("Value cannot be null.");
        }

        if (typeof value !== "number") {
            throw new TypeError("Value must be a number.");
        }

        if (value < 0) {
            throw new RangeError("Value cannot be negative.");
        }

        console.log("Valid number:", value);
    } catch (error) {
        console.log(`${error.name}: ${error.message}`);
    }
}

// Test different errors
demonstrateErrors(null);
demonstrateErrors("hello");
demonstrateErrors(-5);
demonstrateErrors(10);

// TODO: Create a collection of helper functions for string manipulation
function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function reverseString(text) {
    return text.split("").reverse().join("");
}

function countCharacters(text) {
    return text.length;
}

// Test string helpers
console.log(capitalize("javascript"));
console.log(reverseString("hello"));
console.log(countCharacters("Ayema"));

// TODO: Create helper functions for array operations
function getSum(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

function getMax(numbers) {
    return Math.max(...numbers);
}

function removeDuplicates(numbers) {
    return [...new Set(numbers)];
}

// Test array helpers
const nums = [1, 2, 2, 3, 4, 4, 5];

console.log("Sum:", getSum(nums));
console.log("Max:", getMax(nums));
console.log("Without Duplicates:", removeDuplicates(nums));