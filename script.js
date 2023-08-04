"use strict";

let firstNumber = '';
let secondNumber = '';
let operator = null;
let resetCurrentCalc = false;

const currentCalc = document.querySelector('.current-calc');
const prevCalc = document.querySelector('.prev-calc');

const numberButtons = document.querySelectorAll('.num-buttons');
const decimalButton = document.querySelector('.decimal-button');
const operatorButtons = document.querySelectorAll('.op-buttons');

const equalsButton = document.querySelector('.equals-button');
const clearButton = document.querySelector('.clear-button');
const deleteButton = document.querySelector('.delete-button');

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

function appendNumber(number) {
    if (currentCalc.textContent === "0" || resetCurrentCalc) clearCurrentCalc();
    currentCalc.textContent += number;
}

function appendDecimal() {
    if (resetCurrentCalc) clearCurrentCalc();
    if (currentCalc.textContent === '')
        currentCalc.textContent = '0'
    if (currentCalc.textContent.includes('.')) return
    currentCalc.textContent += '.'
}

function chooseOperator(operatorBtn) {
    if (operator !== null) calculate();
    operator = operatorBtn;
    firstNumber = currentCalc.textContent;
    prevCalc.textContent = `${firstNumber} ${operator}`;
    resetCurrentCalc = true;
}

function deleteNumber() {
    currentCalc.textContent = currentCalc.textContent
        .toString()
        .slice(0, -1);
}

function clearCurrentCalc() {
    currentCalc.textContent = "";
    resetCurrentCalc = false;
}

function clearCalculations() {
    currentCalc.textContent = '0';
    prevCalc.textContent = '';
    firstNumber = '';
    secondNumber = '';
    operator = null;
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
    resetCurrentCalc = true;
}

function roundNumber(number) {
    return Math.round(number * 1000) / 1000;
}

function handleKeyboardInput(e) {
    if (e.key >= 0 && e.key <= 9) appendNumber(e.key);
    if (e.key === '.') appendDecimal();
    if (e.key === '=' || e.key === 'Enter') calculate();
    if (e.key === 'Backspace') deleteNumber();
    if (e.key === 'Escape') clearCalculations();
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/')
        chooseOperator(convertKeyToOperator(e.key));
}

function convertKeyToOperator(operatorKey) {
    if (operatorKey === '/') return '÷';
    if (operatorKey === '*') return '×';
    if (operatorKey === '-') return '−';
    if (operatorKey === '+') return '+';
}

window.addEventListener('keydown', handleKeyboardInput);
numberButtons.forEach((button) => {
    button.addEventListener('click', () =>
    {
        appendNumber(button.textContent);
    });
});
decimalButton.addEventListener('click', appendDecimal);
operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        chooseOperator(button.textContent);
    });
});

clearButton.addEventListener('click', clearCalculations);
equalsButton.addEventListener('click', calculate);
deleteButton.addEventListener('click', deleteNumber);