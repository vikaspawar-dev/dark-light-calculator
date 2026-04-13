const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const toggle = document.querySelector("#toggle");
const calculator = document.querySelector(".calculator");

/* Calculator Logic */
buttons.forEach((btn) => {
    btn.onclick = () => {

        if (btn.id === "clear") {
            display.innerText = "";
        }

        else if (btn.id === "backspace") {
            display.innerText = display.innerText.slice(0, -1);
        }

        else if (btn.id === "equal") {
            try {
                display.innerText = eval(display.innerText);
            } catch {
                display.innerText = "Error";
                setTimeout(() => display.innerText = "", 1500);
            }
        }

        else {
            display.innerText += btn.id;
        }
    };
});

/* Theme Toggle */
toggle.onclick = () => {
    calculator.classList.toggle("dark");

    if (calculator.classList.contains("dark")) {
        toggle.innerText = "☀️";
    } else {
        toggle.innerText = "🌙";
    }
};