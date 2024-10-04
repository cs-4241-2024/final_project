import "./App.css";

import {BrowserRouter as Router, Routes, Route, HashRouter} from 'react-router-dom';
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Brackets from "./pages/Brackets";

function App() {

  return (
      <>
          <HashRouter>
              <Routes>
                  <Route path="/" element={<Login />} />
                  <Route  path="/dashboard" element={<Dashboard />} />
                  <Route path={"/brackets"} element={<Brackets/>}/>
              </Routes>
          </HashRouter>

      </>
  );
}

export default App;
