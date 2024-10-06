import "./css/index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom/client";

// import App from "./routes/App";
import Home from "./routes/Home";
import Login from "./routes/Login";
import About from "./routes/About";
import Editor from "./routes/Editor";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        {/*<Route path="/App" element={<App />} />*/}
        <Route path="/Login" element={<Login />} />
        <Route path="/About" element={<About />} />
        <Route path="/Editor" element={<Editor />} />
      </Routes>
    </Router>

  </React.StrictMode>,
);
