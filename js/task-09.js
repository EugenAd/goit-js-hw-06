function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyEl = document.querySelector(".widget");
const buttonEl = document.querySelector(".change-color");
const changeColor = () => {
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
};
buttonEl.addEventListener("click", changeColor);
