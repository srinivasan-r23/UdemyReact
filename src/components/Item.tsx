import React from "react";

const Item: React.FC<{ text: string }> = ({ text }) => {
  return <li>{text}</li>;
};

export default Item;
