import { useState } from "react";
import "./index.css";
import Login from "./components/login/Login.jsx";
import Display from "./components/display/Display.jsx";
import BlueButton from "./components/default_components/BlueButton.jsx";
import Header from "./components/display/Header.jsx";
import MainPage from "./components/display/MainPage.jsx";

//import Header from "./components/display/Header.jsx";

function MainView(props) {

  //TODO: Make login a banner + popup
  return (
    <div className="MainView">
      <Header></Header>
      <Display></Display>
    </div>
  );
}

export default MainView;
