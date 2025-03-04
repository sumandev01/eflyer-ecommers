// slider js
$(document).ready(function() {
	$('.home_product_slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		responsive: [{
		  breakpoint: 1200,
		  settings: {
		    slidesToShow: 3,
		    infinite: true
		  }
		}, {

		  breakpoint: 992,
		  settings: {
		    slidesToShow: 2,
		  }

		}, {

		  breakpoint: 768,
		  settings: {
		    slidesToShow: 1,
		  }
		}]
	});
});
// google translate js
function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
    }

function selectCountry(flagUrl, countryName, langCode) {
    document.getElementById('selectedFlag').src = flagUrl;
    document.getElementById('selectedCountry').textContent = countryName;
    
    var selectField = document.querySelector(".goog-te-combo");
    if (selectField) {
        selectField.value = langCode;
        selectField.dispatchEvent(new Event('change'));
    }
};


// product category js
function selectProductCategory(category, iconClass) {
	const dropdownButton = document.getElementById('product_category_dropdown');
	dropdownButton.innerHTML = `<i class="${iconClass}"></i>${category}`
};


// Email Subscribtion
document.addEventListener("DOMContentLoaded", function () {
	// Function to validate email format
	function isValidEmail(email) {
	    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	    return emailPattern.test(email);
	}

	document.getElementById("subscribeForm").addEventListener("submit", function(event) {
	    event.preventDefault(); // Prevent form submission

	    let emailField = document.getElementById("subscribeEmail");
	    let emailValue = emailField.value.trim();
	    let errorToastMessage = document.getElementById("errorToastMessage");

	    if (emailValue === "") {
	        // Show error toast for empty field
	        errorToastMessage.innerText = "Please enter your email!";
	        let errorToast = new bootstrap.Toast(document.getElementById("errorToast"));
	        errorToast.show();
	    } else if (!isValidEmail(emailValue)) {
	        // Show error toast for invalid email
	        errorToastMessage.innerText = "This email is not valid!";
	        let errorToast = new bootstrap.Toast(document.getElementById("errorToast"));
	        errorToast.show();
	    } else {
	        // Show success toast
	        let successToast = new bootstrap.Toast(document.getElementById("successToast"));
	        successToast.show();
	        emailField.value = ""; // Clear input field
	    }
	});
});


// Password show/hide js
function togglePassword(id, icon) {
	let input = document.getElementById(id);
	let iconElement = icon.querySelector('i');
	if (input.type === "password") {
		input.type = "text";
		iconElement.classList.remove("bi-eye");
		iconElement.classList.add("bi-eye-slash");
	} else {
		input.type = "password";
		iconElement.classList.remove("bi-eye-slash");
		iconElement.classList.add("bi-eye");
	}
};


// Login form email & password validatin js
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const emailInput = document.getElementById("loginEmail");
    const passwordInput = document.getElementById("password");
    const emailError = document.getElementById("email-error");
    const emailMatchError = document.getElementById("email-match-error");
    const passwordError = document.getElementById("password-error");
    const passwordMatchError = document.getElementById("password-match-error");

    // Correct email and password for validation
    const correctEmail = "example@gmail.com";
    const correctPassword = "12345!";

    // Hide error messages initially
    emailError.classList.add("d-none");
    emailMatchError.classList.add("d-none");
    passwordError.classList.add("d-none");
    passwordMatchError.classList.add("d-none");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Stop form submission

        let email = emailInput.value.trim();
        let password = passwordInput.value.trim();
        let isValid = true;

        // Email Validation
        if (email === "") {
            emailError.classList.remove("d-none");
            isValid = false;
        } else if (email !== correctEmail) {
            emailMatchError.classList.remove("d-none");
            isValid = false;
        } else {
            emailError.classList.add("d-none");
            emailMatchError.classList.add("d-none");
        }

        // Password Validation
        if (password === "") {
            passwordError.classList.remove("d-none");
            isValid = false;
        } else if (password !== correctPassword) {
            passwordMatchError.classList.remove("d-none");
            isValid = false;
        } else {
            passwordError.classList.add("d-none");
            passwordMatchError.classList.add("d-none");
        }

        // If valid, redirect to account page
        if (isValid) {
            window.location.href = "index.html";
        }
    });

    // Dynamically hide error messages as the user types
    emailInput.addEventListener("input", function () {
        if (emailInput.value.trim() !== "") {
            emailError.classList.add("d-none");
            emailMatchError.classList.add("d-none");
        }
    });

    passwordInput.addEventListener("input", function () {
        if (passwordInput.value.trim() !== "") {
            passwordError.classList.add("d-none");
            passwordMatchError.classList.add("d-none");
        }
    });
});


