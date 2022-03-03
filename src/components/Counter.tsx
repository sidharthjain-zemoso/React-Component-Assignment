import React from "react";
import "./Counter.css";

type Props = {};

const Counter = (props: Props) => {
  const [count, setCount] = React.useState(0);
  return (
    <div className="counter-container">
      <div className="counter-wrapper">
        <p>Value: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </div>
  );
};

export default Counter;
