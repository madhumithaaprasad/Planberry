
const taskInput = document.getElementById('task-input');
const taskDatetime = document.getElementById('task-datetime');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

addTaskBtn.addEventListener('click', addTask);
taskList.addEventListener('click', handleTaskActions);

function addTask() {
  const taskText = taskInput.value.trim();
  const taskDateTime = taskDatetime.value;

  if (taskText === '' || taskDateTime === '') {
    alert('Please enter a task and select a date and time.');
    return;
  }

  const taskItem = document.createElement('li');
  taskItem.innerHTML = `
    <span class="task-text">${taskText}</span>
    <span class="datetime">${new Date(taskDateTime).toLocaleString()}</span>
    <div>
      <button class="complete-btn">Mark Completed</button>
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
    </div>
  `;

  taskList.appendChild(taskItem);
  taskInput.value = '';
  taskDatetime.value = '';
}

function handleTaskActions(e) {
  const taskItem = e.target.closest('li');

  if (e.target.classList.contains('delete-btn')) {
    
    taskItem.remove();
  } else if (e.target.classList.contains('edit-btn')) {
    
    const taskText = taskItem.querySelector('span.task-text');
    const taskDateTime = taskItem.querySelector('.datetime');
    const newTaskText = prompt('Edit your task:', taskText.textContent);
    const newTaskDateTime = prompt(
      'Edit your task date and time:',
      taskDateTime.textContent
    );

    if (newTaskText !== null) taskText.textContent = newTaskText.trim();
    if (newTaskDateTime !== null)
      taskDateTime.textContent = new Date(newTaskDateTime).toLocaleString();
  } else if (e.target.classList.contains('complete-btn')) {
    
    taskItem.classList.toggle('completed');
    e.target.textContent = taskItem.classList.contains('completed')
      ? 'Completed'
      : 'Mark Completed';
  }
}


