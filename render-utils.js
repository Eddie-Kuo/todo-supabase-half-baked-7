export function renderTodo(todo, handleComplete) {
    // create a div and a p tag
    // depending on whether the todo is complete, give the div the appropriate css class ('complete' or 'incomplete')
    const div = document.createElement('div');
    const pTag = document.createElement('p');

    div.classList.add(todo.complete ? 'complete' : 'incomplete');
    // add the 'todo' css class no matter what
    div.classList.add('todo');
    // put the todo's text into the p tag
    pTag.textContent = todo.todo;
    // append stuff
    div.append(pTag);
    // add event listener for click and call handleComplete function
    div.addEventListener('click', () => {
        handleComplete(todo);
    });
    // return the div
    return div;
}


