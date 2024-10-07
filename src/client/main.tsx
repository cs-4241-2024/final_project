import "./css/Root.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom/client";

import Root from "./routes/Root";
import Home from "./routes/Home";
import Login from "./routes/Login";
import About from "./routes/About";
import Editor from "./routes/Editor";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        loader: async () => {
            const res = await fetch("/checkLogin", {
                method: "POST",
            });

            if (res.status === 200) {

            }

        }
    }
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    {/*<Router>*/}
    {/*  <Routes>*/}
    {/*    <Route path="/" element={<Login />} />*/}
    {/*    <Route path="/Home" element={<Home />} />*/}
    {/*    /!*<Route path="/Root" element={<Root />} />*!/*/}
    {/*    <Route path="/Login" element={<Login />} />*/}
    {/*    <Route path="/About" element={<About />} />*/}
    {/*    <Route path="/Editor" element={<Editor />} />*/}
    {/*  </Routes>*/}
    {/*</Router>*/}
    </React.StrictMode>
);
