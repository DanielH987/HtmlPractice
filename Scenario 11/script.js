function changeColor() {
    let title = document.getElementById('title');
    let currentColor = title.style.color;

    if (currentColor === 'blue') {
        title.style.color = 'red';
    } else {
        title.style.color = 'blue';
    }
}