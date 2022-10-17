function operate(a, b, operator) {

    const operators = {
        'add': (a, b) => a + b,
        'subtract': (a, b) => a - b,
        'multiply': (a, b) => a * b,
        'divide': (a, b) => a / b,
    }

    return operator in operators ? operators[operator](a, b) : NaN;
}


const display = document.querySelector("#display");
display.value = "123456";

const numbers = document.querySelectorAll(".number");
numbers.forEach(function (number) {
    const numbClick = number.addEventListener("click", function () {
        console.log(number.textContent);
    });

})