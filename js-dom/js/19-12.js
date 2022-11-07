function createElementTodo(todo) {
  if (!todo) return null;

  const todoTemplate = document.getElementById('todoTemplate');
  if (!todoTemplate) return null;

  const todoElement = todoTemplate.content.firstElementChild.cloneNode(true);
  todoElement.dataset.id = todo.id;
  const titleElement = todoElement.querySelector('.todo__title');
  if (titleElement) titleElement.textContent = todo.title;

  return todoElement;
}

function renderTodoList(todoList, ulElementId) {
  if (!Array.isArray(todoList) || todoList.length === 0) return;
  const ulElement = document.getElementById(ulElementId || 'todoList');
  if (!ulElement) return;

  for (const todo of todoList) {
    const liElement = createElementTodo(todo);
    ulElement.appendChild(liElement);
  }
}

// main
(() => {
  const todoList = [
    { id: 1, title: 'Learn JavaScript' },
    { id: 2, title: 'Learn Reactjs' },
    { id: 3, title: 'Learn HTML' },
  ];
  renderTodoList(todoList, 'todoList');
})();
