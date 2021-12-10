import { ACTION_TYPES } from "./actions";
import type { Action, Todo } from "./types";

export const REDUCER_KEY = "todos";

const todoReducer = (state: Todo[], action: Action): Todo[] => {
  switch (action.type) {
    case ACTION_TYPES.ADD:
      return [...state, action.payload];
    case ACTION_TYPES.EDIT:
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, ...action.payload } : todo
      );
    case ACTION_TYPES.DELETE:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

export default todoReducer;
