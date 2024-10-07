import "./css/Root.css";
import { createBrowserRouter, RouterProvider, redirect } from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom/client";

import Home from "./routes/Home";
import Login from "./routes/Login";
import About from "./routes/About";
import Editor from "./routes/Editor";

const router = createBrowserRouter([
    {
        path: "/",
        loader: async () => {
            const res = await fetch("/checkLogin");

            if (res.status === 200) {
                throw redirect("/home");
            } else {
                throw redirect("/login");
            }

        },
    },
    {
        path: "/home",
        element: <Home />,
        loader: async () => {
            const res = await fetch("/checkLogin");
            if (res.status !== 200)  {
                throw redirect("/login");
            }

            return 0;
        }
    },
    {
        path: "/editor",
        element: <Editor />,
        loader: async () => {
            const res = await fetch("/checkLogin");
            if (res.status !== 200)  {
                throw redirect("/login");
            }

            // Load data
            return 0;
        }
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/about",
        element: <About />
    }
]);

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
