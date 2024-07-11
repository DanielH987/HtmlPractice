function CalculateFactorial() {
    let input = document.getElementById("input").value;
    
    if (isNaN(input)) {
        document.getElementById("output").textContent = "Error: Input must be a number";
        return;
    }
    
    let factorial = 1;
    for (let i = 1; i <= input; i++) {
        factorial *= i;
    }
    document.getElementById("output").textContent = `The factorial is ${factorial}`;

    return
}