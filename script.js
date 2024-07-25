//Global Variables (might change later)

let firstNumber = [];
let secondNumber = [];
let operator = " ";
let answer = 0;

// ||DOM Node Selection ||
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

// || Functions ||


function getFirstNumber(number) {
    firstNumber.push(number);
    let firstNumberdisplay = firstNumber.join("");
    display.textContent = firstNumberdisplay;
}

function getSecondNumber(number) {
    secondNumber.push(number);
    let secondNumberdisplay = secondNumber.join("");
    display.textContent = secondNumberdisplay;
}

function getOperator(str) {
    operator = str;
    display.textContent = operator;
}

function operate() {
    let opFirstNumber = Number(firstNumber.join(""));
    let opSecondNumber = Number(secondNumber.join(""));
    switch (operator) {
        case "+":
            answer = opFirstNumber + opSecondNumber;
            break;
        case "-":
            answer = opFirstNumber - opSecondNumber;
            break;
        case "/":
            answer = opFirstNumber / opSecondNumber;
            break;
        case "*":
            answer = opFirstNumber * opSecondNumber;
            break;
        default:
            answer = 0;
            break;
    }
    display.textContent = answer;
}

// ||EVENT LISTENERS ||

//Event Listeners to change color on mouseover for all number buttons
buttons.forEach((button) => button.addEventListener("mouseover", () => {
    button.style["background-color"] = "green"
}));
buttons.forEach((button) => button.addEventListener("mouseout", () => {
    button.style["background-color"] = "rgb(57, 87, 87"
}));

//Event Listeners to change color on mouseover for all operator buttons
operatorButtons.forEach((button) => button.addEventListener("mouseover", () => {
    button.style["background-color"] = "blue"
}));
operatorButtons.forEach((button) => button.addEventListener("mouseout", () => {
    button.style["background-color"] = "rgb(35, 60, 60)"
}))

//Clear button event listener to reset calcualtor
clear.addEventListener("click", () => {
    firstNumber = [];
    secondNumber = [];
    operator = " ";
    let firstNumberdisplay = firstNumber.join("");
    let secondNumberdisplay = firstNumber.join("");
    display.textContent = firstNumberdisplay;
})

//Equals button event listener to operate
equals.addEventListener("click", () => {
    console.log(firstNumber);
    console.log(secondNumber);
    operate();
});

//Event listeners to add specified number to firstNumber array when clicking the number button

sum.addEventListener("click", () => {
    //if the second number is not there 
    if (secondNumber.length == 0) {
        getOperator("+");
        //else if there is already a second number
    } else if (secondNumber.length > 0) {
        //perform the operation
        operate();
        //change first number array to an array of the data in answer variable
        firstNumber = answer.toString().split("");
        //reset second number array so it receives info frumt he numbers
        secondNumber = [];
        //reset the operator variable with getOperator() function
        getOperator("+");
        //now clicking "=" button or any operator will perform th eoperation of
        //answer + secondNumber
    }
});

sub.addEventListener("click", () => {

    if (secondNumber.length == 0) {
        getOperator("-");
    } else if (secondNumber.length > 0) {
        operate();
        firstNumber = answer.toString().split("");
        secondNumber = [];
        getOperator("-");
    }
});

mult.addEventListener("click", () => {

    if (secondNumber.length == 0) {
        getOperator("*");
    } else if (secondNumber.length > 0) {
        operate();
        firstNumber = answer.toString().split("");
        secondNumber = [];
        getOperator("*");
    }
});

divi.addEventListener("click", () => {

    if (secondNumber.length == 0) {
        getOperator("/");
    } else if (secondNumber.length > 0) {
        operate();
        firstNumber = answer.toString().split("");
        secondNumber = [];
        getOperator("/");
    }
});

//Event listeners for adding numbers
num0.addEventListener("click", () => {
    if (firstNumber.length == 0) {
        getFirstNumber(0)
    } else {
        getSecondNumber(0);
    }
});
num1.addEventListener("click", () => {
    if (firstNumber.length == 0) {
        getFirstNumber(1)
    } else {
        getSecondNumber(1);
    }
});
num2.addEventListener("click", () => {
    if (firstNumber.length == 0) {
        getFirstNumber(2)
    } else {
        getSecondNumber(2);
    }
});
num3.addEventListener("click", () => {
    if (firstNumber.length == 0) {
        getFirstNumber(3)
    } else {
        getSecondNumber(3);
    }
});
num4.addEventListener("click", () => {
    if (firstNumber.length == 0) {
        getFirstNumber(4)
    } else {
        getSecondNumber(4);
    }
});
num5.addEventListener("click", () => {
    if (firstNumber.length == 0) {
        getFirstNumber(5)
    } else {
        getSecondNumber(5);
    }
});
num6.addEventListener("click", () => {
    if (firstNumber.length == 0) {
        getFirstNumber(6)
    } else {
        getSecondNumber(6);
    }
});
num7.addEventListener("click", () => {
    if (firstNumber.length == 0) {
        getFirstNumber(7)
    } else {
        getSecondNumber(7);
    }
});
num8.addEventListener("click", () => {
    if (firstNumber.length == 0) {
        getFirstNumber(8)
    } else {
        getSecondNumber(8);
    }
});
num9.addEventListener("click", () => {
    if (firstNumber.length == 0) {
        getFirstNumber(9)
    } else {
        getSecondNumber(9);
    }
});