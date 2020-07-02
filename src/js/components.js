import { Todo } from '../classes';
import { todoList } from '../index';

// HTML references
const $todoList = document.querySelector('.todo-list');
const $inputTodo = document.querySelector('.new-todo');

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

        console.log(todoList);
        createTodoHtml(newTodo);

        $inputTodo.value = '';
    }
})