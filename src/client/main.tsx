import "./css/Root.css";
import { createBrowserRouter, RouterProvider, redirect } from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom/client";

import Home from "./routes/Home";
import Login from "./routes/Login";
import About from "./routes/About";
import Editor from "./routes/Editor";
import Instructions from "./routes/Instructions";
import Registration from "./routes/Registration";

const router = createBrowserRouter([
    {
        path: "/",
        loader: async () => {
            const res = await fetch("/checkLogin");

            if (res.ok) {
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
            if (!res.ok)  {
                throw redirect("/login");
            }

            return 0;
        }
    },
    {
        path: "/editor",
        element: <Editor />,
        loader: async () => {
            let res = await fetch("/checkLogin");
            if (!res.ok)  {
                throw redirect("/login");
            }

            res = await fetch("/loadData");
            if (!res.ok)  {
                console.log("Data could not be loaded");
                return [];
            }
            return await res.json();
        }
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/instructions",
        element: <Instructions />
    },
    {
        path: "/registration",
        element: <Registration />
    }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
