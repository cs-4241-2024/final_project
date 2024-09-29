import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import Home from "./Home";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <nav>
        <Link to="/Home">Home </Link>
        <Link to="/app">App</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<App />} />
      </Routes>
    </Router>

  </React.StrictMode>,
);
