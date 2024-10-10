import "./index.css";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createContext, useContext, useState } from 'react';
import LoginContext from "./LoginContext.jsx";

import Game, {
  loader as gameLoader,
} from "./gameloader.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainView from "./MainView.jsx"
import GameView from "./GameView.jsx"
import LibraryContext, {GamesContext} from "./LibraryContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element:
      <MainView></MainView>
  },
  {
    path: "/:id",
    element: 
      <GameView></GameView>,
    loader:
      gameLoader,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LibraryContext>
      <LoginContext>
        <RouterProvider router={router} />
      </LoginContext>
    </LibraryContext>

  </React.StrictMode>
);