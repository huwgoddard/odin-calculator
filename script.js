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
    }
}

let firstNum = 0;
let operator = undefined;
let secondNum = undefined;
let newNum = false;

let display = document.querySelector('#display')
let numButtons = document.querySelectorAll('.number');
let opButtons = document.querySelectorAll('.operator');


function updateDisplay(e) {
    if (operator && newNum) {
        display.textContent='';
        newNum = false;
    }
    display.textContent+=e.target.textContent;
}

function setOperator(e) {
    operator=e.target.textContent;
    newNum=true;
}

Array.from(numButtons).forEach( 
    btn => { btn.addEventListener('click', updateDisplay) }
)

Array.from(opButtons).forEach(
    btn => { btn.addEventListener('click', setOperator) }
)



//light up the operator button that's in effect