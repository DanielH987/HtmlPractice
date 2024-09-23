function changeColor() {
    let title = document.getElementById('title');
    let currentColor = title.style.color;

    // Check if currentColor is blue
    if (currentColor === 'blue') {
        title.style.color = 'red';
    } else {
        title.style.color = 'blue';
    }
}
