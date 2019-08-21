import React, { useContext, useState } from "react";
import { ListContext } from "../context/ListContext";
import uuidv4 from "uuid/v4";

const inputValidation = (text, setText) => {
  if (!text.trim()) {
    alert("Please specify an item to add.");
    setText("");
    return false;
  } else {
    return true;
  }
};

const ItemInput = () => {
  const { randomizerList, setRandomizerList } = useContext(ListContext);
  const [text, setText] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!inputValidation(text, setText)) {
      return;
    }
    const item = { text, id: uuidv4() };
    setRandomizerList([...randomizerList, item]);
    setText("");
  };

  return (
  <form onSubmit={handleSubmit}>
      <input
        placeholder="add item to randomize"
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button type="submit">
        Add to List
      </button>
    </form>
  );
};

export default ItemInput;
