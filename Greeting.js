import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changed, setChanged] = useState(false);

  const buttonHandler = () => {
    setChanged(true);
  };
  return (
    <div>
      <h2>Hello world</h2>
      {!changed && (
        <Output>It's good to see you! Click this button right below</Output>
      )}
      {changed && <Output>Clicked !!</Output>}
      <button onClick={buttonHandler}>Click ME</button>
    </div>
  );
};

export default Greeting;
