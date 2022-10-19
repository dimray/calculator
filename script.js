function operate(a, b, operator) {

    const operators = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
    }

    return operator in operators ? operators[operator](a, b) : NaN;
}

const buttons = document.querySelectorAll(".button");
buttons.forEach(function (button) {
    button.addEventListener("click", function () {

        let buttonSelected = button.textContent;
        // display.value = buttonSelected;

        if (numbers.includes(+buttonSelected) || buttonSelected === ".") {
            numberArray.push(buttonSelected);
            display.value = numberArray.join("");
        } else if (buttonSelected === "AC") {
            a = "";
            b = "";
            operator = ""
            numberArray = [];
            display.value = "";
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
        } else if (a === "") {
            a = +numberArray.join("");
            numberArray = [];
            operator = buttonSelected;
        } else if (b === "") {
            b = +numberArray.join("");
            display.value = operate(+a, +b, operator);
            a = operate(+a, +b, operator);
            numberArray = [];
        } else {
            operator = buttonSelected;
            b = "";
        }
    });
});



const display = document.querySelector("#display");
display.value = "";

let numberArray = [];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let operator = "";
let a = "";
let b = "";



