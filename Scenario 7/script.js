function IsPalindrome() {
    let input = document.getElementById("input").value.toLowerCase();
    let left = 0;
    let right = input.length - 1;
    while (left < right) {
        if (input[left] != input[right]) {
            document.getElementById("output").innerHTML = "Is Palindrome: False";
            return;
        }
        left++;
        right--;
    }
    document.getElementById("output").innerHTML = "Is Palindrome: True";
}