document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const pendingTasks = document.getElementById('pendingTasks');
    const completedTasks = document.getElementById('completedTasks');

    addTaskBtn.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const taskItem = createTaskItem(taskText);
        pendingTasks.appendChild(taskItem);
        taskInput.value = '';
    }

    function createTaskItem(taskText) {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        const actions = document.createElement('div');
        actions.classList.add('task-actions');

        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Complete';
        completeBtn.addEventListener('click', () => completeTask(taskItem));

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', () => editTask(taskItem));

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => deleteTask(taskItem));

        actions.appendChild(completeBtn);
        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);

        taskItem.appendChild(actions);

        return taskItem;
    }

    function completeTask(taskItem) {
        taskItem.classList.toggle('completed');
        if (taskItem.classList.contains('completed')) {
            completedTasks.appendChild(taskItem);
        } else {
            pendingTasks.appendChild(taskItem);
        }
    }

    function editTask(taskItem) {
        const newTaskText = prompt('Edit task:', taskItem.childNodes[0].nodeValue.trim());
        if (newTaskText) {
            taskItem.childNodes[0].nodeValue = newTaskText;
        }
    }

    function deleteTask(taskItem) {
        taskItem.remove();
    }
});
