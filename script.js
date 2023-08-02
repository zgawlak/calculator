"use strict";

let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let currentValue = "";

let currentCalc = document.querySelector('.current-calc');
let numberButtons = document.querySelectorAll('.num-buttons');

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

function updateDisplayValue(e) {
    currentValue += e.target.textContent;
    currentCalc.textContent = currentValue;
}

numberButtons.forEach((button) => {
    button.addEventListener('click', updateDisplayValue);
});