const validationInputEl = document.getElementById("validation-input");
function onBlur() {
  const value = validationInputEl.value;
  const isLengthValid =
    value.length === Number(validationInputEl.dataset.length);
  validationInputEl.classList.toggle("valid", isLengthValid); //true
  validationInputEl.classList.toggle("invalid", !isLengthValid); //fals
}
validationInputEl.addEventListener("blur", onBlur);
