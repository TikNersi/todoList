import "./App.css";
import { TodoState } from "./Context/Context";
import SearchBar from "./SearchBar";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="App">
      <TodoState>
        <SearchBar />
        <TodoList />
      </TodoState>
    </div>
  );
}

export default App;
