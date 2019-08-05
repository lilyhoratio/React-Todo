import React, { Component } from "react";

export class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoTask: ""
    };
  }

  handleChanges = e => {
    console.log(e.target.value); // refers to name="todoTask" on input form
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.todoTask);
    this.props.addTodo(this.state.todoTask);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="todoTask"
          //   name="item"
          value={this.state.todoTask}
          onChange={this.handleChanges}
        />
        <button>Add Item</button>
      </form>
    );
  }
}

export default TodoForm;
