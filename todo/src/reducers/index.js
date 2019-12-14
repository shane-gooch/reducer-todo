import uuid from "uuid";
import { CONNREFUSED } from "dns";

export const ADD_ITEM = "ADD_ITEM";
export const TOGGLE_ITEM = "TOGGLE_ITEM";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";

export const initialState = {
  todos: [
    {
      item: "learn about reducers",
      completed: false,
      id: 1
    }
  ]
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const newTodo = {
        item: action.payload,
        completed: false,
        id: uuid()
      };
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };
    case TOGGLE_ITEM:
      const toggledItem = state.todos.map(todo =>
        todo.id === action.payload.id
          ? { ...action.payload, completed: !action.payload.completed }
          : todo
      );
      return {
        ...state,
        todos: toggledItem
      };
    case CLEAR_COMPLETED:
      const clearCompleted = state.todos.filter(
        todos => todos.completed === false
      );
      return {
        ...state,
        todos: clearCompleted
      };
    default:
      return state;
  }
};
