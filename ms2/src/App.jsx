import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./index.css";

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="container">
      <h1>{counter}</h1>
      <button onClick={() => setCounter((ps) => ps + 1)}>Increase by 1</button>
      <button onClick={() => setCounter((ps) => ps - 1)}>Decrease by 1</button>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
