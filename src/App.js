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
  "🤯": " Exploding Head"
};

var myList = [];
// for (var key in emojiDict) {
//   myList.push(key);
// }
myList = Object.keys(emojiDict);
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

  const [emoji, setEmoji] = useState("");

  function itemClickHandler(item) {
    setEmoji(emojiDict[item]);
    console.log(emoji);
  }

  return (
    <div>
      <h1> Check </h1>
      <input onChange={ChangeEventHandler}></input>
      <div>{ans}</div>

      <ul>
        {myList.map(function (item, index) {
          return (
            <li key={item} onClick={() => itemClickHandler(item)}>
              {item}{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
