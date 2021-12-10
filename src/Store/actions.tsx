import { Todo } from "./types";

export const ACTION_TYPES = {
  ADD: "todo/add",
  EDIT: "todo/edit",
  DELETE: "todo/delete",
};

export const addTodo = (todo: Todo) => ({
  type: ACTION_TYPES.ADD,
  payload: todo,
});

export const editTodo = (todo: Partial<Todo>) => ({
  type: ACTION_TYPES.EDIT,
  payload: todo,
});

export const deleteTodo = (todoID: number) => ({
  type: ACTION_TYPES.DELETE,
  payload: todoID,
});
