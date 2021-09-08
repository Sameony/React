import "./styles.css";
import React, { useState } from "react";

var emojiDict = {
  "🦰": "Red hairs",
  "🤪": "Crazy face",
  "🐷": "Pig",
  "🦓": "Zebra",
  "🦄": "Unicorn",
  "🐫": "Camel",
  "🐵": "Monkey",
  "🐶": "Dog",
  "😊": "Smiling",
  "😎": "Handsome",
  "😥": "Sad",
  "😪": "Sleepy",
  "😆": "Funny",
  "🤨": "Face with raised eyebrows",
  "😇": "Smiling face with halo",
  "🤩": "Star-Struck",
  "😘": "Face Blowing a Kiss",
  "😗": "Kissing Face",
  "☺ ️": "Smiling Face",
  "😚": "Kissing Face with Closed Eyes",
  "😙": "Kissing Face with Smiling Eyes",
  "😷": "Face with Medical Mask",
  "🤒": "Face with Thermometer",
  "🤕": "Face with Head-Bandage",
  "🤢": "Nauseated Face",
  "🤮": "Face Vomiting",
  "🤧": "Sneezing Face",
  "🥵": "Hot Face",
  "🥶": "Cold Face",
  "🥴": "Woozy Face",
  "😵": "Dizzy Face",
  "😵‍💫": "Face with Spiral Eyes",
  "🤯": " Exploding Head"
};

export default function App() {
  const [ans, setAns] = useState("");
  function ChangeEventHandler(changedInput) {
    if (changedInput.target.value in emojiDict) {
      setAns(emojiDict[changedInput.target.value]);
    } else {
      if (changedInput.target.value === "") {
        setAns("");
      } else {
        setAns("Sorry, This Emoji is not registered in our database.");
      }
    }
  }

  return (
    <div>
      <h1> Check </h1>
      <input onChange={ChangeEventHandler}></input>
      <div>{ans}</div>
    </div>
  );
}
