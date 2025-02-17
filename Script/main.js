// Declare and initialize variables
let num = 10;
let str = "Hello";
let bool = true;
let obj = { name: "Alice", age: 25 };
let arr = [1, 2, 3, 4, 5];

// Perform arithmetic operations
console.log("Addition:", num + 5);
console.log("Subtraction:", num - 5);
console.log("Multiplication:", num * 2);
console.log("Division:", num / 2);
console.log("Modulus:", num % 3);

// Greeting script
function greetUser() {
    let name = document.getElementById("nameInput").value;
    document.getElementById("greetingMessage").innerText = "Hello, " + name + "!";
}

// Experiment with type conversions
let strToNum = Number("789");
let numToStr = String(456);
let boolToStr = String(true);
console.log("Converted string to number:", strToNum);
console.log("Converted number to string:", numToStr);
console.log("Converted boolean to string:", boolToStr);

// Calculate the area of a rectangle
function calculateArea() {
    let length = parseFloat(document.getElementById("length").value);
    let width = parseFloat(document.getElementById("width").value);
    let area = length * width;
    document.getElementById("areaResult").innerText = "Area: " + area;
}

// Detect input type
function detectType() {
    let input = document.getElementById("typeInput").value;
    let result = isNaN(input) ? "String" : "Number";
    document.getElementById("typeResult").innerText = "Input Type: " + result;
}

// Ways to create objects
let obj1 = {}; // Object literal
let obj2 = new Object(); // Object constructor
let obj3 = Object.create({}); // Object.create


// Ways to create arrays
let arr1 = [1, 2, 3];
let arr2 = new Array(4, 5, 6);
let arr3 = Array.of(7, 8, 9);

// Ways to create strings
let str1 = "Hello";
let str2 = new String("World");

// Array methods
arr1.push(4);
console.log("Array after push:", arr1);
let mappedArr = arr1.map(x => x * 2);
console.log("Mapped Array:", mappedArr);

let numbers = [10, 25, 30, 45, 50, 65];
// Use filter to get numbers greater than 30
let filteredNumbers = numbers.filter(num => num > 30);

console.log("Original Array:", numbers);
console.log("Filtered Array (numbers > 30):", filteredNumbers);


// Using reduce to calculate the sum of all numbers
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log("Original Array:", numbers);
console.log("Sum of all elements:", sum);

// Using reduce to find the maximum value
let maxNumber = numbers.reduce((max, num) => (num > max ? num : max), numbers[0]);

console.log("Maximum number in the array:", maxNumber);


// String initialization
let text = "JavaScript is awesome!";
let name = "John Doe";

// String methods
console.log("Character at index 1:", str1.charAt(1));
console.log("Uppercase:", str1.toUpperCase());
console.log("LowerCase:",str2.toLowerCase())
console.log("Length of text:", text.length); // Finds string length
console.log("Substring from index 0 to 10:", text.substring(0, 10)); // Extracts a part of the string
console.log("Replacing 'awesome' with 'powerful':", text.replace("awesome", "powerful")); // Replaces text
console.log("Does the text include 'JavaScript'?", text.includes("JavaScript")); // Checks if substring exists
console.log("Splitting text into words:", text.split(" ")); // Splits the string into an array
console.log("Trimming spaces from name:", name.trim()); // Removes whitespace from both ends
console.log("Repeating text 2 times:", text.repeat(2)); // Repeats the string
console.log("Character at index 5:", text.charAt(5)); // Gets character at specific position



// Logical operators
console.log("AND Operator:", true && false); // false
console.log("OR Operator:", true || false);  // true
