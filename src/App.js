import { useState } from "react";
import "./styles.css";

var emojiDB = {
  "🎅": "santa claus",
  "😀": "grinning face",
  "🤤": "drooling face",
  "🎉": "party popper",
  "😎": "smiling face with sunglasses",
  "😅": "grinning face with sweat",
  "🔥": "fire",
  "🤡": "clown face",
  "🥱": "yawning face",
  "👀": "eyes",
  "👋": "waving hand",
  "🙏": "folded hands",
  "🚀": "rocket",
  "😜": "winking face with tongue",
  "🛐": "place of worship"
};

const emojis = Object.keys(emojiDB);

export default function App() {
  const [meaning, setmeaning] = useState("emoji meaning will come here");

  function changeEventHandler(event) {
    var userInput = emojiDB[event.target.value];
    if (userInput !== undefined) {
      setmeaning(userInput);
    } else {
      setmeaning("Emoji not found!");
    }
  }

  function clickEventHandler(emoji) {
    var meaning = emojiDB[emoji];
    setmeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji Express</h1>
      <input
        onChange={changeEventHandler}
        placeholder={"enter your emoji here"}
      ></input>
      <h2>{meaning}</h2>
      <h3> emojis we know </h3>
      <ul>
        {emojis.map((emoji) => {
          return (
            <li key={emoji} onClick={() => clickEventHandler(emoji)}>
              {emoji}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
