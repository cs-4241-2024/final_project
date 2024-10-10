import React, { useState } from "react";
import Popover from "./Popover";  

import "./ListItem.css";

const ListItem = ({ inventoryData, handleSaveApp, permission }) => {
  const [showPopover, setShowPopover] = useState(false);

  const handleClick = () => {
    console.log(inventoryData.name, "clicked");
    setShowPopover(true);
  };

  const handleSaveListItem = (updatedListItem) => {
    // delegate saving up to the parent (list, in this case the main app)
    handleSaveApp(updatedListItem);
    handleClosePopover();
  };

  const handleClosePopover = () => {
    setShowPopover(false);
  };

  return (
    <div>
      <li className="list-item">
        <div className="list-item-container" onClick={handleClick}>
          <div className="item-name">{inventoryData.name}</div>
          <div className="item-notes">{inventoryData.notes}</div>
          <div className="item-quantity">
            {inventoryData.quantity} {inventoryData.unit}
          </div>
        </div>
      </li>
      {showPopover && (
        <Popover
          initialData={inventoryData}
          handleSaveListItem={handleSaveListItem}
          onClose={handleClosePopover}
          permission = {permission}
        />
      )}
    </div>
  );
};

export default ListItem;
