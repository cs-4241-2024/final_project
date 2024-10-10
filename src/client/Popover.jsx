import React, { useState, useEffect, useRef } from "react";
import "./Popover.css";

const Popover = ({ initialData, handleSaveListItem, onClose, permission }) => {
  const [formData, setFormData] = useState(initialData);
  const popoverRef = useRef();

  //listen for clicks outside the popover and close if they happen
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      //clean up listeners when popover closes
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  //keep track of changes in text boxes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //delegate handling save up to parent
  const handleSavePopover = () => {
    handleSaveListItem(formData);
    //console.log("popover save", formData)
    onClose();
  };

  const canEdit = permission == "employee" || permission == "admin";

  return (
    <div className="popover" ref={popoverRef}>
      {/* Form inputs for each attribute */}

      <div className="form-row">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          disabled
          onChange={handleChange}
        />
      </div>

      <div className="form-row">
        <label htmlFor="note">Notes:</label>
        <input
          type="text"
          id="notes"
          name="notes"
          value={formData.notes}
          disabled={!canEdit}
          onChange={handleChange}
        />
      </div>

      <div className="form-row">
        <label htmlFor="quantity">Quantity:</label>
        <input
          className="first-input"
          type="number"
          min="0"
          step="1"
          id="quantity"
          name="quantity"
          value={formData.quantity}
          disabled={!canEdit}
          onChange={handleChange}
        />
        <label htmlFor="unit">Unit:</label>
        <input
          className="second-input"
          type="text"
          id="unit"
          name="unit"
          value={formData.unit}
          disabled={!canEdit}
          onChange={handleChange}
        />
      </div>

      <div className="form-row">
        {permission == "employee" || permission == "admin" ? (
          <div className="price">
            <label htmlFor="price">Price:</label>
            <input
              className="first-input"
              type="number"
              min="0"
              step="0.01"
              id="price"
              name="price"
              value={formData.price}
              disabled={!canEdit}
              onChange={handleChange}
            />
          </div>
        ) : (
          <div className="price hidden"></div>
        )}

        <label htmlFor="location">Location:</label>
        <input
          className="second-input"
          type="number"
          id="location"
          name="location"
          value={formData.location}
          disabled={!canEdit}
          onChange={handleChange}
        />
      </div>

      {/* Save and Close buttons */}
      <div className="popover-buttons">
        {canEdit && (
          <button className="save" onClick={handleSavePopover}>
            Save
          </button>
        )}
        <button className="cancel" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Popover;
