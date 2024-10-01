import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import CreateEvent from "./createEvent.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <CreateEvent />
  </StrictMode>
);
