const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");
const taskCounter = document.getElementById("task-counter");

let totalTasks = 0;

function updateCounter() {
  taskCounter.textContent = totalTasks;
}

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    return;
  }

  const li = document.createElement("li");

  const textSpan = document.createElement("span");
  textSpan.textContent = taskText;

  textSpan.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", () => {
    li.remove();
    totalTasks--;
    updateCounter();
  });

  li.appendChild(textSpan);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);

  taskInput.value = "";
  totalTasks++;
  updateCounter();
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});
