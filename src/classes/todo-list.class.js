export class TodoList {
    constructor() {
        this.todos = [];
    };

    newTodo(todo) {
        this.todos.push(todo);
    };

    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id != id);
    };

    makeCompleted(id) {
        for (const todo of this.todos) {

            if (todo.id == id) {
                todo.completed = !todo.completed;
                break;
            }
        }
    };

    deleteCompleted() {
        this.todos = this.todos.filter(todo => !todo.completed);
    };
};