document.getElementById("addBtn").addEventListener("click", addTask);

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const todoList = document.getElementById("todoList");

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;

  const startBtn = document.createElement("button");
  startBtn.textContent = "Start";
  startBtn.onclick = () => moveToInProcess(li, taskText);

  li.appendChild(span);
  li.appendChild(startBtn);

  todoList.appendChild(li);
  taskInput.value = "";
}

function moveToInProcess(taskElement, taskText) {
  const inProcessList = document.getElementById("inProcessList");

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = taskText;

  const doneBtn = document.createElement("button");
  doneBtn.textContent = "Done";
  doneBtn.onclick = () => moveToCompleted(li, taskText);

  li.appendChild(span);
  li.appendChild(doneBtn);
  inProcessList.appendChild(li);

  taskElement.remove();
}

function moveToCompleted(taskElement, taskText) {
  const completedList = document.getElementById("completedList");

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = taskText;

  li.appendChild(span);
  completedList.appendChild(li);

  taskElement.remove();
}
