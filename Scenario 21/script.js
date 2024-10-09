function countThreevens(arr) {
    return count = arr.filter((e) => e % 3 === 0).length;
}

function handleClick() {
    var input = document.getElementById('numberInput').value;
    var  numbers = input.split(',').map(Number);
    var count = countThreevens(numbers);
    document.getElementById('result').innerText = count;
}