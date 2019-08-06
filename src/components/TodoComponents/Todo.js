import React from "react";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Todo = props => {
  console.log("todo props", props);
  return (
    <div
      className={`todo-item${props.todo.completed ? "-completed" : ""}`}
      onClick={() => props.toggleItem(props.todo.id)}
    >
      <FontAwesomeIcon
        // icon={`${props.todo.completed} ? "check-circle" : "circle"`}
        icon="fa-check-circle"
      />
      <p>{props.todo.task}</p>
    </div>
  );
};

export default Todo;
