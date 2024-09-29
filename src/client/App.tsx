import "./App.css";

import reactLogo from "./assets/react.svg";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
function App() {

  return (
      <>
          <Router>
              <Routes>
                  <Route exact path="/" element={<Login />} />
                  <Route exact path="/dashboard" element={<Dashboard />} />
              </Routes>
          </Router>

      </>
  );
}

export default App;
