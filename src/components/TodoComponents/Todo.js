import React from "react";

const Todo = props => {
  console.log("todo props", props);
  return (
    <div class="todo">
      <p>{props.todo.task}</p>
    </div>
  );
};

export default Todo;
