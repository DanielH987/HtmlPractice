// Select the necessary elements
const passwordInput = document.getElementById('password');
const strengthText = document.getElementById('strength-level');

// Event listener for password input
passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    const strength = checkPasswordStrength(password);
    
    // Update the strength text based on the evaluated strength
    strengthText.textContent = strength.label;
    
    // Update the color of the strength text based on strength level
    strengthText.className = strength.class;
});

// Function to evaluate password strength
function checkPasswordStrength(password) {
    let strength = {
        label: "None",
        class: ""
    };

    // Check the length of the password
    const lengthCheck = password.length >= 8;
    
    // Check if there is at least one number
    const numberCheck = /\d/.test(password);
    
    // Check if there is at least one special character
    const specialCharCheck = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    // Check if there is at least one uppercase letter
    const uppercaseCheck = /[A-Z]/.test(password);

    // Determine password strength
    if (lengthCheck && numberCheck && specialCharCheck && uppercaseCheck) {
        strength.label = "Strong";
        strength.class = "strong";
    } else if (lengthCheck && (numberCheck || specialCharCheck || uppercaseCheck)) {
        strength.label = "Medium";
        strength.class = "medium";
    } else {
        strength.label = "Weak";
        strength.class = "weak";
    }

    return strength;
}
