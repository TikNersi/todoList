import TodoList from "./TodoList";
import SearchBar from "./SearchBar";
import { TodoContextProvider } from "./Store/context";

import "./App.css";

function App() {
  return (
    <TodoContextProvider>
      <div className="App">
        <SearchBar />
        <TodoList />
      </div>
    </TodoContextProvider>
  );
}

export default App;
