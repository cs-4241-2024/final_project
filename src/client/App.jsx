import React, { useState, useEffect } from "react";

import "./App.css";
import TopBar from "./TopBar";
import ListItem from "./ListItem";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";

function App() {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]); // To track filtered items
  let [loginResult, setLoginResult] = useState(false);
  const [access, setAccess] = useState("");

  // Upload handler to process the uploaded Excel data
  // TODO
  const handleUpload = (uploadedData) => {
    console.log("Upload process started"); // Log when upload starts
    console.log("Uploaded Data:", uploadedData); // Log the uploaded data
    setFilteredData(uploadedData); // Replace current data with the uploaded data
    console.log("Upload process completed"); // Log when upload is done
  };

  const submitLogin = async (event) => {
    event.preventDefault();
    const form = event.target;
    console.log(form.username);
    await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: form.username.value,
        password: form.password.value,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.success) {
          //Show that the user is now logged in and transition to the main content
          console.log("Login successful");
          setLoginResult(true);
          setAccess(res.access);
          console.log(access); //doesn't work since react updates state after event handlers finish running
        }
        //window.location.reload();
      });
  };

  async function fetchInventoryData() {
    /* Fetch inventory data from server */
    await fetch("/inv/getallitems", { method: "POST" })
      .then((response) => response.json())
      .then((data) => {
        console.log(data[0]);
        /* On complete, set state */
        setAllData(data);
        setFilteredData(data);
      });
  }

  async function handleSaveApp(updatedListItem) {
    /* Build body */
    const body = JSON.stringify(updatedListItem);

    /* Fetch user data from server */
    await fetch("/inv/updateitem", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
    }).then(async () => {
      console.log(`Updated item: ${updatedListItem.name}`);
      //console.log(updatedListItem)
      await fetchInventoryData(); 
      //this also updates the local states allData and filteredData
      
      // DEBUG: window.location.reload();
    });
  }

  useEffect(() => {
    setLoginResult(display());
    fetchInventoryData();
  }, []);

  if (loginResult == true) {
    console.log(access)
    return (
      <>
        <TopBar data={allData} setFilteredData={setFilteredData} onUpload={handleUpload} permission={access} />
        <div className="item-list-box">
          <ul className="item-list-list" style={{ marginTop: "60px" }}>
            {/* Adjust this margin as needed */}
            {filteredData.map((item, index) => (
              <ListItem
                inventoryData={item}
                handleSaveApp={handleSaveApp}
                permission={access}
              />
            ))}
          </ul>
        </div>
      </>
    );
  } else {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={submitLogin}>
          <input
            className="login-form-element"
            type="text"
            name="username"
            placeholder="Username"
            defaultValue="guest"
          />
          <input
            className="login-form-element"
            type="password"
            name="password"
            placeholder="Password"
          />
          <button className="login-form-element" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

async function display() {
  let result = await fetch("/loginStatus", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return result.success;
}

export default App;
