// Function to check if a number is even or odd
function checkEvenOdd(num) {
    num = parseInt(num);
    if (isNaN(num)) return "Please enter a valid number";
    return num % 2 === 0 ? "Even" : "Odd";
}

// Function to display the multiplication table of a given number
function multiplicationTable(num) {
    num = parseInt(num);
    if (isNaN(num)) return "Please enter a valid number";

    let table = [];
    for (let i = 1; i <= 10; i++) {
        table.push(`${num} * ${i} = ${num * i}`);
    }
    return table.join("\n");
}

// Function to display the day of the week based on user input using switch case
function getDayOfWeek(dayNumber) {
    dayNumber = parseInt(dayNumber);

    if (isNaN(dayNumber) || dayNumber < 1 || dayNumber > 7) {
        return "Invalid day number";
    }

    switch (dayNumber) {
        case 1: return "Sunday";
        break;
        case 2: return "Monday";
        break;
        case 3: return "Tuesday";
        break;
        case 4: return "Wednesday";
        break;
        case 5: return "Thursday";
        break;
        case 6: return "Friday";
        break;
        case 7: return "Saturday";
        break;
        default: return "Invalid day number"; // This won't be reached due to the earlier check
        break;
     }

}

// Function to find the sum of the first 10 natural numbers
function sumOfFirst10NaturalNumbers() {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum += i;
    }
    return sum;
}

// Function to reverse a string using a loop
function reverseString(str) {
    str = str.trim();
    if (str === "") return "Please enter a valid string";

    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Event listeners for the HTML buttons
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("checkEvenOddBtn").addEventListener("click", function () {
        const num = document.getElementById("numberInput").value;
        document.getElementById("evenOddResult").innerText = checkEvenOdd(num);
    });

    document.getElementById("multiplicationTableBtn").addEventListener("click", function () {
        const num = document.getElementById("multiplicationInput").value;
        document.getElementById("multiplicationResult").innerHTML = multiplicationTable(num);
    });

    document.getElementById("dayOfWeekBtn").addEventListener("click", function () {
        const dayNum = document.getElementById("dayInput").value;
        document.getElementById("dayResult").innerText = getDayOfWeek(dayNum);
    });

    document.getElementById("sumBtn").addEventListener("click", function () {
        document.getElementById("sumResult").innerText = sumOfFirst10NaturalNumbers();
    });

    document.getElementById("reverseStringBtn").addEventListener("click", function () {
        const str = document.getElementById("stringInput").value;
        document.getElementById("reverseResult").innerText = reverseString(str);
    });
});

