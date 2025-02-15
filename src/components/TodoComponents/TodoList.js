// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TodoList = props => {
  console.log("PROPS TO DOS", props.todos);
  return (
    <div className="todo-list">
      <div className="todo-list-incomplete">
        <h4>To-dos</h4>
        {props.todos.map(todo => {
          if (!todo.completed) {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                toggleItem={props.toggleItem}
                clearCompleted={props.clearCompleted}
                deleteItem={props.deleteItem}
              />
            );
          }
        })}
      </div>
      <div className="todo-list-complete">
        <div className="todo-list-complete-header">
          <h4>Completed</h4>
          <FontAwesomeIcon
            id="task-icon"
            icon="trash"
            onClick={props.clearCompleted}
          />
        </div>
        {props.todos.map(todo => {
          if (todo.completed) {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                toggleItem={props.toggleItem}
                clearCompleted={props.clearCompleted}
                deleteItem={props.deleteItem}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default TodoList;
