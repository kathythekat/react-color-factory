import React, { useState } from "react";
import Routes from "./Routes";
import { BrowserRouter, Link } from "react-router-dom";
import ColorHeader from "./ColorHeader";
import "./App.css";

function App() {
  const [colors, setColors] = useState(["red", "blue"]);
  //can store in local storage

  function addColor(newColor) {
    setColors([newColor, ...colors]);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes colors={colors} addColor={addColor} />
      </BrowserRouter>
    </div>
  );
}

export default App;
