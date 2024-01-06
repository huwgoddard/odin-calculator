
//light up the operator button that's in effect?

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
    firstNum=parseFloat(firstNum);
    secondNum=parseFloat(secondNum);
    let result = undefined;
    if (operator==='+') {
        result = add(firstNum, secondNum);
    } else if (operator==='-') {
        result = subtract(firstNum, secondNum);
    } else if (operator==='×') {
        result = multiply(firstNum, secondNum);
    } else if (operator==='÷') {
        if (secondNum===0) {
            return "🙁"
        }
        result = divide(firstNum, secondNum);
    } else {
        console.log("operate error", firstNum, operator, secondNum);
    }
    if (result > 999999) {
        return ">999999"
    } else if (result.toString().length > 7 
                && result.toString().includes(".")) {
        let decimal = 7-(result.toString().indexOf(".")+1)
        return result.toFixed(decimal)
    } else {
        return result
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
let backspaceButton = document.querySelector('#backspace');
let decimalButton = document.querySelector('#decimal');

function updateDisplay(value) {
    if ((display.textContent+value).length > 7) {
        console.log('too long');
    } else {
        display.textContent+=value;
    }
}

function clickClear(e) {
    display.textContent='0';
    firstNum=undefined;
    operator=undefined;
    newNum=true;
}

function clickNumber(e, k=undefined) {
    if (newNum) {
        display.textContent='';
    }
    updateDisplay(e.target.textContent);
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

function clickOperator(e, k=undefined) {
    if (operator && operator !== e.target.textContent) {
        operator=e.target.textContent;
        newNum=true;
    } else if (firstNum && operator) {
        let secondNum = display.textContent;
        let result=operate(firstNum,operator,secondNum);
        display.textContent=result;
        firstNum=result;
        newNum=true;
        operator=e.target.textContent;
    } else if (firstNum && !operator) {
        operator=e.target.textContent;
        newNum=true;
    } else if (!firstNum && !operator) {
        firstNum=display.textContent;
        operator=e.target.textContent;
        newNum=true;
    } else {
        console.log("clickOperator error")
    }
}

function clickBackspace(e) {
    display.textContent=display.textContent.slice(0,display.textContent.length-1)
}

function clickDecimal(e) {
    if (!display.textContent.includes(".")) {
        display.textContent+=".'"
    }
}

Array.from(numButtons).forEach( 
    btn => { btn.addEventListener('click', clickNumber) }
)

Array.from(opButtons).forEach(
    btn => { btn.addEventListener('click', clickOperator) }
) 

equalButton.addEventListener('click', clickEquals);

clearButton.addEventListener('click', clickClear);

backspaceButton.addEventListener('click', clickBackspace)

decimalButton.addEventListener('click', clickDecimal);

document.addEventListener('keydown', function(e) {
    console.log(e.target)
    if (e.target.key==1) {
        console.log("one")
    }
})
