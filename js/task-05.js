const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");
const onInput = () => {
  const name = nameInput.value;
  nameOutput.textContent = name.trim() || "Anonymous";
};
nameInput.addEventListener("input", onInput);
