function isMatchSearch(liElement, searchTerm) {
  if (!liElement) return false;
  // searchTerm === empty --> show all
  // searchTerm !== empty --> filter todo
  if (searchTerm === '') return true;

  const titleElement = liElement.querySelector('p.todo__title');
  if (!titleElement) return false;

  return titleElement.textContent.toLowerCase().includes(searchTerm.toLowerCase());
}

function isMatchStatus(liElement, filterStatus) {
  return filterStatus === 'all' || liElement.dataset.status === filterStatus;
}

function isMatch(liElement, params) {
  return (
    isMatchSearch(liElement, params.get('searchTerm')) &&
    isMatchStatus(liElement, params.get('status'))
  );
}

function createElementTodo(todo, params) {
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

  todoElement.hidden = !isMatch(todoElement, params);

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

  // add click event for edit button
  const editButton = todoElement.querySelector('button.edit');
  if (editButton) {
    editButton.addEventListener('click', () => {
      // latest todo data - get form localStorage
      const todoList = getTodoList();
      const latestTodo = todoList.find((x) => x.id === todo.id);
      if (!latestTodo) return;
      // populate data to todo form
      populateTodoForm(latestTodo);
    });
  }

  return todoElement;
}

function populateTodoForm(todo) {
  const todoForm = document.getElementById('todoFormId');
  if (!todoForm) return;
  todoForm.dataset.id = todo.id;

  const todoInput = document.getElementById('todoText');
  if (!todoInput) return;
  todoInput.value = todo.title;
}

function renderTodoList(todoList, ulElementId, params) {
  if (!Array.isArray(todoList) || todoList.length === 0) return;
  const ulElement = document.getElementById(ulElementId || 'todoList');
  if (!ulElement) return;

  for (const todo of todoList) {
    const liElement = createElementTodo(todo, params);
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

function handleTodoFormSubmit(event) {
  event.preventDefault();
  const todoForm = document.getElementById('todoFormId');
  if (!todoForm) return;

  const todoInput = document.getElementById('todoText');
  if (!todoInput) {
    alert('Todo Input Not Found');
    return;
  }

  // determine add or edit mode
  const isEdit = Boolean(todoForm.dataset.id);

  if (isEdit) {
    // find current todo
    const todoList = getTodoList();
    const index = todoList.findIndex((x) => x.id.toString() === todoForm.dataset.id);
    if (index < 0) return;

    // update content
    todoList[index].title = todoInput.value;

    // save
    localStorage.setItem('todo_list', JSON.stringify(todoList));

    // apply Dom changes
    // find li element having id
    const liElement = document.querySelector(`ul#todoList > li[data-id="${todoForm.dataset.id}"]`);
    if (liElement) {
      // liElement.textContent = todoInput.value;
      const titleElement = liElement.querySelector('.todo__title');
      if (titleElement) titleElement.textContent = todoInput.value;
    }
  } else {
    // add mode
    const newTodo = {
      id: Date.now(),
      title: todoInput.value,
      status: 'pending',
    };

    const todoList = getTodoList();
    todoList.push(newTodo);
    localStorage.setItem('todo_list', JSON.stringify(todoList));

    const newLiElement = createElementTodo(newTodo);
    const ulElement = document.getElementById('todoList');
    if (!ulElement) return;
    ulElement.appendChild(newLiElement);
  }

  delete todoForm.dataset.id;
  todoForm?.reset();
}

// main
(() => {
  // const todoList = [
  //   { id: 1, title: 'Learn JavaScript', status: 'pending' },
  //   { id: 2, title: 'Learn Reactjs', status: 'pending' },
  //   { id: 3, title: 'Learn HTML', status: 'pending' },
  // ];
  const params = new URLSearchParams(window.location.search);

  const todoList = getTodoList();
  renderTodoList(todoList, 'todoList', params);

  // register submit event for todo form
  const todoForm = document.getElementById('todoFormId');
  if (todoForm) todoForm.addEventListener('submit', handleTodoFormSubmit);
})();
