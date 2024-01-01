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
            return "pity the foo who divides by zero"
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

let display = document.querySelector('#display');
let numButtons = document.querySelectorAll('.number');
let opButtons = document.querySelectorAll('.operator');
let equalButton = document.querySelector('#equals');
let clearButton = document.querySelector('#clear');

function updateDisplay(e) {
    if (operator && newNum) {
        display.textContent='';
        newNum = false;
    }
    display.textContent+=e.target.textContent;
}


function setOperator(e) {
    if (firstNum && operator) {
        equals();
    } else {
        firstNum=parseInt(display.textContent);
        operator=e.target.textContent;
        newNum=true;
    }
}


function equals(e) {
    if (firstNum && operator) {
        secondNum = parseInt(display.textContent);
        let result = operate(firstNum,operator,secondNum);
        display.textContent = result;
        firstNum=result;
        secondNum=undefined;
        operator=undefined;
        newNum=true;
    }
}

function clear(e) {
    display.textContent='';
    firstNum=undefined;
    operator=undefined;
    secondNum=undefined;
}

Array.from(numButtons).forEach( 
    btn => { btn.addEventListener('click', updateDisplay) }
)

Array.from(opButtons).forEach(
    btn => { btn.addEventListener('click', setOperator) }
    )
    
equalButton.addEventListener('click', equals);

clearButton.addEventListener('click', clear);

    


//light up the operator button that's in effect?

//add clear button