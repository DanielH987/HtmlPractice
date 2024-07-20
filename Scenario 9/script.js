function GenerateFibonacci() {
    let terms = document.getElementById("input").value;
    if (isNaN(terms) || terms < 1) {
        alert("Please enter a valid number greater than 0.");
        return;
    }
    
    let fibSequence = [0, 1];
    for (let i = 2; i < terms; i++) {
        fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
    }

    const resultText = fibSequence.slice(0, terms).join(', ');
    document.getElementById('output').textContent = `The Fibonacci sequence is ${resultText}`;
}