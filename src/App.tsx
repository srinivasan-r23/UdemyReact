import Todos from "./components/Todos";
import "./App.css";
import Todo from "./models/todo";

function App() {
  const todos = [
    new Todo("Learn React"),
    new Todo("Learn Typescript"),
    { text: "ceccrc", id: new Date().toISOString() },
  ];
  return (
    <>
      <Todos items={todos} />
    </>
  );
}

export default App;
