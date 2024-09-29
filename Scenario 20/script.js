function SumEvenNumbers() {
    const input = document.getElementById('numberInput').value;
    const numbers = input.split(',').map(Number);
    const count = numbers.filter(number => number % 2 === 0).reduce((acc, number) => acc + number, 0);

    document.getElementById('result').innerText = 'The sum is ' +count;
}