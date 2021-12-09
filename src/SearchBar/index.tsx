import { useContext, useState } from "react";

import { AiOutlineSearch } from "react-icons/ai";
import { TodoContext } from "../Context/Context";

import Todo from "../TodoList/todo";
import * as styles from "./styles";

const SearchBar = () => {
  const { todos, deleteTodo, editTodo } = useContext(TodoContext);
  const [title, setTitle]: any = useState(null);

  return (
    <>
      <styles.Search>
        <AiOutlineSearch />
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        ></input>
      </styles.Search>
      <styles.Content>
        {title &&
          todos
            .filter((todo: Record<any, any>) => todo.title.includes(title))
            .map((todo: Record<any, any>) => {
              return (
                <div style={{ margin: "16px" }} key={Math.random() * 10}>
                  <Todo
                    deleteTodo={deleteTodo}
                    incomingdescription={todo.description}
                    incomingtitle={todo.title}
                    id={todo.id}
                    editTodo={editTodo}
                  />
                </div>
              );
            })}
      </styles.Content>
    </>
  );
};

export default SearchBar;
