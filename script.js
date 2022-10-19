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



