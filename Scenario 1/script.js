function calculateSum() {
    const input = document.getElementById('numberInput').value;
    const numbers = input.split(',').map(Number);
    const sum = numbers.filter(num => num % 2 === 0).reduce((acc, num) => acc + num, 0);
    document.getElementById('result').textContent = `The sum is ${sum}`;
}