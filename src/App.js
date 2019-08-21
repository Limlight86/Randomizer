import React from "react";
import { ListContextProvider } from "./context/ListContext";
import "./App.css";
import ItemInput from "./components/ItemInput";
import RandomizerList from "./components/randomizerList/RandomizerList";
import RandomizedList from "./components/RandomizedList";

const App = () => (
  <div>
    <h1>Hi Bria! Lets Randomize Stuff!</h1>
    <ListContextProvider>
      <ItemInput />
      <RandomizerList />
      <RandomizedList />
    </ListContextProvider>
    <h4>This is the alpha stage, I will continue to make this look nicer, lol.</h4>
  </div>
);

export default App;
