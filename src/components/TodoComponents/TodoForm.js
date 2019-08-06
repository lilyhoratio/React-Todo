import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    this.setState({ todoTask: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="todoTask"
          //   name="item"
          placeholder="your to-do here"
          value={this.state.todoTask}
          onChange={this.handleChanges}
        />
        {/* <button>Add Item</button> */}
        <FontAwesomeIcon
          onClick={this.handleSubmit}
          id="task-icon"
          icon="plus-square"
        />
      </form>
    );
  }
}

export default TodoForm;
