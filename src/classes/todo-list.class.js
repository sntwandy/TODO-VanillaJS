import { Todo } from "./todo.class";

export class TodoList {
    constructor() {
        // this.todos = [];
        this.loadLocalStorage();
    };

    newTodo(todo) {
        this.todos.push(todo);
        this.saveLocalStorage();
    };

    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id != id);
        this.saveLocalStorage();
    };

    makeCompleted(id) {
        for (const todo of this.todos) {

            if (todo.id == id) {
                todo.completed = !todo.completed;
                break;
            }
        }
        this.saveLocalStorage();
    };

    deleteCompleted() {
        this.todos = this.todos.filter(todo => !todo.completed);
        this.saveLocalStorage();
    };

    loadLocalStorage() {
        this.todos = localStorage.getItem('todo') ?
                JSON.parse(localStorage.getItem('todo'))
            :
                [];
        this.todos = this.todos.map(obj => Todo.fromJson(obj));
    };

    saveLocalStorage() {
        localStorage.setItem('todo', JSON.stringify(this.todos));
    };
};