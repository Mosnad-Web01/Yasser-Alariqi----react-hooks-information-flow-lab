import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={setIsDarkMode} />
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
