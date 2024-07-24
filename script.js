//Global Variables (might change later)

let firstNumber = [];
let secondNumber = [];
let operator;

//DOM node selection
const num0 = document.querySelector("#cero");
const num1 = document.querySelector("#one");
const num2 = document.querySelector("#two");
const num3 = document.querySelector("#three");
const num4 = document.querySelector("#four");
const num5 = document.querySelector("#five");
const num6 = document.querySelector("#six");
const num7 = document.querySelector("#seven");
const num8 = document.querySelector("#eight");
const num9 = document.querySelector("#nine");
const sum = document.querySelector("#sum");
const sub = document.querySelector("#sub");
const mult = document.querySelector("#mult");
const divi = document.querySelector("#divi");
const clear = document.querySelector("#clear");
const equals = document.querySelector("#equals");
const buttons = document.querySelectorAll(".button");
const operatorButtons = document.querySelectorAll(".operator-button");
const display = document.querySelector(".display");


//Event Listeners to change color on mouseover for all number buttons
buttons.forEach((button) => button.addEventListener("mouseover", () => { button.style["background-color"] = "blue" }));
buttons.forEach((button) => button.addEventListener("mouseout", () => { button.style["background-color"] = "rgb(57, 87, 87" }));

//Event Listeners to change color on mouseover for all operator buttons
operatorButtons.forEach((button) => button.addEventListener("mouseover", () => { button.style["background-color"] = "blue" }));
operatorButtons.forEach((button) => button.addEventListener("mouseout", () => { button.style["background-color"] = "rgb(35, 60, 60)" }))

//equals event listener, for now, just a test to print variables in the console
equals.addEventListener("click", () => { console.log(firstNumber); });

//Clear button event listener to reset operation
clear.addEventListener("click", () => {
    firstNumber = [];
    secondNumber = [];
    let firstNumberdisplay = firstNumber.join("");
    let secondNumberdisplay = firstNumber.join("");
    display.textContent = firstNumberdisplay;
})

//Event listeners to add specified number to firstNumber array when clicking the number button
num0.addEventListener("click", () => { getFirstNumber(0) });
num1.addEventListener("click", () => { getFirstNumber(1) });
num2.addEventListener("click", () => { getFirstNumber(2) });
num3.addEventListener("click", () => { getFirstNumber(3) });
num4.addEventListener("click", () => { getFirstNumber(4) });
num5.addEventListener("click", () => { getFirstNumber(5) });
num6.addEventListener("click", () => { getFirstNumber(6) });
num7.addEventListener("click", () => { getFirstNumber(7) });
num8.addEventListener("click", () => { getFirstNumber(8) });
num9.addEventListener("click", () => { getFirstNumber(9) });


//functions


function getFirstNumber(number) {
    firstNumber.push(number);
    let firstNumberdisplay = firstNumber.join("");
    display.textContent = firstNumberdisplay;
}

function getSecondNumber(number) {
    secondNumber.push(number);
    let secondNumberdisplay = firstNumber.join("");
    display.textContent = secondNumberdisplay;
}



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

