// Function to check if a number is even or odd
function checkEvenOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}

// Function to display the multiplication table of a given number
function multiplicationTable(num) {
    let table = "";
    for (let i = 1; i <= 10; i++) {
        table += `${num} x ${i} = ${num * i}<br>`;
    }
    return table;
}

// Function to display the day of the week based on user input
function getDayOfWeek(dayNumber) {
    let day;
    switch (parseInt(dayNumber)) {
        case 1: day = "Sunday"; break;
        case 2: day = "Monday"; break;
        case 3: day = "Tuesday"; break;
        case 4: day = "Wednesday"; break;
        case 5: day = "Thursday"; break;
        case 6: day = "Friday"; break;
        case 7: day = "Saturday"; break;
        default: day = "Invalid day number";
    }
    return day;
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
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Event listeners for the HTML buttons
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("checkEvenOddBtn").addEventListener("click", function () {
        let num = document.getElementById("numberInput").value;
        document.getElementById("evenOddResult").innerHTML = checkEvenOdd(num);
    });

    document.getElementById("multiplicationTableBtn").addEventListener("click", function () {
        let num = document.getElementById("multiplicationInput").value;
        document.getElementById("multiplicationResult").innerHTML = multiplicationTable(num);
    });

    document.getElementById("dayOfWeekBtn").addEventListener("click", function () {
        let dayNum = document.getElementById("dayInput").value;
        document.getElementById("dayResult").innerHTML = getDayOfWeek(dayNum);
    });

    document.getElementById("sumBtn").addEventListener("click", function () {
        document.getElementById("sumResult").innerHTML = sumOfFirst10NaturalNumbers();
    });

    document.getElementById("reverseStringBtn").addEventListener("click", function () {
        let str = document.getElementById("stringInput").value;
        document.getElementById("reverseResult").innerHTML = reverseString(str);
    });
});
