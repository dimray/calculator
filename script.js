const display = document.querySelector("#display");
display.value = "";

let numberArray = [];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."];
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

buttons.forEach(function (button) {
    button.addEventListener("click", function () {

        let buttonSelected = button.textContent;

        if (numbers.includes(+buttonSelected)) {
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
        }
    });


});

