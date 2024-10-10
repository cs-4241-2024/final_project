import React, { useState, useEffect } from 'react';
import "./AccountManager.css"

const AccountManager = ({onClose}) => {

  const [existingUserList, setExistingUserList] = useState();
  const [existingUserData, setExistingUserData] = useState();
  const [newUserData, setNewUserData] = useState();
  const [isMakingNewUser, setIsMakingNewUser] = useState(false);

  /* On load, populate existing user list with usernames from database. */
  useEffect(() =>
  {
    async function fetchUserList()
    {
      await fetch("/act/getusernames", {method: "POST"}).then(response => response.json()).then(userlist =>
      {
        setExistingUserList(userlist);
      });
    }

    fetchUserList();
  }, []);

  /**
   * Get username and access level of selected user.
   * 
   * @param {*} event Triggering event.
   */
  async function fetchExistingUserData(event)
  {
    /* Disable NEW mode */
    setIsMakingNewUser(false);
    setNewUserData(undefined);

    /* Build body */
    const json = {username: event.target.value};
    const body = JSON.stringify(json);

    /* Fetch user data from server */
    await fetch("/act/getuserdata", {method: "POST", headers: {"Content-Type": "application/json"}, body})
    .then(response => response.json()).then(data =>
    {
      /* On complete, set state */
      setExistingUserData(data);
    });
  }

  /**
   * Modify local copy of existing user data to have selected access level.
   * 
   * @param {*} event Triggering event.
   */
  async function existingAccessChanged(event)
  {
    setExistingUserData(event.target.value);
  }

  /**
   * Modify local copy of new user data to have selected access level.
   * 
   * @param {*} event Triggering event.
   */
  async function newAccessChanged(event)
  {
    newUserData.access = event.target.value;
  }

  /**
   * Send updated existing user data to server to save to database.
   */
  async function onSaveExistingUser()
  {
    /* Get data from UI */
    const username = document.getElementById("user-picker").value;
    const newPassword = document.getElementById("new-password").value;
    const newAccess = document.getElementById("access-picker").value;

    /* Build updated user, no password yet */
    const updatedUser =
    {
      username: username,
      password: newPassword,
      access: newAccess,
    };

    /* Build request body */
    const body = JSON.stringify(updatedUser);

    /* Send updated user to server to handle */
    fetch("/act/updateexistinguser", {method: "POST", headers: {"Content-Type": "application/json"}, body})

    /* Close popup */
    .then(onClose);
  }

  /**
   * Send new user data to server to save to database.
   */
  async function onSaveNewUser()
  {
    /* Get data from UI */
    const newUsername = document.getElementById("newuser-username").value;
    const newPassword = document.getElementById("newuser-password").value;
    const newAccess = document.getElementById("newuser-access-picker").value;

    /* Do we have a username and password? */
    if (newUsername === "" || newPassword === "" || newAccess === "Select an Access Level")
    {
      return;
    }

    /* Build new user */
    const userUpdate =
    {
      username: newUsername,
      password: newPassword,
      access: newAccess,
    };

    /* Build request body */
    const body = JSON.stringify(userUpdate);

    /* Send new user to server to handle */
    fetch("/act/createnewuser", {method: "POST", headers: {"Content-Type": "application/json"}, body})

    /* Close popup */
    .then(onClose);
  }

  /**
   * Delete an existing user from the database.
   */
  async function onDeleteExistingUser()
  {
    /* Get username from UI */
    const username = document.getElementById("user-picker").value;

    /* Build request body */
    const json = {username: username};
    const body = JSON.stringify(json);

    /* Send username to server to delete from database */
    fetch("/act/deleteexistinguser", {method: "POST", headers: {"Content-Type": "application/json"}, body})
    
    /* Close popup */
    .then(onClose);
  }

  /**
   * Enable NEW mode on the UI.
   */
  async function onCreateNewUser()
  {
    /* Reset existing user selector */
    document.getElementById("user-picker").options.selectedIndex = 0;

    /* Reset existing user data */
    setExistingUserData(undefined);

    /* Enter NEW mode */
    setIsMakingNewUser(true);

    /* Build new empty user data */
    setNewUserData(
      {
        username: "",
        password: "",
        access: "",
      }
    );
  }

  return (
    <div className="act-window">

      {/* Title of popup */}
      <div className="act-row">
        <h2 className="act-title">Account Manager</h2>
      </div>

      {/* User selection */}
      <div className="act-row-select">

        <div className="act-input">
          <label>User </label>
          <select id="user-picker" className="act-select-user" defaultValue="Select a User" onChange={fetchExistingUserData}>
            <option disabled>Select a User</option>
            {existingUserList &&
              existingUserList.map((username) => <option key={username}>{username}</option>)}
          </select>
        </div>

        <button className="act-button" onClick={onCreateNewUser}>+ New</button>

      </div>

      {/* Access Level input for existing users */}
      {existingUserData &&
      <div className="act-row">

        <div className="act-input">
          <label>Access Level </label>
          <select id="access-picker" value={existingUserData.access} onChange={existingAccessChanged}>
            <option value="admin">admin</option>
            <option value="guest">guest</option>
            <option value="ta">ta</option>
            <option value="employee">employee</option>
          </select>
        </div>

      </div>}

      {/* New Password input for existing users */}
      {existingUserData &&

      <div className="act-row">
        <div className="act-input">
          <label>New Password </label>
          <input type="password" id="new-password"></input>
        </div>
      </div>}

      {/* Username input for creating new user */}
      {isMakingNewUser &&

      <div className="act-row">
        <div className="act-input">
          <label>Username </label>
          <input type="text" id="newuser-username"></input>
        </div>
      </div>}

      {/* Password input for creating new user */}
      {isMakingNewUser &&

      <div className="act-row">
        <div className="act-input">
          <label>Password </label>
          <input type="password" id="newuser-password"></input>
        </div>
      </div>}

      {/* Access Level input for creating new user */}
      {isMakingNewUser &&
      <div className="act-row">

        <div className="act-input">
          <label>Access Level </label>
          <select id="newuser-access-picker" defaultValue="Select an Access Level" onChange={newAccessChanged}>
            <option disabled>Select an Access Level</option>
            <option>admin</option>
            <option>guest</option>
            <option>ta</option>
            <option>employee</option>
          </select>
        </div>

      </div>}

      {/* Situational confirmation / action buttons */}
      <div className="act-row">

        {/* If editing existing user, show "Save" and "Delete" */}
        {existingUserData &&
        <>
          <button className="act-button" onClick={onSaveExistingUser}>Save</button>
          <button className="act-button" onClick={onDeleteExistingUser}>Delete</button>
        </>}

        {/* If creating new user, show "Save New User" */}
        {isMakingNewUser &&
        <>
          <button className="act-button" onClick={onSaveNewUser}>Save New User</button>
        </>}

        {/* Always show "Close" */}
        <button className="act-button" onClick={onClose}>Close</button>
      </div>

    </div>
  );
};

export default AccountManager;
