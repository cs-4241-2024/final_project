import React, { useState } from "react";
import AccountMenu from "./AccountMenu"; // Ensure correct path
import "./TopBar.css";

const TopBar = ({ data, setFilteredData, onUpload, permission }) => {
  const [placeholder, setPlaceholder] = useState("Search");
  const [searchInput, setSearchInput] = useState("");

  const handleFocus = () => {
    setPlaceholder("Search for item by name");
  };

  const handleBlur = () => {
    setPlaceholder("Search");
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);

    // Filter the data based on the search input
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    // Update the filteredData state in App.jsx
    setFilteredData(filtered);
  };

  return (
    <div className="top-bar">
      <div className="search-bar">
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
        <input
          type="text"
          className="search-input"
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={searchInput}
          onChange={handleSearchChange}
        />
      </div>
      <div className="title">Inventory</div>
      <AccountMenu data={data} onUpload={onUpload} permission={permission}/> {/* Pass onUpload to AccountMenu */}
    </div>
  );
};

export default TopBar;
