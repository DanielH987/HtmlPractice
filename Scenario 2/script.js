function countUniqueWords() {
    const text = document.getElementById('uniqueWords').value;
    const words = text.toLowerCase().match(/\b\w+\b/g) || [];
    const uniqueWords = new Set(words);
    document.getElementById('result').innerText = `The unique word count is ${uniqueWords.size}`;
}