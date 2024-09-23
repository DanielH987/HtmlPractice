function calculateSum() {
    // Get the input value from the text box with id 'numberInput'
    const input = document.getElementById('numberInput').value;

    // Split the input string by commas to get an array of strings, then convert each to a number
    const numbers = input.split(',').map(Number);

    // Filter the array to include only even numbers, then sum them up
    const sum = numbers.filter(num => num % 2 === 0).reduce((acc, num) => acc + num, 0);

    // Display the result in the element with id 'result'
    document.getElementById('result').textContent = `The sum is ${sum}`;
}