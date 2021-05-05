import React from "react";
import Todo from "../models/todo";
import Item from "./Item";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      <li>
        {props.items.map((item) => (
          <Item key={item.id} text={item.text} />
        ))}
      </li>
    </ul>
  );
};

export default Todos;
