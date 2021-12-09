import { createContext, useReducer } from "react";
import { ACTIONS } from "./Actions";
import todoReducer from "./Reducer";

export const TodoContext:any = createContext("");

export const TodoState = (props: any) => {
  const intialState = {
    //@ts-ignore
    todos: JSON.parse(localStorage.getItem('todos')) ?? [],
  };

  const [state, dispatch] = useReducer(todoReducer, intialState);

  const addTodo = (todo: any) => {
    dispatch({
      type: ACTIONS.ADD,
      payload: todo,
    });
  };

  const editTodo = (todo: Record<string, string>) => {
    dispatch({
      type: ACTIONS.EDIT,
      payload: todo,
    });
  };

  const deleteTodo = (todoID: number) => {
    dispatch({
      type: ACTIONS.DELETE,
      payload: todoID,
    });
  };

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        addTodo,
        editTodo,
        deleteTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};
