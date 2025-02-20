// Create an array of numbers and find the sum using reduce()
const numbers = [5, 10, 15, 20, 25];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of numbers:", sum);

// Function to filter even numbers from an array
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
console.log("Even numbers:", filterEvenNumbers(numbers));

// Create an object representing a book and display its properties
const book = {
    title: "Harry Potter ",
    author: "J. K. Rowling",
    year: 1960
};
console.log("Book Details:", book);

// Add methods to an object to perform specific tasks
book.getSummary = function () {
    return `${this.title} by ${this.author}, published in ${this.year}.`;
};
console.log("Book Summary:", book.getSummary());
