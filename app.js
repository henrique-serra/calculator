const screen = document.querySelector("#screen")
const acBtn = document.querySelector("#acBtn");
const numeralBtns = document.querySelectorAll(".numeralBtn");

function isString(x) {
    if (typeof x === "string") return Number(x);
    else if (typeof x === "number") return x;
    return;
}

function add(a, b) {
    a = isString(a);
    b = isString(b);
    return a + b;
}

function subtract(a, b) {
    a = isString(a);
    b = isString(b);
    return a - b;
}

function multiply(a, b) {
    a = isString(a);
    b = isString(b);
    return a * b;
}

function divide(a, b) {
    a = isString(a);
    b = isString(b);
    return a / b;
}

function operate(a, b, operator) {
    const methods = {
        "+": add,
        "-": subtract,
        "*": multiply,
        "/": divide,
    }
    return methods[operator](a, b);
}

acBtn.addEventListener("click", () => {
    screen.textContent = "";
})

numeralBtns.forEach(btn => {
    btn.addEventListener("click", (event) => {
        const number = event.target.textContent;
        screen.textContent += number;
    })
})