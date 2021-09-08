import "./styles.css";
import React, { useState } from "react";

var user = "sam";
var color = "skyBlue";

export default function App() {
  const [counter, setcounter] = useState(0);
  function clickEventHandler() {
    setcounter(counter + 1);
  }
  return (
    <div className="App">
      <h1 style={{ backgroundColor: color }}>Welcome {user}</h1>
      <button onClick={clickEventHandler}>HEllo</button>
      {counter}
    </div>
  );
}
