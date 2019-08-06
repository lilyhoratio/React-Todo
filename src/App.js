import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTasks,
  faTrash,
  faPlusSquare,
  faCheck
} from "@fortawesome/free-solid-svg-icons";

library.add(faTasks, faTrash, faPlusSquare, faCheck);

const todoData = [
  {
    task: "Make a to do list",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Stop procrastinating",
    id: 1528817084358,
    completed: false
  },
  {
    task: "Submit my to do list",
    id: 1528817084359,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todoData
    };
  }

  addTodo = todoTask => {
    console.log(todoTask);
    const newTodo = {
      task: todoTask,
      // name: todoTask //die
      id: Date.now(),
      completed: false
    };
    console.log(newTodo);
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  deleteItem = id => {
    const filteredItems = this.state.todos.filter(todo => todo.id !== id);
    console.log("delete id", filteredItems);

    this.setState({
      todos: filteredItems
    });
  };

  // if clicked, change "completed" to !completed
  toggleItem = id => {
    // console.log(id);
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
          // will error without else statement because maps over entire array and expects return for not clicked on todos
        }
        return todo;
      })
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed) //false
    });
  };

  render() {
    console.log(this.state.todos);
    return (
      <div className="todo-all">
        <div className="todo-header">
          <h2>__Dunderlist__</h2>
          <FontAwesomeIcon id="task-icon" icon="tasks" />
        </div>
        <div className="todo-main">
          <TodoForm addTodo={this.addTodo} />
          <TodoList
            todos={this.state.todos}
            toggleItem={this.toggleItem}
            clearCompleted={this.clearCompleted}
            deleteItem={this.deleteItem}
          />
        </div>
      </div>
    );
  }
}

export default App;
