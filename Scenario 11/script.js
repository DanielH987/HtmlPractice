document.getElementById('colorButton').addEventListener('click', function() {
    var title = document.getElementById('title');
    var currentColor = title.style.color;

    if (currentColor === 'blue') {
        title.style.color = 'red';
    } else {
        title.style.color = 'blue';
    }
});
