// Factorial using function expression
const factorial = function (n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
};

// Largest element using arrow function with rest parameter
const findMax = (arr) => Math.max(...arr);

// to execute the functions immediately
(function () {
    console.log("Factorial of 5:", factorial(5)); // Output: 120
    console.log("Largest element in [3, 7, 2, 9, 5]:", findMax([3, 7, 2, 9, 5])); // Output: 9
})();