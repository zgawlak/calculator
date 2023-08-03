"use strict";

let firstNumber = '';
let secondNumber = '';
let operator = null;
let resetCurrentCalc = false;

let currentCalc = document.querySelector('.current-calc');
let prevCalc = document.querySelector('.prev-calc');

let numberButtons = document.querySelectorAll('.num-buttons');
let decimalButton = document.querySelector('.decimal-button');
let operatorButtons = document.querySelectorAll('.op-buttons');

let equalsButton = document.querySelector('.equals-button');
let clearButton = document.querySelector('.clear-button');
let deleteButton = document.querySelector('.delete-button');

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
    first = Number(first);
    second = Number(second);
    switch (operator) {
        case "+":
            return add(first, second);
        case "-":
            return subtract(first, second);
        case "x":
            return multiply(first, second);
        case "÷":
            return divide(first, second);
    }
}

function appendNumber(e) {
    if (currentCalc.textContent === "0" || resetCurrentCalc) clearCurrentCalc();
    currentCalc.textContent += e.target.textContent;
}

function appendDecimal() {
    if (resetCurrentCalc) clearCurrentCalc();
    if (currentCalc.textContent === '')
        currentCalc.textContent = '0'
    if (currentCalc.textContent.includes('.')) return
    currentCalc.textContent += '.'
}

function chooseOperator(e) {
    if (operator !== null) calculate();
    operator = e.target.textContent;
    firstNumber = currentCalc.textContent;
    prevCalc.textContent = `${firstNumber} ${operator}`;
    resetCurrentCalc = true;
}

function clearCurrentCalc() {
    currentCalc.textContent = "";
    resetCurrentCalc = false;
}

function calculate() {
    if (operator === null || resetCurrentCalc) return
    if (operator === '÷' && currentCalc.textContent === '0') {
        alert("Impossible!");
        return
    }
    secondNumber = currentCalc.textContent;
    currentCalc.textContent = roundNumber(operate(firstNumber, secondNumber));
    prevCalc.textContent = `${firstNumber} ${operator} ${secondNumber} =`
    operator = null;
}

function roundNumber(number) {
    return Math.round(number * 1000) / 1000;
}

function deleteNumber() {
    currentCalc.textContent = currentCalc.textContent
        .toString()
        .slice(0, -1);
}

function clearCalculations() {
    currentCalc.textContent = '0';
    prevCalc.textContent = '';
    firstNumber = '';
    secondNumber = '';
    operator = null;
}

numberButtons.forEach((button) => {
    button.addEventListener('click', appendNumber);
});
decimalButton.addEventListener('click', appendDecimal);
operatorButtons.forEach((button) => {
    button.addEventListener('click', chooseOperator);
});

clearButton.addEventListener('click', clearCalculations);
equalsButton.addEventListener('click', calculate);
deleteButton.addEventListener('click', deleteNumber);