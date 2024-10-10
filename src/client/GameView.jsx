import { useState } from "react";
import "./index.css";
import Header from "./components/display/Header.jsx";
import DisplayGame from "./components/display/DisplayGame.jsx"

function GameView() {
  return (
    <div className="GameView">
      <Header></Header>
      <DisplayGame></DisplayGame>
    </div>
  );
}

export default GameView;
