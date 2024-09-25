function calculateSum() {
    const input = document.getElementById("numberInput").value;
    const numbers = input.split(",").map(Number);
    
    if (numbers.some(isNaN)) {
        document.getElementById("result").innerText = 'Please enter valid numbers separated by commas.';
        return;
    }

    const evenSum = numbers.filter(num => num % 2 === 0).reduce((acc, num) => acc + num, 0);
    document.getElementById("result").innerText = `The sum is ${evenSum}`;
}