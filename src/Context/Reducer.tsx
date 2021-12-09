import { ACTIONS } from "./Actions";

const todoReducer = (state: Record<any, any>, action: Record<any, any>) => {
  switch (action.type) {
    case ACTIONS.ADD:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case ACTIONS.EDIT:
      return {
        ...state,
        todos: state.todos.map((todo: Record<any, any>) =>
          todo.id === action.payload.id ? { ...todo, ...action.payload } : todo
        ),
      };
    case ACTIONS.DELETE:
      return {
        ...state,
        todos: state.todos.filter(
          (todo: Record<any, any>) => todo.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default todoReducer;
