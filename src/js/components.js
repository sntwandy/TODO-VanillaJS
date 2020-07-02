// HTML references
const $todoList = document.querySelector('.todo-list');

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