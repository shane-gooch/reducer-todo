import React, { useReducer } from "react";
import "./App.css";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import {
  ADD_ITEM,
  TOGGLE_ITEM,
  initialState,
  reducer,
  CLEAR_COMPLETED
} from "./reducers/index";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  const addItem = (e, todo) => {
    e.preventDefault();
    dispatch({ type: ADD_ITEM, payload: todo });
  };

  const toggleItem = todo => {
    dispatch({ type: TOGGLE_ITEM, payload: todo });
  };

  const clearCompleted = e => {
    e.preventDefault();
    dispatch({ type: CLEAR_COMPLETED });
  };

  return (
    <div className="App">
      <TodoForm addItem={addItem} clearCompleted={clearCompleted} />
      <TodoList todos={state.todos} toggleItem={toggleItem} />
    </div>
  );
}

export default App;
