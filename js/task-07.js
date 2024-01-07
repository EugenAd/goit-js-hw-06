const fontInputEl = document.getElementById("font-size-control");
const textElement = document.getElementById("text");

fontInputEl.addEventListener("input", () => {
  const fontSize = fontInputEl.value;
  textElement.style.fontSize = `${fontSize}px`;
});
