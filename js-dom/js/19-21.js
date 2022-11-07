function getAllTodoElemnts() {
  return document.querySelectorAll('#todoList >li');
}

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

function initSearchInput(params) {
  const searchInput = document.getElementById('searchTerm');
  if (!searchInput) return;

  if (params.get('searchTerm')) {
    searchInput.value = params.get('searchTerm');
  }

  searchInput.addEventListener('input', () => {
    // searchTodo(searchInput.value);
    handleFileChange('searchTerm', searchInput.value);
  });
}

function handleFileChange(filterName, filterValue) {
  // update  queryparams
  const url = new URL(window.location);
  url.searchParams.set(filterName, filterValue);
  history.pushState({}, '', url);

  const todoElementList = getAllTodoElemnts();
  for (const todoElement of todoElementList) {
    const needToShow = isMatch(todoElement, url.searchParams);
    todoElement.hidden = !needToShow;
  }
}

function initFilterStatus(params) {
  // find select
  const filterStatusSelect = document.getElementById('filterStatus');
  if (!filterStatusSelect) return;

  if (params.get('status')) {
    filterStatusSelect.value = params.get('status');
  }

  // attach event change
  filterStatusSelect.addEventListener('change', () => {
    // filterTodo(filterStatusSelect.value);
    handleFileChange('status', filterStatusSelect.value);
  });
}

// main
(() => {
  const params = new URLSearchParams(window.location.search);

  initSearchInput(params);
  initFilterStatus(params);
})();
