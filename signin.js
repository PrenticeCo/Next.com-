const checkoutForm = document.querySelector(".form--page");
const fName = document.querySelector(".form--page__name");
const email = document.querySelector(".form--page__email");
const password = document.querySelector(".form--page__password");
const postcode = document.querySelector(".form--page__postcode");
const fnameError = document.querySelector(".error--name");
const emailError = document.querySelector(".error--email");
const passwordError = document.querySelector(".error--password");
const postcodeError = document.querySelector(".error--postcode");
const alphaRegex = /^[a-zA-Z]+$/;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const postcodeRegex = /[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}/i;

checkoutForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let isValid = true;

  if (!fName.value || !alphaRegex.test(fName.value)) {
    fnameError.innerHTML = "Please enter first name";
    isValid = false;
  } else {
    fnameError.innerHTML = "";
    isValid = true;
  }

  if (!email.value || !emailRegex.test(email.value)) {
    emailError.innerHTML = "Please enter valid email";
    isValid = false;
  } else {
    emailError.innerHTML = "";
    isValid = true;
  }

  if (!password.value) {
    passwordError.innerHTML = "Please enter your password";
    isValid = false;
  } else {
    passwordError.innerHTML = "";
    isValid = true;
  }

  if (!postcode.value || !postcodeRegex.test(postcode.value)) {
    postcodeError.innerHTML = "Please enter a valid postcode";
    isValid = false;
  } else {
    postcodeError.innerHTML = "";
    isValid = true;
  }

  if (isValid) {
    console.log("Sending the information from the form");
  } else {
    console.log("Please complete the form");
  }
});
