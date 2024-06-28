function ComputeLongestWord() {
    let input = document.getElementById("textInput").value;
    let words = input.split(" ");
    let longestWord = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    document.getElementById("output").textContent = `The longest word is ${longestWord}`;

    console.log(input);
}