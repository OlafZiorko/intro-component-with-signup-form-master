const form = document.querySelector(".form");
const inputs = form.querySelectorAll("input");
const btnSubmit = form.querySelector(".btnSubmit");

// app functions

// checking inputs

function checkForm(e) {
  e.preventDefault();

  inputs.forEach((input) => {
    !input.value.trim() == ""
      ? input.classList.remove("error")
      : input.classList.remove("sucess");
  });

  inputs.forEach((input) => {
    input.value.trim() == ""
      ? input.classList.add("error")
      : input.classList.add("sucess");
  });
}

btnSubmit.addEventListener("click", checkForm);
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
