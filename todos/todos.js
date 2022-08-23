import { 
    checkAuth, 
    createTodo, 
    completeTodo,
    getTodos,
    logout,
    deleteAllTodos, 
} from '../fetch-utils.js';
import { renderTodo } from '../render-utils.js';

checkAuth();

const todosEl = document.querySelector('.todos');
const todoForm = document.querySelector('.todo-form');
const logoutButton = document.querySelector('#logout');
const deleteButton = document.querySelector('.delete-button');

todoForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = new FormData(todoForm);
    const response = await createTodo({ todo: data.get('todo'), });
    console.log(response);
    // on submit, create a todo, reset the form, and display the todos
    todoForm.reset();
    displayTodos();
});

// create todo state
// let todos = [];

// add async complete todo handler function
    // call completeTodo
    // swap out todo in array
    // call displayTodos

async function handleComplete(todo) {
    await completeTodo(todo.id);
    displayTodos();
}



async function displayTodos() {
    // clear the container (.innerHTML = '')
    todosEl.innerHTML = '';

    // display the list of todos, 
          // call render function, pass in state and complete handler function!
          // append to .todos
    const todos = await getTodos();
    console.log(todos);
    for (let todo of todos) {
        const todoList = renderTodo(todo, handleComplete);
        todosEl.append(todoList);
    }
}
displayTodos();

// add page load function
    // fetch the todos and store in state
    // call displayTodos
async function onLoad() {
    await getTodos();
    displayTodos();
}
onLoad();


logoutButton.addEventListener('click', () => {
    logout();
});


deleteButton.addEventListener('click', async () => {
    // delete all todos
    // modify state to match
    // re displayTodos
});
