function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount) {
  const boxes = [];

  for (let i = 0; i < amount; i++) {
    const width = i === 0 ? 30 : 30 + 10 * i;
    const height = i === 0 ? 30 : 30 + 10 * i;

    const box = document.createElement("div");
    box.style.width = width + "px";
    box.style.height = height + "px";
    box.style.backgroundColor = getRandomHexColor();

    boxes.push(box);
  }
  return boxes;
}

const createButton = document.querySelector("[data-create]");
createButton.addEventListener("click", () => {
  const amount = document.querySelector("input").value;
  const boxes = createBoxes(amount);
  boxes.forEach((box) => {
    document.querySelector("#boxes").appendChild(box);
  });
  document.querySelector("#boxes").innerHTML = "";
});
const destroyButton = document.querySelector("[data-destroy]");
destroyButton.addEventListener("click", () => {
  document.querySelector("#boxes").innerHTML = "";
});
