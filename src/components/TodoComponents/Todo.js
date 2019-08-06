import React from "react";

const Todo = props => {
  console.log("todo props", props);
  return (
    <div
      className={`todo-item${props.todo.completed ? "-completed" : ""}`}
      onClick={() => props.toggleItem(props.todo.id)}
    >
      <p>{props.todo.task}</p>
    </div>
  );
};

export default Todo;
