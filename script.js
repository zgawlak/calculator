"use strict";

let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let currentValue = "";
let prevValue = "";

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
} ``

function handleNumberBtn(e) {
    currentValue += e.target.textContent;
    currentCalc.textContent = currentValue;
}

function handleOperatorBtn(e) {
    if (!prevValue) {
        prevValue += currentValue;
        prevValue += " " + operator;
        prevCalc.textContent = prevValue;
        firstNumber = Number(currentValue);
    }
    else {
        prevValue = currentValue + " " + operator;
        prevCalc.textContent = prevValue;
    }
}

operatorButtons.forEach((button) => {
    button.addEventListener('click', updateOperator);
});

numberButtons.forEach((button) => {
    button.addEventListener('click', handleNumberBtn);
});

operatorButtons.forEach((button) => {
    button.addEventListener('click', handleOperatorBtn);
});
