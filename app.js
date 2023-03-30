const form = document.querySelector("#myForm");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

const firstNameError = document.querySelector("#firstNameError");
const lastNameError = document.querySelector("#lastNameError");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");

form.addEventListener("submit", (event) => {
	event.preventDefault();
	/*
	if (!firstName || !lastName || !email || !password) {
	firstNameError.innerHTML = "First name cannot be empty";
	} else {
		lastNameError.innerHTML = "Last name cannot be empty";
	} else {
		emailError.innerHTML = "Looks like this is not an email";
} else 

*/

	if (firstName.value === "") {
		firstNameError.innerHTML = "First name cannot be empty";
	} else {
		firstNameError = "";
	}
	if (lastName.value === "") {
		lastNameError.innerHTML = "Last name cannot be empty";
	} else {
		lastNameError = "";
	}
	if (email.value === "") {
		emailError.innerHTML = "Looks like this is not an email";
	} else {
		emailError = "";
	}
	if (password.value === "") {
		passwordError.innerHTML = "Password cannot be empty";
	} else {
		passwordError = "";
	}

	if (
		firstName.value != "" &&
		lastName.value != "" &&
		email.value != "" &&
		password.value != ""
	) {
		form.submit();
	}
});
