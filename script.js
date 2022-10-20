const display = document.querySelector("#display");
display.value = "";

let numberArray = [];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const operatorSymbols = ["+", "-", "*", "/"];
let operator = "";
let a = "";
let b = "";
let answer = "";

const buttons = document.querySelectorAll(".button");


function operate(a, b, operator) {

    const operators = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
    }

    return operator in operators ? operators[operator](a, b) : NaN;
}

document.addEventListener("keydown", function (event) {
    let buttonSelected = event.key;
    if (event.key === "Enter") { buttonSelected = "=" };
    if (event.key === "Escape") { buttonSelected = "AC" } ''

    calculate(buttonSelected);

})



buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        let buttonSelected = button.textContent;

        calculate(buttonSelected);
    });
});

function calculate(buttonSelected) {

    if (numbers.includes(+buttonSelected) || buttonSelected === ".") {
        numberArray.push(buttonSelected);
        display.value = numberArray.join("");
    };

    if (operatorSymbols.includes(buttonSelected) || buttonSelected === "=") {

        if (a === "") {
            if (numberArray.length > 0) { a = +numberArray.join("") };
            numberArray = [];
            if (operatorSymbols.includes(buttonSelected)) { operator = buttonSelected }
        } else if (b === "") {
            if (numberArray.length > 0) {
                b = +numberArray.join("");
                numberArray = [];
                answer = operate(a, b, operator);
                display.value = answer;
                a = answer;
                if (operatorSymbols.includes(buttonSelected)) { operator = buttonSelected }
            } else {
                if (operatorSymbols.includes(buttonSelected)) { operator = buttonSelected }
            }
        } else {
            if (numberArray.length > 0) {
                b = +numberArray.join("");
                numberArray = [];
                answer = operate(a, b, operator);
                display.value = answer;
                a = answer;
                if (operatorSymbols.includes(buttonSelected)) { operator = buttonSelected };
            } else {
                if (operatorSymbols.includes(buttonSelected)) { operator = buttonSelected };
            }

        }
    } else if (buttonSelected === "AC") {
        a = "";
        b = "";
        operator = ""
        numberArray = [];
        display.value = "";
        answer = "";
    } else if (buttonSelected === "+/-") {
        if (numberArray.length > 0) {
            numberArray.unshift("-");
            display.value = numberArray.join("");
        } else {
            a = +a * -1;
            display.value = a;
        }
    } else if (buttonSelected === "%") {
        if (numberArray.length > 0) {
            value = numberArray.join("") / 100;
            value = value.toString();
            numberArray = value.split("");
            display.value = numberArray.join("");
        } else {
            a = +a / 100;
            display.value = a;
        }
    }

}