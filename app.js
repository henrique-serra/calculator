const screen = document.querySelector("#screen");
const acBtn = document.querySelector("#acBtn");
const numeralBtns = document.querySelectorAll(".numeralBtn");
const keyArea = document.querySelector("#keyArea");
let screenContentVariable = "";

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
    screenContentVariable = screen.textContent;
    return methods[operator](a, b);
}

keyArea.addEventListener("click", (event) => {
    const btnClassList = Array.from(event.target.classList);
    const btnId = event.target.id;
    
    if (btnClassList.includes("numeralBtn")) {
        const number = event.target.textContent;
        screen.textContent += number;
        return;
    }

    switch (btnId) {
        case "acBtn":
            screen.textContent = "";
            break;
    
        default:
            break;
    }
})