function CountVowels() {
    let input = document.getElementById("input").value;
    let vowels = "aeiouAIEOU";
    let count = 0;
    for (let i = 0; i < input.length; i++) {
        if (vowels.indexOf(input[i]) !== -1) {
            count++;
        }
    }
    document.getElementById("output").textContent = `The number of vowels is ${count}`;
}