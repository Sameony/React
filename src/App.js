import "./styles.css";
import React, { useState } from "react";

var user = "sam";
var color = "skyBlue";

export default function App() {
  const [word, setWord] = useState("");
  function changeEventHandler(change) {
    setWord(change.target.value);
  }
  return (
    <div className="App">
      <h1 style={{ backgroundColor: color }}>Welcome {user}</h1>
      <input onChange={changeEventHandler}></input>
      <div>{word}</div>
    </div>
  );
}
