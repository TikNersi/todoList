import { createContext, FC, useContext, useMemo, useReducer } from "react";

import todoReducer, { REDUCER_KEY } from "./reducer";
import type { Todo } from "./types";

export const TodoStateContext = createContext(null as unknown as Todo[]);
export const TodoDispatchContext = createContext(null as unknown as Function);

const withPersistMiddleware = (reducer: Function, key: string) => {
  return (...args: any[]) => {
    const state = reducer(...args);
    localStorage.setItem(key, JSON.stringify(state));
    return state;
  };
};

const persistedTodoReducer = withPersistMiddleware(todoReducer, REDUCER_KEY);

export const TodoContextProvider: FC = ({ children }) => {
  const todos = useMemo(() => {
    const _todos = localStorage.getItem(REDUCER_KEY);
    return _todos ? JSON.parse(_todos) : [];
  }, []);

  const [state, dispatch] = useReducer(persistedTodoReducer, todos);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

export const useTodosState = () => useContext(TodoStateContext);
export const useTodosDispatch = () => useContext(TodoDispatchContext);
