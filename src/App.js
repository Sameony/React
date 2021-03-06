import "./styles.css";
import React, { useState } from "react";

//Dictionary/database of emojis
var emojiDict = {
  "๐คช": "Crazy face",
  "๐ท": "Pig",
  "๐ฆ": "Zebra",
  "๐ฆ": "Unicorn",
  "๐ซ": "Camel",
  "๐ต": "Monkey",
  "๐ถ": "Dog",
  "๐": "Cool",
  "๐": "Unamused Face",
  "๐": "Smirking Face",
  "๐ช": "Sleepy",
  "๐": "XD",
  "๐": "Grinning Face with Sweat",
  "๐คฃ": "Rolling on the Floor Laughing",
  "๐": "Face with Tears of Joy",
  "๐": "Slightly Smiling Face",
  "๐": "Upside-Down Face",
  "๐": "Winking Face",
  "๐": "Smiling Face with Smiling Eyes",
  "๐คจ": "Face with raised eyebrows",
  "๐": "Smiling face with halo",
  "๐คฉ": "Star-Struck",
  "๐": "Face Blowing a Kiss",
  "๐": "Kissing Face",
  "๐ค": "Nerd Face",
  "๐ง": "Face with Monocle",
  "๐": "Confused Face",
  "๐": "Worried Face",
  "๐": "Slightly Frowning Face",
  "โน๏ธ": "Frowning Face",
  "๐ฎ": "Face with Open Mouth",
  "๐ฏ": "Hushed Face",
  "๐ฒ": "Astonished Face",
  "๐ณ": "Flushed Face",
  "๐ฅบ": "Pleading Face",
  "๐ฆ": " Frowning Face with Open Mouth",
  "๐ง": " Anguished Face",
  "๐จ": " Fearful Face",
  "๐ฐ": " Anxious Face with Sweat",
  "๐ฅ": " Sad but Relieved Face",
  "๐ข": " Crying Face",
  "๐ญ": " Loudly Crying Face",
  "๐ฑ": " Face Screaming in Fear",
  "๐": " Confounded Face",
  "๐ฃ": " Persevering Face",
  "๐": " Disappointed Face",
  "๐": " Downcast Face with Sweat",
  "๐ฉ": " Weary Face",
  "๐ซ": " Tired Face",
  "๐ฅฑ": " Yawning Face",
  "๐": "Kissing Face with Closed Eyes",
  "๐": "Kissing Face with Smiling Eyes",
  "๐ท": "Face with Medical Mask",
  "๐ค": "Face with Thermometer",
  "๐ค": "Face with Head-Bandage",
  "๐คข": "Nauseated Face",
  "๐คฎ": "Face Vomiting",
  "๐คง": "Sneezing Face",
  "๐ฅต": "Hot Face",
  "๐ฅถ": "Cold Face",
  "๐ฅด": "Woozy Face",
  "๐ต": "Dizzy Face",
  "๐คฏ": "Exploding Head/Mind Blown"
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
        placeholder="Enter the emoji here "
        className="inputHere marginHere otherFont"
        onChange={ChangeEventHandler}
      ></input>

      {/* The answer div */}
      <div className="largify">{ans}</div>

      <section className="colorMe">
        <div className="largify BorderMe otherFont">The Emojis We Know:</div>

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
      </section>
    </div>
  );
}
