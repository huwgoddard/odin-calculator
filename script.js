
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


function clickEquals(e, k=undefined) {
    let v=undefined;
    if (k) {
        v=k
    } else {
        v=e.target.textContent
    }
    if (firstNum && operator) {
        let secondNum=display.textContent;
        let result=operate(firstNum,operator,secondNum);
        display.textContent=result;
        firstNum=result;
        operator=undefined;
        newNum=true;
    }
}

function clickNumber(e, k=undefined) {
    let v = undefined;
    if (k) {
        v=k
    } else {
        v=e.target.textContent
    }
    if (newNum) {
        display.textContent='';
    }
    updateDisplay(v);
    newNum=false;
}

function clickOperator(e, k=undefined) {
    let v=undefined;
    if (k) {
        v=k 
    } else {
        v=e.target.textContent
    }
    console.log("clickOp", "e", e, "k", k, "v", v)
    if (operator && operator !== v) {
        operator=v;
        newNum=true;
    } else if (firstNum && operator) {
        let secondNum = display.textContent;
        let result=operate(firstNum,operator,secondNum);
        display.textContent=result;
        firstNum=result;
        newNum=true;
        operator=v;
    } else if (firstNum && !operator) {
        operator=v;
        newNum=true;
    } else if (!firstNum && !operator) {
        firstNum=display.textContent;
        operator=v;
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

window.addEventListener('keydown', function(e) {
    console.log(e.key)
    if (e.key in [0,1,2,3,4,5,6,7,8,9]) {
        clickNumber(e, e.key)
    } else if (e.key=="=") {
        clickEquals(e, e.key)
    } else if (e.key=='-') {
        clickOperator(e, e.key)
    } else if (e.key=='*') {
        clickOperator(e, "×")
    } else if (e.key=='/') {
        e.preventDefault()
        clickOperator(e, "÷")
    }
})
