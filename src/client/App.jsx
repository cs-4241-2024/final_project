import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Table from "./components/Table";
import Form from "./components/Form";
import { FiPlus } from "react-icons/fi";
import JobApplicationForm from "./components/Form";
import Dashboard from "./components/graphs/Dashboard";


function App() {
  const [count, setCount] = useState(0);
  const [showForm, setShowForm] = useState(false);

  const handleFormSubmit = (formData) => {
    console.log("Form Submitted: ", formData);
  };


  return (
    <div className="App">
      <div>
        <Dashboard />

        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <div>
        <button
          onClick={() => setShowForm(true)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto",
            marginTop: "20px",
            gap: "10px"
          }}
        >
          <FiPlus />
          <span> Add Job</span>
        </button>
        {showForm && (
        <JobApplicationForm
          onClose={() => setShowForm(false)}
          onSubmit={handleFormSubmit}
        />
      )}
        </div>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR!
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
