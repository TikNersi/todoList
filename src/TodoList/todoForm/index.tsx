import { FC, useState } from "react";

import { addTodo } from "../../Store/actions";
import { useTodosDispatch } from "../../Store/context";

import * as styles from "./styles";

interface TodoTypes {
  onCancel: any;
}

const TodoForm: FC<TodoTypes> = ({ onCancel }) => {
  const todosDispatch = useTodosDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  const addingTodo = () => {
    todosDispatch(
      addTodo({
        title,
        description,
        isCompleted,
        id: Date.now(),
      })
    );
    onCancel();
  };

  return (
    <styles.TodoForm>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <div className="container">
          <div className="title">
            <label htmlFor="title">Title</label>
            <input
              aria-label="title"
              maxLength={25}
              value={title}
              type="text"
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          </div>
          <div className="description">
            <label htmlFor="description">Description</label>
            <input
              aria-label="description"
              maxLength={70}
              value={description}
              type="text"
              onChange={(e) => setDescription(e.target.value)}
            ></input>
          </div>
          <div className="buttons">
            <button className="cancel-button" onClick={onCancel}>
              Cancel
            </button>
            <button
              className="confirm-button"
              type="submit"
              onClick={addingTodo}
            >
              Confirm
            </button>
          </div>
        </div>
      </form>
    </styles.TodoForm>
  );
};

export default TodoForm;
