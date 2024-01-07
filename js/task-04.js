let counterValue = 0;
const valueElement = document.getElementById("value");

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.getAttribute("data-action");
    if (action === "decrement") {
      counterValue -= 1;
    } else if (action === "increment") {
      counterValue += 1;
    }

    valueElement.textContent = counterValue;
  });
});
