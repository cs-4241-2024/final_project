import {useEffect, useState} from "react";
import BlueButton from "../default_components/BlueButton.jsx"
import MainPage from "./MainPage.jsx"
function Display(props) {
    const load = () => {
        console.log("clicked 2");
        fetch( '/twitchapi/grabgames', {
            headers: {"Content-Type": "application/json" },
            method:'GET'
        }).then((res) => {
          
        })
    
    }

    // Make list of curent known games Fetch from route
    
    return (
        <div className={"pt-6"}>
          <MainPage></MainPage>
        </div>
    );
}

export default Display;