//-A user must be able to add, edit, and delete a todo item.

const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');
const ul = document.querySelector('ul');

let todoArray = [];


// generate new HTML template in <ul>
function generateTemplate(todo) {

  const html = `
  <li class="list-group-item d-flex" id="${todo.id}">
  <form>
  <input type="text" class="editField inputs" value="${todo.title}" readonly disabled="disabled">
  <i class="fas fa-edit edit ml-auto align-self-center"></i>
  </form>
  <i class="far fa-trash-alt delete align-self-center"></i>
  </li>
  `;

  list.innerHTML += html;

};

//listen for new todo
addForm.addEventListener('submit', e => {

  //prevent refresh
  e.preventDefault();

  //.trim() - remove white spaces entered
  const todo = addForm.newtodo.value.trim();

    //if empty string - don't fire Teplate function
    if (todo === ''){
      return
    };

    addTodo(todo);

    //reset input field after submit
    addForm.reset();

  });

//add to todoArray, update local storage and create template
function addTodo(todo){
  if(todo != ''){
    const todoItem = {
      id: Date.now() + Math.floor(Math.random()*1000000),
      title: todo,
    };

    todoArray.push(todoItem);
    addToLocalStorage(todoArray);
    generateTemplate(todoItem);
  };

};

//render on load
function renderTodos() {

  const list = localStorage.getItem('todos');
  todoArray = JSON.parse(list);

  todoArray.forEach((item) => {
  generateTemplate(item)
  });
};


//delete todo - remove local storage todos if todoArray empty
function deleteTodo(id){

  todoArray = todoArray.filter(item => {
    return item.id != id
  })
      addToLocalStorage(todoArray)
      if(todoArray.length === 0){localStorage.removeItem('todos')}
};


function addToLocalStorage(todos){
  localStorage.setItem('todos', JSON.stringify(todos));
};

// render local todos on page load - else load API todos
if(localStorage.getItem('todos')){
  renderTodos()
} else getTodos()


// delete todo via trash can icon - remove() method on parent element
list.addEventListener('click', e => {

  if(e.target.classList.contains('delete')){

    deleteTodo(e.target.parentElement.id);
    e.target.parentElement.remove();

  }

});

//enable todo edit via pencil icon
list.addEventListener('click', e => {

 if(e.target.classList.contains('edit') && e.target.previousElementSibling.hasAttribute('readonly')){
    e.target.previousElementSibling.removeAttribute('readonly');
    e.target.previousElementSibling.disabled = false;
    e.target.previousElementSibling.focus();
    e.target.previousElementSibling.setSelectionRange(0, 100);
  } else if (e.target.classList.contains('edit')) {
    e.target.previousElementSibling.setAttribute('readonly', 'true');
    e.target.previousElementSibling.disabled = true;
  };

});


//edit todo & update local storage on submit
ul.addEventListener('submit', e => {
  e.preventDefault();

  const newTitleVal = e.target.firstChild.nextSibling.value;
  const parentId = e.target.parentElement.id;

  const eventIndex = todoArray.findIndex(element => {
    return element.id == parentId});

  todoArray[eventIndex].title = newTitleVal;
  addToLocalStorage(todoArray);

  e.target.firstChild.nextSibling.blur();
  e.target.firstChild.nextSibling.disabled = true;

});

//search function using filter()
function filterTodos(term){
  Array.from(list.children)
  .filter((todo) => !todo.innerHTML.toLowerCase().includes(term))
  .forEach((todo) => {
      todo.classList.add('filtered');
    });

  Array.from(list.children)
  .filter((todo) => todo.innerHTML.toLowerCase().includes(term))
  .forEach((todo) => {
      todo.classList.remove('filtered');
    })
  };

//keyup event when a key is released - fire filterTodos()
search.addEventListener('keyup', () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});
