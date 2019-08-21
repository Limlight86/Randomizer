import React, { useContext } from "react";
import { ListContext } from "../../context/ListContext";

const RandomizerList = () => {
  const { randomizerList } = useContext(ListContext);

  return (
    <div>
      <h3>Items to Randomize</h3>
      <ul>
        {randomizerList.map(item => {
          return (
            <li key={item.id}>{item.text}</li>
          );
        })}
      </ul>
    </div>
  );
};

export default RandomizerList;