function sumEvenNumbers() {
    const input = document.getElementById('numberInput').value;
    const numbers = input.split(',').map(Number);
    const evenNumbersSum = calculateEvenNumbersSum(numbers);

    displayResult(evenNumbersSum);
}

function calculateEvenNumbersSum(numbers) {
    return numbers.filter(number => number % 2 === 0)
                  .reduce((acc, number) => acc + number, 0);
}

function displayResult(sum) {
    document.getElementById('result').innerText = 'The sum is ' + sum;
}