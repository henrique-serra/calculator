const screen = document.querySelector("#screen");
const acBtn = document.querySelector("#acBtn");
const numeralBtns = document.querySelectorAll(".numeralBtn");
const keyArea = document.querySelector("#keyArea");
const btns = document.querySelectorAll("button");
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

const methods = {
    "+": add,
    "-": subtract,
    "*": multiply,
    "/": divide,
}

function getOperands() {
    let screenContent = screen.textContent;
    screenContentVariable = screenContent.split(" ");
    let [a, operator, b] = screenContentVariable;
    return {
        a,
        operator,
        b,
    }
}

function operate() {
    screenContentVariable = screen.textContent;
    let {a, operator, b} = getOperands();
    return methods[operator](a, b);
}

function isOperator(character) {
    return character === "+" || character === "-" || character === "*" || character === "/";
}

function getOperatorsQty() {
    screenContentVariable = screen.textContent.split("");
    let totalOperators = 0;
    screenContentVariable.forEach((character, index, characters) => {
        if (isOperator(character) && characters[index + 1] === " ") ++totalOperators;
    });
    return totalOperators;
}

keyArea.addEventListener("click", (event) => {
    const btnClassList = Array.from(event.target.classList);
    const btnId = event.target.id;
    
    if (btnId === "equalBtn") {
        screen.textContent = operate();
        return
    }
    
    if (btnId === "acBtn") {
        screen.textContent = "";
        return;
    }

    if (btnId === "eraseBtn") {
        screen.textContent = screen.textContent.slice(0, -1);
    }

    if (btnId === "moreLessBtn") {
        let {a, operator, b} = getOperands();
        if (b) {
            b = b * -1;
            screen.textContent = `${a} ${operator} ${b}`;
        } else if (operator) {
            screen.textContent = `${a} ${operator} `;
        } else if (a) {
            a = a * -1;
            screen.textContent = `${a}`;
        }
        return;
    }

    if (btnId === "decimalBtn") {
        let {a, operator, b} = getOperands();
        if (b) {
            screen.textContent += ".";
        } else if (operator) {
            screen.textContent = `${a} ${operator} 0.`;
        } else if (a) {
            screen.textContent += ".";
        }
        return;
    }

    if (btnClassList.includes("numeralBtn")) {
        const number = event.target.textContent;
        screen.textContent += number;
        return;
    }

    if (btnClassList.includes("operatorBtn")) {
        const operator = event.target.textContent;
        if (getOperatorsQty() === 1) {
            screen.textContent = `${operate()} ${operator} `;
            return
        }
        screen.textContent += ` ${operator} `;
    }
})

document.addEventListener("keydown", event => {
    const keyDown = event.key;
    const respectiveBtn = Array.from(btns).find(btn => btn.textContent === keyDown);

    if (keyDown === "Enter") {
        document.querySelector("#equalBtn").click();
        return;
    }

    if (keyDown === "Escape") {
        document.querySelector("#acBtn").click();
        return;
    }

    if (keyDown === "Backspace") {
        document.querySelector("#eraseBtn").click();
        return;
    }

    respectiveBtn.click();
})