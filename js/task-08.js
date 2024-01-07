const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const emailInput = formEl.elements.namedItem("email");
  const passwordInput = formEl.elements.namedItem("password");
  if (emailInput.value === "" || passwordInput.value === "") {
    alert("Please fill in all the fields!");
    return;
  }
  const data = {};
  for (const input of formEl.elements) {
    if (input.name !== "") {
      data[input.name] = input.value;
    }
  }
  console.log(data);
  formEl.reset();
});
