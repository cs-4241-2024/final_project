import React, { useEffect, useRef, useState } from "react";
import BackupButton from "./BackupButton";
import UploadButton from "./UploadButton"; // Import the UploadButton component
import AccountManager from "./AccountManager.jsx";

const AccountMenu = ({ data, onUpload, permission }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAccountManager, setShowAccountManager] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
    setShowAccountManager(false);
  };

  function handleOpenAccountManager(event) {
    setIsOpen(false);
    setShowAccountManager(true);
  }

  function onLogout(event) {
    window.location.reload();
  }
  let content;

  if (isOpen && (permission == "guest" || permission == "ta")) {
    content = (
      <ul>
        <li>
          <button onClick={onLogout}>User Logout</button>
        </li>
        <li>
          <button onClick={handleCloseMenu}>Close Menu</button>
        </li>
      </ul>
    );
  } else if (isOpen && permission == "employee") {
    content = (
      <ul>
        <li>
          <button onClick={onLogout}>User Logout</button>
        </li>
        <li>
          <BackupButton data={data} />
        </li>
        <li>
          <button onClick={handleCloseMenu}>Close Menu</button>
        </li>
      </ul>
    );
  } else if (isOpen && permission == "admin") {
    content = (
      <ul>
        <li>
          <button onClick={onLogout}>User Logout</button>
        </li>
        <li>
          <BackupButton data={data} />
        </li>
        <li>
          <UploadButton onUpload={onUpload} /> {/* Upload button added */}
        </li>
        <li>
          <button onClick={handleOpenAccountManager}>Account Manager</button>
        </li>
        <li>
          <button onClick={handleCloseMenu}>Close Menu</button>
        </li>
      </ul>
    );
  }

  return (
    <div style={{ position: "relative" }}>
      <i
        className="fa-solid fa-bars account-icon"
        onClick={toggleMenu}
        style={{ cursor: "pointer", marginRight: "0.5rem" }}
      ></i>

      <div className="account-menu" onMouseLeave={handleCloseMenu}>
        {content}
      </div>

      <div className="account-menu">
        {showAccountManager && (
          <AccountManager onClose={handleCloseMenu}></AccountManager>
        )}
      </div>
    </div>
  );
};

export default AccountMenu;
