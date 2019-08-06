// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  console.log(props);
  return (
    <div className="todo-list">
      <div className="todo-list-incomplete">
        {props.todos.map(todo => {
          if (!todo.completed) {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                toggleItem={props.toggleItem}
                clearCompleted={props.clearCompleted}
              />
            );
          }
        })}
      </div>
      <div className="todo-list-complete">
        <p>Completed Tasks</p>
        <button className="clear-btn" onClick={props.clearCompleted}>
          Clear
        </button>
        {props.todos.map(todo => {
          if (todo.completed) {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                toggleItem={props.toggleItem}
                clearCompleted={props.clearCompleted}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default TodoList;
