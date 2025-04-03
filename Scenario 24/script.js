function circles() {
    const count = parseInt(document.getElementById('circleCount').value);
    const container = document.getElementById('circleContainer');
    container.innerHTML = ''; // Clear existing circles

    if (isNaN(count) || count <= 0) return;

    for (let i = 1; i <= count; i++) {
        const circle = document.createElement('div');
        circle.className = 'circle';
        circle.textContent = i;
        container.appendChild(circle);
    }
}