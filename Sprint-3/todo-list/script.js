let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todoInput");
const todoForm = document.getElementById("todoForm");
const removeAllCompletedBtn = document.getElementById("remove-all-completed");

function createTodoElement(todo) {
  const li = document.createElement("li");

  li.innerText = todo.task;

  if (todo.completed) {
    li.style.textDecoration = "line-through";
  }

  const checkIcon = document.createElement("i");
  checkIcon.className = "fa fa-check";
  checkIcon.style.marginLeft = "10px";
  checkIcon.addEventListener("click", () => {
    todo.completed = !todo.completed;
    li.style.textDecoration = todo.completed ? "line-through" : "none";
  });

  const trashIcon = document.createElement("i");
  trashIcon.className = "fa fa-trash";
  trashIcon.style.marginLeft = "10px";
  trashIcon.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(checkIcon);
  li.appendChild(trashIcon);
  todoList.appendChild(li);
}

function populateTodoList(todos) {
  todoList.innerHTML = "";
  todos.forEach(createTodoElement);
}

function addNewTodo(event) {
  event.preventDefault();

  const taskText = todoInput.value.trim();
  if (!taskText) return;

  const newTodo = { task: taskText, completed: false };
  todos.push(newTodo);
  createTodoElement(newTodo);

  todoInput.value = "";
}

function deleteAllCompletedTodos() {
  const items = Array.from(todoList.children);

  items.forEach((li) => {
    if (li.style.textDecoration === "line-through") {
      li.remove();
    }
  });
}

todoForm.addEventListener("submit", addNewTodo);
removeAllCompletedBtn.addEventListener("click", deleteAllCompletedTodos);

populateTodoList(todos);
