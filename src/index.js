import { TodoList, Todo } from './classes';
import  { createTodoHtml } from './js/components';

// Styles
import './styles.css';

const todoList = new TodoList();

const task = new Todo('Learn JS');
todoList.newTodo(task);

console.log(todoList);

createTodoHtml(task);