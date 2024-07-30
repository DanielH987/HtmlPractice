document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    let todos = [];

    function renderList() {
        todoList.innerHTML = '';
        todos.forEach(todo => {
            const li = document.createElement('li');
            li.className = todo.completed ? 'completed' : '';
            li.dataset.id = todo.id;

            const taskSpan = document.createElement('span');
            taskSpan.textContent = todo.task;

            const completeButton = document.createElement('button');
            completeButton.textContent = 'Complete';
            completeButton.className = 'complete-btn';
            completeButton.onclick = () => toggleComplete(todo.id);

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className = 'remove-btn';
            removeButton.onclick = () => removeTask(todo.id);

            li.appendChild(taskSpan);
            li.appendChild(completeButton);
            li.appendChild(removeButton);

            todoList.appendChild(li);
        });
    }

    function toggleComplete(id) {
        todos = todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
        renderList();
    }

    function removeTask(id) {
        todos = todos.filter(todo => todo.id !== id);
        renderList();
    }
});
