function createElementTodo(todo) {
  if (!todo) return;
  const li = document.createElement('li');
  li.textContent = todo.title;
  li.dataset.id = todo.id;
  li.style.color = 'red';

  return li;
}

function renderTodoList(todoList, ulElementId) {
  if (!Array.isArray(todoList) || todoList.length === 0) return;
  const ulElement = document.getElementById(ulElementId ?? 'todoList');
  if (!ulElement) return;

  for (const todo of todoList) {
    const li = createElementTodo(todo);
    ulElement.appendChild(li);
  }
}

(() => {
  const todoList1 = [
    { id: 1, title: 'long' },
    { id: 2, title: 'hai' },
  ];
  renderTodoList(todoList1, 'todoList1');
  const todoList2 = [
    { id: 1, title: 'quan' },
    { id: 2, title: 'ims' },
  ];
  renderTodoList(todoList2, 'todoList2');
})();
