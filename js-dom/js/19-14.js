function createElementTodo(todo) {
  if (!todo) return null;

  const todoTemplate = document.getElementById('todoTemplate');
  if (!todoTemplate) return null;

  const todoElement = todoTemplate.content.firstElementChild.cloneNode(true);
  todoElement.dataset.id = todo.id;
  todoElement.dataset.status = todo.status;

  const divElement = todoElement.querySelector('div.todo');
  if (!divElement) return null;

  const aleartClass = todo.status === 'completed' ? 'alert-success' : 'alert-secondary';
  divElement.classList.remove('alert-secondary');
  divElement.classList.add(aleartClass);

  const titleElement = todoElement.querySelector('.todo__title');
  if (titleElement) titleElement.textContent = todo.title;

  const markAsDoneButton = todoElement.querySelector('button.mark-as-done');
  if (markAsDoneButton) {
    markAsDoneButton.addEventListener('click', () => {
      const currentStatus = todoElement.dataset.status;
      const newStatus = currentStatus === 'pending' ? 'completed' : 'pending';

      const todoList = getTodoList();
      const index = todoList.findIndex((x) => x.id === todo.id);
      if (index >= 0) {
        todoList[index].status = newStatus;
        localStorage.setItem('todo_list', JSON.stringify(todoList));
      }

      todoElement.dataset.status = newStatus;

      const newAlertClass = currentStatus === 'pending' ? 'alert-success' : 'alert-secondary';
      divElement.classList.remove('alert-success', 'alert-secondary');
      divElement.classList.add(newAlertClass);

      // sudevcode;
      // const textInButton = currentStatus === 'pending' ? 'Reset' : 'Finish';
      // markAsDoneButton.textContent = textInButton;
      // const backgroundButton =
      //   currentStatus === 'pending' ? 'btn btn-dark mark-as-done' : 'btn btn-success mark-as-done';
      // markAsDoneButton.className = backgroundButton;
      // sudevcode;
    });
  }
  const removeButton = todoElement.querySelector('button.remove');
  if (removeButton) {
    removeButton.addEventListener('click', () => {
      const todoList = getTodoList();
      const newTodoList = todoList.filter((x) => x.id !== todo.id);
      localStorage.setItem('todo_list', JSON.stringify(newTodoList));

      todoElement.remove();
    });
  }

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

function getTodoList() {
  try {
    return JSON.parse(localStorage.getItem('todo_list')) || [];
  } catch {
    return [];
  }
}

// main
(() => {
  // const todoList = [
  //   { id: 1, title: 'Learn JavaScript', status: 'pending' },
  //   { id: 2, title: 'Learn Reactjs', status: 'pending' },
  //   { id: 3, title: 'Learn HTML', status: 'pending' },
  // ];
  const todoList = getTodoList();
  renderTodoList(todoList, 'todoList');
})();
