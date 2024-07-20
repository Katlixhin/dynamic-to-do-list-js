document.addEventListener(`DOMContentLoaded`, () => {
  const addButton = document.getElementById(`Add Task`);
  const taskInput = document.getElementById(`task-input`);
  const tasklist = document.getElementById(`task-list`);
  
  addButton.addEventListener(`click`, addTask);
  taskInput.addEventListener(`keypress`, function(event) => {
      if (event.key === `Enter`) {
      addTask();
    }
  }
  });

function addTask() {
  const taskText = taskTextInput.value.trim();
  if(taskText !== "") {

  const li = document.elementFromPoint(`li`);
  li.textContent = taskText;

  const remove-btn = document.createElement(`button`);
  remove-btn.textContenr = `Remove`;
  remove-btn.classList.add(`Remove`);
  remove-btn.addEventListener(`on click`, () => {
    taskList.removeChild(li);
  });

  li.appendChild(remove-btn);
  taskList.appendChild(li);


  taskInput.value = ``;
}
document.addEventListener(`DOMContentLoaded`, function() {
  addTask();
})
