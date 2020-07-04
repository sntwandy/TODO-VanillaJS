import { TodoList, Todo } from './classes';
import  { createTodoHtml } from './js/components';

// Styles
import './styles.css';

export const todoList = new TodoList();

todoList.todos.forEach(todo => createTodoHtml(todo));