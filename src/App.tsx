import Todos from "./components/Todos";
import "./App.css";
import NewTodo from "./components/NewTodo";

function App() {
  return (
    <>
      <NewTodo />
      <Todos />
    </>
  );
}

export default App;
