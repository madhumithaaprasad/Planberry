// Selecting DOM Elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Event Listeners
addTaskBtn.addEventListener('click', addTask);
taskList.addEventListener('click', handleTaskActions);

// Functions
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task.');
    return;
  }

  // Create Task Item
  const taskItem = document.createElement('li');
  taskItem.innerHTML = `
    <span>${taskText}</span>
    <div>
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
    </div>
  `;

  taskList.appendChild(taskItem);
  taskInput.value = '';
}

function handleTaskActions(e) {
  if (e.target.classList.contains('delete-btn')) {
    // Delete Task
    e.target.closest('li').remove();
  } else if (e.target.classList.contains('edit-btn')) {
    // Edit Task
    const taskItem = e.target.closest('li');
    const taskText = taskItem.querySelector('span');
    const newText = prompt('Edit your task:', taskText.textContent);

    if (newText !== null) {
      taskText.textContent = newText.trim();
    }
  }
}
