//Global Variables (might change later)

let firstNumber = [];
let secondNumber = [];
let operator = " ";
let answer = 0;
let indicator = false;

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
const operatorsDisplay = document.querySelector(".operators-display");
const numbersDisplay = document.querySelector(".numbers-display");

// || Functions ||


function getFirstNumber(number) {
    firstNumber.push(number);
    let firstNumberDisplay = firstNumber.join("");
    numbersDisplay.textContent = firstNumberDisplay;
}

function getSecondNumber(number) {
    secondNumber.push(number);
    let secondNumberdisplay = secondNumber.join("");
    numbersDisplay.textContent = secondNumberdisplay;
}

function getOperator(str) {
    operator = str;
    operatorsDisplay.textContent = operator;
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
            if (opSecondNumber == 0) {
                answer = "Can't divide by 0";
            } else {
                answer = opFirstNumber / opSecondNumber;
            }
            break;
        case "*":
            answer = opFirstNumber * opSecondNumber;
            break;
        default:
            answer = 0;
            break;
    }
    numbersDisplay.textContent = answer;
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
    answer = 0;
    indicator = false;
    numbersDisplay.textContent = " ";
    operatorsDisplay.textContent = " ";
})

//Equals button event listener to operate
equals.addEventListener("click", () => {
    operate();
    operatorsDisplay.textContent = " ";
    console.log(firstNumber);
    console.log(operator);
    console.log(secondNumber);
    console.log(answer);
});

//Event listeners to add specified number to firstNumber array when clicking the number button

sum.addEventListener("click", () => {
    indicator = true;
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
    indicator = true;
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
    indicator = true;
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
    indicator = true;
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
    if (indicator == false) {
        getFirstNumber(0)
    } else {
        getSecondNumber(0);
    }
});
num1.addEventListener("click", () => {
    if (indicator == false) {
        getFirstNumber(1)
    } else {
        getSecondNumber(1);
    }
});
num2.addEventListener("click", () => {
    if (indicator == false) {
        getFirstNumber(2)
    } else {
        getSecondNumber(2);
    }
});
num3.addEventListener("click", () => {
    if (indicator == false) {
        getFirstNumber(3)
    } else {
        getSecondNumber(3);
    }
});
num4.addEventListener("click", () => {
    if (indicator == false) {
        getFirstNumber(4)
    } else {
        getSecondNumber(4);
    }
});
num5.addEventListener("click", () => {
    if (indicator == false) {
        getFirstNumber(5)
    } else {
        getSecondNumber(5);
    }
});
num6.addEventListener("click", () => {
    if (indicator == false) {
        getFirstNumber(6)
    } else {
        getSecondNumber(6);
    }
});
num7.addEventListener("click", () => {
    if (indicator == false) {
        getFirstNumber(7)
    } else {
        getSecondNumber(7);
    }
});
num8.addEventListener("click", () => {
    if (indicator == false) {
        getFirstNumber(8)
    } else {
        getSecondNumber(8);
    }
});
num9.addEventListener("click", () => {
    if (indicator == false) {
        getFirstNumber(9)
    } else {
        getSecondNumber(9);
    }
});