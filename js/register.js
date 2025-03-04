// document.getElementById('password').addEventListener('input', function() {
//             let password = this.value;
//             document.getElementById('length').className = password.length >= 8 ? 'valid' : 'invalid';
//             document.getElementById('number').className = /\d/.test(password) ? 'valid' : 'invalid';
//             document.getElementById('uppercase').className = /[A-Z]/.test(password) ? 'valid' : 'invalid';
//             document.getElementById('lowercase').className = /[a-z]/.test(password) ? 'valid' : 'invalid';
//             document.getElementById('symbol').className = /[!@#$%^&*(),.?":{}|<>]/.test(password) ? 'valid' : 'invalid';
//         });

//         document.getElementById('confirmPassword').addEventListener('input', function() {
//             let password = document.getElementById('password').value;
//             let confirmPassword = this.value;
//             let message = document.getElementById('passwordMessage');
            
//             if (password === confirmPassword && confirmPassword !== '') {
//                 message.innerHTML = '<div class="alert alert-success">Passwords match!</div>';
//             } else {
//                 message.innerHTML = '<div class="alert alert-danger">Passwords do not match!</div>';
//             }
//         });

//         document.getElementById('loginForm').addEventListener('submit', function(event) {
//             event.preventDefault();
//             let email = document.getElementById('email');
//             let password = document.getElementById('password');
//             let confirmPassword = document.getElementById('confirmPassword');
//             let successMessage = document.getElementById('successMessage');
//             let passwordMessage = document.getElementById('passwordMessage');
//             let allValid = document.querySelectorAll('.valid').length === 5;
            
//             if (password.value === confirmPassword.value && confirmPassword.value !== '' && allValid) {
//                 successMessage.innerHTML = '<div class="alert alert-success">Thank you. Your account is created!</div>';
//                 setTimeout(() => {
//                     email.value = '';
//                     password.value = '';
//                     confirmPassword.value = '';
//                     successMessage.innerHTML = '';
//                     passwordMessage.innerHTML = '';
//                     document.querySelectorAll('#passwordCriteria li').forEach(li => li.className = 'invalid');
//                 }, 2000);
//             } else {
//                 successMessage.innerHTML = '';
//                 passwordMessage.innerHTML = '<div class="alert alert-danger">Please meet all password requirements.</div>';
//             }
//         });