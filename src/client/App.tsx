import "./App.css";

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from "./pages/login";
import A4Logic from "./pages/a4-logic";
import Header from "./components/header";
import Home from "./pages/Home";
import GameSubmission from "./pages/GameSubmission";


function App() {

    return (
        <>
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/game-submission" element={<GameSubmission />} />
                    <Route path="/login" element={<Login />} />
                    <Route  path="/a4-logic" element={<A4Logic />} />
                </Routes>
            </BrowserRouter>

        </>
    );
}

export default App;