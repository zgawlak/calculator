"use strict";

let firstNumber = 0;
let secondNumber = 0;
let operator = "";

let currentCalc = document.querySelector('.current-calc');
let prevCalc = document.querySelector('.prev-calc');
let numberButtons = document.querySelectorAll('.num-buttons');
let operatorButtons = document.querySelectorAll('.op-buttons');
let equalsButton = document.querySelector('.equals-button');

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(first, second) {
    switch (operator) {
        case "+":
            add(first, second);
            break;
        case "-":
            subtract(first, second);
            break;
        case "*":
            multiply(first, second);
            break;
        case "/":
            divide(first, second);
            break;
    }
}

function appendNumber(e) {
    if (currentCalc.textContent === "0") resetScreen();
    currentCalc.textContent += e.target.textContent;
}

function resetScreen() {
    currentCalc.textContent = "";
}

numberButtons.forEach((button) => {
    button.addEventListener('click', appendNumber);
});