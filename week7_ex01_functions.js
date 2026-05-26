// Function to multiply 3 different numbers
function multiply(a, b, c) {
    if (a === b || a === c || b === c) {
        return "Numbers must be different";
    }

    return a * b * c;
}

console.log(multiply(2, 3, 4));

// Function expression to convert minutes to seconds
const convertToSeconds = function(minutes) {
    return minutes * 60;
};

console.log(convertToSeconds(5));

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

console.log(fahrenheitToCelsius(100));

// Function to reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("JavaScript"));

// Function to count vowels in a string
function countVowels(str) {
    let vowels = "aeiouAEIOU";
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("Javascript"));

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

// Testing isPrime with 4 numbers
console.log(isPrime(2));
console.log(isPrime(5));
console.log(isPrime(10));
console.log(isPrime(17));
