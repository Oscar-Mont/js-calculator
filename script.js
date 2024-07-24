//functions

function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function substract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

let firstNumber;
let secondNumber;
let operator;

function operate(operator) {
    switch (operator) {
        case "+":
            add();
            break;
        case "-":
            substract();
            break;
        case "*":
            multiply();
            break;
        case "/":
            divide();
            break;
        default:
            alert("someting went wrong");
            break;
    }
}