import { FC, useState } from "react";
import * as styles from "./styles";

interface TodoTypes {
  onCancel: any;
  addTodo: any;
}

const TodoForm: FC<TodoTypes> = ({ onCancel, addTodo }) => {
  const [title, setTitle]: any = useState("");
  const [description, setDescription]: any = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const generateD = Math.ceil(Math.random() * 100);

  const addingTodo = () => {
    addTodo({ title, description, isCompleted, id: generateD });
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
