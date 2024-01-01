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
        if (secondNum===0) {
            return "i pity the fool who tries to divide by zero"
        }
        return divide(firstNum, secondNum);
    } else {
        console.log("operate error");
    }
}

let firstNum = undefined;
let operator = undefined;
let secondNum = undefined;
let newNum = false;

let display = document.querySelector('#display')
let numButtons = document.querySelectorAll('.number');
let opButtons = document.querySelectorAll('.operator');
let equalButton = document.querySelector('#equals')

function updateDisplay(e) {
    if (operator && newNum) {
        display.textContent='';
        newNum = false;
    }
    display.textContent+=e.target.textContent;
}

Array.from(numButtons).forEach( 
    btn => { btn.addEventListener('click', updateDisplay) }
)

function setOperator(e) {
    operator=e.target.textContent;
    newNum=true;
    firstNum=parseInt(display.textContent);
}

Array.from(opButtons).forEach(
    btn => { btn.addEventListener('click', setOperator) }
)

function equals(e) {
    if (firstNum && operator) {
        secondNum = parseInt(display.textContent);
        let result = operate(firstNum,operator,secondNum);
        display.textContent = result;
        secondNum=undefined;
    }
}

equalButton.addEventListener('click', equals);






//light up the operator button that's in effect