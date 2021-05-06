import React from "react";
import classes from "./Item.module.css";

const Item: React.FC<{
  id: string;
  text: string;
  onDeleteHandler: (id: string) => void;
}> = (props) => {
  return (
    <li
      className={classes.item}
      onClick={() => props.onDeleteHandler(props.id)}
    >
      {props.text}
    </li>
  );
};

export default Item;
