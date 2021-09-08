import "./styles.css";
import React, { useState } from "react";

//Dictionary/database of emojis
var emojiDict = {
  "🤪": "Crazy face",
  "🐷": "Pig",
  "🦓": "Zebra",
  "🦄": "Unicorn",
  "🐫": "Camel",
  "🐵": "Monkey",
  "🐶": "Dog",
  "😎": "Handsome",
  "😥": "Sad",
  "😪": "Sleepy",
  "😆": "XD",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "😊": "Smiling Face with Smiling Eyes",
  "🤨": "Face with raised eyebrows",
  "😇": "Smiling face with halo",
  "🤩": "Star-Struck",
  "😘": "Face Blowing a Kiss",
  "😗": "Kissing Face",
  "☺ ️": "Smiling Face",
  "🦰": "Red hairs",
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
  "🤯": "Exploding Head/Mind Blown"
};
//copying keys into an array
var myList = Object.keys(emojiDict);

export default function App() {
  //ans will have the value for the emoji key from dict
  const [ans, setAns] = useState("");

  //function for processing ans when user changes the input
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

  //when user interacts via given emoji list, process ans
  function itemClickHandler(item) {
    setAns(emojiDict[item]);
  }

  return (
    <div className="Container">
      <h1> Emoji Interpreter </h1>

      {/* Input */}
      <input
        className="inputHere marginHere"
        onChange={ChangeEventHandler}
      ></input>

      {/* The answer div */}
      <div className="largify marginHere">{ans}</div>

      <div className="largify">The Emojis We Know:</div>

      {/* Traversing the array of emojis */}
      {myList.map(function (item) {
        return (
          <span
            className="emojiList"
            key={item}
            onClick={() => itemClickHandler(item)}
          >
            {item}{" "}
          </span>
        );
      })}
    </div>
  );
}
