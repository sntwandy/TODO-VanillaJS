import { Todo } from '../classes';
import { todoList } from '../index';

// HTML references
const $todoList = document.querySelector('.todo-list');
const $inputTodo = document.querySelector('.new-todo');
const $btnDelete = document.querySelector('.clear-completed');

export const createTodoHtml = (todo) => {
    const view = `
        <li class="${ (todo.completed) ? 'completed' : ''}" data-id="${todo.id}">
			<div class="view">
				<input class="toggle" type="checkbox" ${ (todo.completed) ? 'checked' : '' }>
                <label>${todo.task}</label>
				<button class="destroy"></button>
			</div>
            <input class="edit" value="Create a TodoMVC template">
		</li>
    `;

    const div = document.createElement('div');
    div.innerHTML = view;

    $todoList.append(div.firstElementChild);

    return $todoList;
};

// Events
$inputTodo.addEventListener('keyup', event => {
    if (event.keyCode === 13 && $inputTodo.value.length > 0) {
        const newTodo = new Todo($inputTodo.value);
        todoList.newTodo(newTodo);

        createTodoHtml(newTodo);

        $inputTodo.value = '';
    }
});

$todoList.addEventListener('click', (event) => {
    const eventName = event.target.localName; // input, label, button
    const todoElement = event.target.parentElement.parentElement;
    const todoId = todoElement.getAttribute('data-id');

    if (eventName.includes('input')) { // click check
        todoList.makeCompleted(todoId);
        todoElement.classList.toggle('completed');
    } else if (eventName.includes('button')) {
        todoList.deleteTodo(todoId);
        $todoList.removeChild(todoElement);
    }
});

$btnDelete.addEventListener('click', () => {
    todoList.deleteCompleted();

    for (let i = $todoList.children.length-1; i >=0; i--) {
        const element = $todoList.children[i];

        if (element.classList.contains('completed')) {
            $todoList.removeChild(element);
        }
    }
})