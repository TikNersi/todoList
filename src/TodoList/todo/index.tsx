import { FC, useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

import { useTodosDispatch } from "../../Store/context";
import { deleteTodo, editTodo } from "../../Store/actions";

import * as styles from "./styles";

interface TodoTypes {
  id: any;
  title?: any;
  description?: any;
}

const Todo: FC<TodoTypes> = ({
  id,
  title: initialTitle = "",
  description: initialDescription = "",
}) => {
  const todosDispatch = useTodosDispatch();
  const [title, setTitle]: any = useState(initialTitle);
  const [description, setDescription]: any = useState(initialDescription);
  const [isEditing, setIsEditing] = useState(false);

  const onDelete = () => {
    todosDispatch(deleteTodo(id));
  };

  const onConfirm = () => {
    todosDispatch(editTodo({ title, description, id }));
    setIsEditing(false);
  };

  return (
    <styles.Todo tabIndex={1}>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <div className="container">
          <div className="title">
            {isEditing ? (
              <>
                <label htmlFor="title">Title</label>
                <input
                  aria-label="title"
                  maxLength={25}
                  value={title}
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                ></input>
              </>
            ) : (
              <span className="title-text">
                Title: <span>{title}</span>{" "}
              </span>
            )}
          </div>
          <div className="description">
            {isEditing ? (
              <>
                <label htmlFor="description">Description</label>
                <input
                  aria-label="description"
                  maxLength={70}
                  value={description}
                  type="text"
                  onChange={(e) => setDescription(e.target.value)}
                ></input>
              </>
            ) : (
              <span className="title-text">
                Description: <span>{description}</span>
              </span>
            )}
          </div>
          {isEditing ? (
            <div className="buttons">
              <button
                className="cancel-button"
                type="reset"
                onClick={() => {
                  setDescription(initialDescription);
                  setTitle(initialTitle);
                  setIsEditing(false);
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="confirm-button"
                onClick={onConfirm}
              >
                Confirm
              </button>
            </div>
          ) : null}
        </div>
        {!isEditing ? (
          <div className="icons">
            <AiFillEdit onClick={() => setIsEditing(true)} />
            <AiFillDelete onClick={onDelete} />
          </div>
        ) : null}
      </form>
    </styles.Todo>
  );
};

export default Todo;
