
/* SELECTORS */

/* Select the form */
let form = document.querySelector(".form");


/* Select firstName */
let firstName = document.getElementById("firstName");

/* Select firstName error */
let firstNameError = document.getElementById("firstNameError");

/* Select lastName*/
let lastName = document.getElementById("lastName");

/* Select lastName error */
let lastNameError = document.getElementById("lastNameError");


/* Select email address*/
let email = document.getElementById("emailAddress");

/* Select email error */
let emailError = document.getElementById("emailError");


/* Select password */
let password = document.getElementById("createPassword");

/* Select password error */
let passwordError = document.getElementById("passwordError");


/* Select checkbox */
let checkbox = document.getElementById("agreeTerms");


/* Select success message */
let successMessage = document.getElementById("successMessage");


/* VALIDATION FUNCTION */

function validateForm(e) {
    e.preventDefault();
    
    if (firstName.value === "") {
        firstNameError.style.display = "block";
    }

    else if (firstName.value !== "") {
        firstNameError.style.display = "none";
    }


    if (lastName.value === "") {
        lastNameError.style.display = "block";
    }
        
    else if (lastName.value !== "") {
        lastNameError.style.display = "none";
    }


    if (email.value === "") {
        emailError.style.display = "block";
    }
        
    else if (email.value !== "") {
        emailError.style.display = "none";
    }


    if (password.value === "") {
        passwordError.style.display = "block";
    }

    else if (password.value !== "") {
        passwordError.style.display = "none";
    }

    if (checkbox.checked) {
        successMessage.style.display = "block";
    }
}


/* EVENT LISTENER */

form.addEventListener("submit", validateForm);