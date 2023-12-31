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

function operate(firstNum, operator, secondNum) {
    if (operator==='+') {
        return add(firstNum, secondNum);
    } else if (operator==='-') {
        return subtract(firstNum, secondNum);
    } else if (operator==='×') {
        return multiply(firstNum, secondNum);
    } else if (operator==='÷') {
        return divide(firstNum, secondNum);
    } else {
        console.log("operate error");
        return "operate error";
    }
}

let firstNum = 0;
let operator = undefined;
let secondNum = undefined;

let display = document.querySelector('#display')

let numButtons = document.querySelectorAll('.number');

function updateDisplay(e) {
    display.textContent+=e.target.textContent;
}

Array.from(numButtons).forEach( 
    btn => { btn.addEventListener('click', updateDisplay) })
