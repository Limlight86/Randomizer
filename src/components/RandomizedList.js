import React, { useContext } from "react";
import { ListContext } from "../context/ListContext";
import shuffleArray from "../util/shuffleArray";

const RandomizedList = () => {
  const { randomizerList, randomizedList, setRandomizedList } = useContext(ListContext);

  const handleRandomize = () => {
    const newList = shuffleArray([...randomizerList]);
    setRandomizedList([...newList])
  };

  return (
    <div>
      <button onClick={handleRandomize}>Randomize Now!</button>
      <h3>Your Randomized Items</h3>
      <ul>
        {randomizedList.map(item => {
          return <li key={item.id}>{item.text}</li>;
        })}
      </ul>
    </div>
  );
};

export default RandomizedList;
