//KUMPULKAN SEMUA UI ELEMENT
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const filterInput = document.querySelector("#filter-input");
const todoList = document.querySelector("#todo-list");
const clearButton = document.querySelector("#clear-todos");

todoForm.addEventListener("submit", addTodo);
todoList.addEventListener("click", deleteTodo);
clearButton.addEventListener("click", clearTodos);
filterInput.addEventListener("keyup", filterTodos);

// PROSES MENAMBAHKAN TODO LIST
function addTodo(e) {
  e.preventDefault();

  if (todoInput.value) {
    // membuat li element
    const li = document.createElement("li");
    // menambahkan class pada element li
    li.className =
      " todo-item list-group-item d-flex justify-content-between align-items-center mb-1";
    // menambahkan children ke element li
    li.appendChild(document.createTextNode(todoInput.value));
    // membuat delete button
    const a = document.createElement("a");
    //memberi properti untuk a element
    a.href = "#";
    a.className = "badge badge-danger delete-todo";
    a.innerHTML = "Delete";
    //menyelipkan element a ke children li
    li.appendChild(a);
    //memasukan element li ke element todolist
    todoList.appendChild(li);
    // MENGHILANGKAN VALUE TODO INPUT
    todoInput.value = "";
  } else {
    alert("Todo tidak boleh kosong!");
  }
}

// PROSES DELETE TODO LIST
function deleteTodo(e) {
  e.preventDefault();

  if (e.target.classList.contains("delete-todo")) {
    if (confirm("Apakah yakin akan menghapus")) {
      const parent = e.target.parentElement;
      parent.remove();
    }
  }
}

// PROSES MENGHAPUS SEMUA TODO LIST
function clearTodos() {
  todoList.innerHTML = "";
}

// PROSES MEMFILTER TODOS
function filterTodos(e) {
  const filterText = e.target.value.toLowerCase();
  const todoItems = document.querySelectorAll(".todo-item");

  todoItems.forEach((item) => {
    const itemText = item.firstChild.textContent.toLowerCase();

    if (itemText.indexOf(filterText) !== -1) {
      item.setAttribute("style", "displa: block;");
    } else {
      item.setAttribute("style", "display: none !important;");
    }
  });
}
