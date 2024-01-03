
//light up the operator button that's in effect?

//add clear button

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
    firstNum=parseInt(firstNum);
    secondNum=parseInt(secondNum);
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
        console.log("operate error", firstNum, operator, secondNum);
    }
}

let firstNum = undefined;
let operator = undefined;
let newNum = true;

let display = document.querySelector('#display');
let numButtons = document.querySelectorAll('.number');
let opButtons = document.querySelectorAll('.operator');
let equalButton = document.querySelector('#equals');
let clearButton = document.querySelector('#clear');

function clickClear(e) {
    display.textContent='';
    firstNum=undefined;
    operator=undefined;
    newNum=true;
}

function clickNumber(e) {
    if (newNum) {
        display.textContent='';
    }
    display.textContent+=e.target.textContent;
    newNum=false;
}

function clickEquals(e) {
    if (firstNum && operator) {
        let secondNum=display.textContent;
        let result=operate(firstNum,operator,secondNum);
        display.textContent=result;
        firstNum=result;
        operator=undefined;
        newNum=true;
    }
}

function clickOperator(e) {
    if (!firstNum) {
        firstNum=display.textContent;
    }
    operator=e.target.textContent;
    newNum=true;
}












/*
function clickEquals(e) {
    if (firstNum && operator) {
        let secondNum=display.textContent;
        let result=operate(firstNum,operator,secondNum);
        display.textContent=result;
        firstNum=result;
        newNum=true;
    }
}


function clickOperator(e) {
    newNum=true;
    if (firstNum) {
        let secondNum = display.textContent;
        result=operate(firstNum,operator,secondNum);
        display.textContent=result;
        firstNum=result;
        operator=e.target.textContent;
    } else {
        firstNum=display.textContent;
        operator=e.target.textContent;
    }
}

*/

Array.from(numButtons).forEach( 
    btn => { btn.addEventListener('click', clickNumber) }
)

Array.from(opButtons).forEach(
    btn => { btn.addEventListener('click', clickOperator) }
    )
    
equalButton.addEventListener('click', clickEquals);

clearButton.addEventListener('click', clickClear);

    
