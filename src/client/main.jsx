import "./index.css";

import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

const Main = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://kit.fontawesome.com/040eaf3b40.js"; // Replace with your kit code
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script); // Cleanup the script when unmounting
    };
  }, []);

  return <App />;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <Main />,
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//ReactDOM.render(<Main />, document.getElementById('root'));
