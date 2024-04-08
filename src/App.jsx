import React, { useState } from "react";
import "./App.css";

const App = () => {
  let [count, setCount] = useState(0);

  const Decr = () => {
    if (count === 0) {
      count = 0;
    } else {
      setCount(count - 1);
    }
  };
  const Incr = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className="count">
        <h1>Number Count</h1>
        <div className="countDetail">
          <button className="decr" onClick={Decr}>
            -
          </button>
          <span className="value">{count}</span>
          <button className="incr" onClick={Incr}>
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
