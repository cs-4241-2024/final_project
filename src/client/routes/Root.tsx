import "../css/App.css";

import {useState} from "react";
import {Outlet} from "react-router-dom";


function Root() {
    const [count, setCount] = useState(0);

    return (
        <Outlet />
    );
}

export default Root;