// Password Reset (Email Validation)
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('sendResetEmail').addEventListener('click', function() {
        let resetEmail = document.getElementById('resetEmail').value;
        let resetEmailError = document.getElementById('resetEmail-error');
        let toastMessage = document.getElementById('toastMessage');
        let toastElement = document.getElementById('errorToast');
        let toast = new bootstrap.Toast(toastElement);

        // Validate the email
        if (resetEmail !== 'example@gmail.com') {
            resetEmailError.classList.remove('d-none');
            toastMessage.innerText = 'Your email address is not valid!';
           // toast.show();  // Show toast for invalid email
        } else {
            resetEmailError.classList.add('d-none');
            toastMessage.innerText = 'Email sent! Check your inbox.';
            toast.show();  // Show toast for successful email
            setTimeout(() => {
                // Close the modal after sending the email
                let modal = bootstrap.Modal.getInstance(document.getElementById('forgotPasswordModal'));
                modal.hide();
            }, 2000); // Adjust the timeout as needed
        }
    });
});


// Add to Cart Confirm and Thank you message js
document.addEventListener("DOMContentLoaded", function() {

    const addToCartButtons = document.querySelectorAll('#addToCartButton');
    const confirmModalElement = document.getElementById('confirmModal');
    const thankYouModalElement = document.getElementById('thankYouModal');

    // Ensure modal elements exist in the HTML
    if (!confirmModalElement || !thankYouModalElement) {
        console.error("Modal elements not found in the HTML.");
        return;
    }

    const confirmModal = new bootstrap.Modal(confirmModalElement);
    const thankYouModal = new bootstrap.Modal(thankYouModalElement);
    let selectedProduct = '';

    console.log("All elements found. Ready to add event listeners.");

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            selectedProduct = this.getAttribute('data-product'); // Get product name
            console.log(`Clicked: ${selectedProduct}`);

            const confirmMessage = document.getElementById('confirmMessage');
            if (confirmMessage) {
                confirmMessage.innerText = `Are you sure you want to add ${selectedProduct} to your cart?`;
            }

            // Store selected product in confirm button
            const confirmButton = document.getElementById('confirmButton');
            if (confirmButton) {
                confirmButton.setAttribute('data-product', selectedProduct);
            }

            confirmModal.show();
        });
    });

    // Confirm Button Click
    document.getElementById('confirmButton').addEventListener('click', function() {
        let product = this.getAttribute('data-product'); // Get selected product
        console.log(`Confirmed: ${product}`);

        confirmModal.hide();

        const thankYouMessage = document.getElementById('thankYouMessage');
        if (thankYouMessage) {
            thankYouMessage.innerText = `Thank you! ${product} has been added to your cart.`;
        }

        thankYouModal.show();

        // Auto-hide the Thank You modal after 3 seconds
        setTimeout(function() {
            thankYouModal.hide();
        }, 3000);
    });

    console.log("Event listeners added.");
});


// confirm password js
document.getElementById('confirmPassword').addEventListener('input', function() {
    let password = document.getElementById('password').value;
    let confirmPassword = this.value;
    let message = document.getElementById('passwordMessage');
    
    if (password === confirmPassword && confirmPassword !== '') {
        message.innerHTML = '<div class="alert alert-success">Passwords match!</div>';
    } else {
        message.innerHTML = '<div class="alert alert-danger">Passwords do not match!</div>';
    }
});


// register form js
document.getElementById('loginRegisterForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission

    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let confirmPassword = document.getElementById('confirmPassword');
    let successMessage = document.getElementById('successMessage');
    let passwordMessage = document.getElementById('passwordMessage');
    let emailError = document.getElementById('email-error');
    let confirmPasswordError = document.getElementById('confirmPassword-error');
    let allValid = document.querySelectorAll('.valid').length === 5;

    // Reset error messages
    emailError.classList.add('d-none');
    confirmPasswordError.classList.add('d-none');
    passwordMessage.innerHTML = '';

    // Validate email and password fields
    if (email.value.trim() === '') {
        emailError.classList.remove('d-none');
    }

    if (confirmPassword.value.trim() === '') {
        confirmPasswordError.classList.remove('d-none');
    }

    if (password.value === confirmPassword.value && confirmPassword.value !== '' && allValid && email.value.trim() !== '') {
        successMessage.innerHTML = '<div class="alert alert-success">Thank you. Your account is created!</div>';
        setTimeout(() => {
            email.value = '';
            password.value = '';
            confirmPassword.value = '';
            successMessage.innerHTML = '';
            passwordMessage.innerHTML = '';
            document.querySelectorAll('#passwordCriteria li').forEach(li => li.className = 'invalid');
            // Redirect after delay
            window.location.href = 'login.html';
        }, 2000);
    } else {
        successMessage.innerHTML = '';
        passwordMessage.innerHTML = '<div class="alert alert-danger">Please meet all password requirements.</div>';
    }
});

// Password Strength Validation
document.getElementById('password').addEventListener('input', function() {
    let password = this.value;
    
    document.getElementById('length').className = password.length >= 8 ? 'valid' : 'invalid';
    document.getElementById('number').className = /\d/.test(password) ? 'valid' : 'invalid';
    document.getElementById('uppercase').className = /[A-Z]/.test(password) ? 'valid' : 'invalid';
    document.getElementById('lowercase').className = /[a-z]/.test(password) ? 'valid' : 'invalid';
    document.getElementById('symbol').className = /[!@#$%^&*(),.?":{}|<>]/.test(password) ? 'valid' : 'invalid';
});