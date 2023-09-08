const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const buttonpress = button.textContent;

        if (button.id === "c") {
            display.textContent = "0";
            return;
        }

        if (button.id === "del") {
            if (display.textContent.length === 1 || display.textContent === "Error!") {
                display.textContent = "0";
            } else {
                display.textContent = display.textContent.slice(0, -1);
            }
            return;
        }

        if (button.id === "equal") {
            try {
                display.textContent = eval(display.textContent);
            } catch {
                display.textContent = "Error!";
            }
            return;
        }


        if (display.textContent === "0" || display.textContent === "Error!") {
            display.textContent = buttonpress;
        } else {
            display.textContent += buttonpress;
        }

        if (display.textContent.length > 13) {
            display.textContent = "Error!";
        }
    })
})