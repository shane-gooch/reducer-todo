import React from "react";

export default function TodoList(props) {
  return (
    <div className="todoList">
      {props.todos.map(todo => {
        return (
          <div key={todo.id} className="todo">
            <p
              onDoubleClick={() => props.toggleItem(todo)}
              className={`${todo.completed && "line-through"}`}
            >
              {todo.item}
            </p>
          </div>
        );
      })}
    </div>
  );
}
