function validateEmail() {
    const emailInput = document.getElementById('email').value;
    const resultParagraph = document.getElementById('result');
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailPattern.test(emailInput)) {
        resultParagraph.textContent = 'The email is valid: true';
    } else {
        resultParagraph.textContent = 'The email is valid: false';
    }
}