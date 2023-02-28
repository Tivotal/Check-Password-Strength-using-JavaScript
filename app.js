/* Created by Tivotal */

const input = document.querySelector("input");
const showHide = document.querySelector(".show-hide");
const indicator = document.querySelector(".indicator");
const iconText = document.querySelector(".icon-text");
const text = document.querySelector(".text");

//js code to show or hide the password

showHide.addEventListener("click", () => {
  if (input.type == "password") {
    input.type = "text";
    showHide.classList.replace("fa-eye-slash", "fa-eye");
  } else {
    input.type = "password";
    showHide.classList.replace("fa-eye", "fa-eye-slash");
  }
});

//js code to check password strength

let alphabet = /[a-zA-z]/;
let number = /[0-9]/;
let sChar = /[~,!,#,@,$,%,^,&,*,(,),_,-,+,=,<,>,?,/]/;

input.addEventListener("keyup", () => {
  indicator.classList.add("active");

  let val = input.value;

  if (val.match(alphabet) || val.match(number) || val.match(sChar)) {
    text.textContent = "Password is weak";
    input.style.borderColor = "#ff6333";
    showHide.style.color = "#ff6333";
    iconText.style.color = "#ff6333";
  }
  if (val.match(alphabet) && val.match(number) && val.length >= 6) {
    text.textContent = "Password is medium";
    input.style.borderColor = "#cc8500";
    showHide.style.color = "#cc8500";
    iconText.style.color = "#cc8500";
  }

  if (
    val.match(alphabet) &&
    val.match(number) &&
    val.match(sChar) &&
    val.length >= 6
  ) {
    text.textContent = "Password is strong";
    input.style.borderColor = "#22c32a";
    showHide.style.color = "#22c32a";
    iconText.style.color = "#22c32a";
  }

  if (val == "") {
    indicator.classList.remove("active");
    input.style.borderColor = "#a6a6a6";
    showHide.style.color = "#a6a6a6";
    iconText.style.color = "#a6a6a6";
  }
});
