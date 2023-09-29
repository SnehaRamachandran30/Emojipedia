import React from "react";
import emojipedia from "../emojipedia";
import EmojiDef from "./Emojidef";

function createDef(emojii) {
  return (
    <EmojiDef
      key={emojii.id}
      emoji={emojii.emoji}
      name={emojii.name}
      meaning={emojii.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createDef)}</dl>
    </div>
  );
}

export default App;
