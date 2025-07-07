]let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");
let currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    let val = button.getAttribute("data-value");

    if (button.id === "equal") {
      try {
        display.value = eval(currentInput);
        currentInput = display.value;
      } catch {
        display.value = "Error";
        currentInput = "";
      }
      return;
    }

    if (button.id === "clear") {
      currentInput = "";
      display.value = "0";
      return;
    }

    if (val !== null) {
      currentInput += val;
      display.value = currentInput;
    }
  });
});
