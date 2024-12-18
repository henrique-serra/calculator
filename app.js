const screen = document.querySelector("#screen")
const acBtn = document.querySelector("#acBtn");
const numeralBtns = document.querySelectorAll(".numeralBtn");

acBtn.addEventListener("click", () => {
    screen.textContent = "";
})

numeralBtns.forEach(btn => {
    btn.addEventListener("click", (event) => {
        const number = event.target.textContent;
        screen.textContent += number;
    })
})