import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import TodoContextProvider from "./store/todos-context";

ReactDOM.render(
  <TodoContextProvider>
    <App />
  </TodoContextProvider>,
  document.getElementById("root")
);
