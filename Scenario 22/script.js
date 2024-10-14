// Select the necessary elements
const textarea = document.getElementById('text-input');
const remainingSpan = document.getElementById('remaining');
const charLimit = 150; // Set the character limit

// Event listener for input event
textarea.addEventListener('input', () => {
    // Get the length of the typed characters
    const typedLength = textarea.value.length;
    
    // Calculate the remaining characters
    const remainingChars = charLimit - typedLength;
    
    // Update the remaining character display
    remainingSpan.textContent = remainingChars;

    // Check if the character limit is exceeded
    if (remainingChars < 0) {
        remainingSpan.classList.add('over-limit');
    } else {
        remainingSpan.classList.remove('over-limit');
    }
});
