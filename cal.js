/* variable declarations  */


let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousInput = '';

/* Event Listeners */

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

/* appneding function */

function appendOperator(op) {
    if (currentInput === '' && op !== '-') return; 
    // prevent adding operator at the start except for '-'
    if (operator !== '') calculate(); 
    
    //to help me Calculate if there's already an operator
    operator = op;
    previousInput = currentInput;
    currentInput = '';
    display.value = previousInput + ' ' + operator + ' ';
}


/* To calculate the final result*/
function calculate() {
    if (previousInput === '' || currentInput === '') return; //this helps me  Prevent calculation if inputs are incomplete
    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);
    switch (operator) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
        default:
            return;
    }
    display.value = result;
    currentInput = result.toString();
    operator = '';
    previousInput = '';
}


/* clear screen display */


function clearDisplay() {
    currentInput = '';
    operator = '';
    previousInput = '';
    display.value = '';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
}


let Ans = 0; // Global answer variable

function calculate() {
    if (previousInput === '' || currentInput === '') return;
    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);
    switch (operator) {
        case '+': result = prev + curr; break;
        case '-': result = prev - curr; break;
        case '*': result = prev * curr; break;
        case '/': result = prev / curr; break;
        default: return;
    }

    Ans = result; // Save answer
    display.value = result;
    currentInput = result.toString();
    operator = '';
    previousInput = '';
}


function appendAnswer() {
    currentInput += Ans;
    display.value = currentInput;
}