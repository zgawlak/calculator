"use strict";

let firstNumber = '';
let secondNumber = '';
let operator = null;

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
    if (currentCalc.textContent === "0") clearCurrentCalc();
    currentCalc.textContent += e.target.textContent;
}

function chooseOperator(e) {
    if (operator !== null) calculate();
    operator = e.target.textContent;
    firstNumber = currentCalc.textContent;
    prevCalc.textContent = `${firstNumber} ${operator}`;
    clearCurrentCalc();
}

function clearCurrentCalc() {
    currentCalc.textContent = "";
}

function calculate(){
    if (operator === null) return
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

numberButtons.forEach((button) => {
    button.addEventListener('click', appendNumber);
});

operatorButtons.forEach((button) => {
    button.addEventListener('click', chooseOperator);
});