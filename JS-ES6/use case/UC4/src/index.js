// Model
class Todo {
    constructor(title, date) {
        Todo.nextId++;
        this.id = Todo.nextId; // auto_increment
        this.title = title;
        this.completed = false
        this.date = date
    }
}
Todo.nextId = 0;
let toDoItems=[];
// Service
class TodosService {
    constructor() {}
    addTodo(title) {
        toDoItems.push(new Todo(title,new Date()));
        console.log(toDoItems);
    }
    editTodo(id, newTitle) {
        toDoItems.find( (todo) =>{
            if(todo.id===id){
                todo.title=newTitle;
                console.log(toDoItems);
            }
        });
    }
    completeTodo(id) {
        toDoItems.find( (todo) =>{
            if(todo.id===id){
                todo.completed=true;
                console.log(toDoItems);
            }
        });
    }
    completeAll() {
        toDoItems.forEach((item,index)=>{
            this.completed=true;
        });
    }
    deleteTodo(id) {
        let filteredTodo = toDoItems.filter((item) => item.id !== id);
        toDoItems=filteredTodo;
        console.log(toDoItems);
    }
    clearCompleted() {
        let filteredTodo = toDoItems.filter((item) => !item.completed);
        toDoItems=filteredTodo;
        console.log(toDoItems);
    }
    viewTodos(filter) {
        return this.TodoList.reduce((acc, curr) => {
            switch (filter) {
              case "completed" :
                if(curr.completed) acc.push(curr);
                break;
              case "not completed" :
                if(!curr.completed) acc.push(curr);
                break;
              default:
                throw new Error("Un supported filter");
            }
            return acc;
        }, []);
    }
}

const service = new TodosService();
