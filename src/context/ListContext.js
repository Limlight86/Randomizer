import React, { createContext, useState } from "react";

const ListContext = createContext();

const ListContextProvider = ({ children }) => {
  const [randomizerList, setRandomizerList] = useState([]);
  const [randomizedList, setRandomizedList] = useState([]);

  return (
    <ListContext.Provider value={{ randomizerList, setRandomizerList, randomizedList, setRandomizedList }}>
      {children}
    </ListContext.Provider>
  );
};

export { ListContext, ListContextProvider };
