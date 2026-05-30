// TODO: Create a multiline string using template literals
const message = `
Welcome to JavaScript!
This is a multiline string.
Template literals make formatting easy.
`;

console.log(message);

// TODO: Create a function that uses template literals for HTML generation
const createCard = (name, role) => {
    return `
    <div class="card">
        <h2>${name}</h2>
        <p>${role}</p>
    </div>
    `;
};

console.log(createCard("Ayema Mxeli", "Student"));

// TODO: Convert regular functions to arrow functions
const add = (a, b) => a + b;

const greet = name => `Hello, ${name}!`;

console.log(add(5, 3));
console.log(greet("Ayema"));

// TODO: Use arrow functions with array methods
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(num => num * 2);

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log("Doubled Numbers:", doubledNumbers);
console.log("Even Numbers:", evenNumbers);