import React, { useContext } from "react";
import { TodosContext } from "../store/todos-context";
import Item from "./Item";
import classes from "./Todos.module.css";

const Todos: React.FC = () => {
  const ctx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {ctx.items.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          text={item.text}
          onDeleteHandler={() => ctx.removeTodo(item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
