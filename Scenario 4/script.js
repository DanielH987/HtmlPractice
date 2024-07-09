function ReverseString() {
    let input = document.getElementById("input").value;
    input = input.split("").reverse().join("");
    document.getElementById("output").textContent = `The reversed string is ${input}`;
}