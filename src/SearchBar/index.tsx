import { useState } from "react";

import { AiOutlineSearch } from "react-icons/ai";
import { useTodosState } from "../Store/context";

import Todo from "../TodoList/todo";
import * as styles from "./styles";

const SearchBar = () => {
  const todos = useTodosState();
  const [title, setTitle] = useState("");

  return (
    <>
      <styles.Search>
        <AiOutlineSearch />
        <input type="text" onChange={(e) => setTitle(e.target.value)}></input>
      </styles.Search>
      <styles.Content>
        {title &&
          todos
            .filter((todo) => todo.title.includes(title))
            .map((todo) => {
              return (
                <div style={{ margin: "16px" }} key={Math.random() * 10}>
                  <Todo {...todo} />
                </div>
              );
            })}
      </styles.Content>
    </>
  );
};

export default SearchBar;
