import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

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

  render() {
    console.log(this.state.todos);
    return (
      <div>
        <h2>Lily's To Do List</h2>
        <TodoForm addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
