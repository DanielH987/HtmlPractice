function SumOfEvenNum() {
    let input = document.getElementById("arrNum").value;
    let numbers = input.split(",").map(Number);
    let count = numbers.filter(n => n % 2 == 0).length;
    document.getElementById("count").textContent = "The sum is " + count;
}