import { TodoList, Todo } from './classes';

// Styles
import './styles.css';

const todoList = new TodoList();

const task = new Todo('Learn JS');
todoList.newTodo(task);

console.log(todoList);