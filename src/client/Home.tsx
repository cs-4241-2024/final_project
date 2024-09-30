import "./Home.css";
import { Button } from "@mui/material";
// index.js

import { useState } from "react";

function Home() {
  return (
    <div className="root">
      <div className="content">
        <div className="home-section">
          <div className="title-header">
            <div className="title">Home</div>
            <div className="icon-button">
              <div className="container">
                <div className="state-layer"></div>
              </div>
            </div>
          </div>
          <div className="carousel">
            {/* <div className="carousel-item item-1"></div>
            <div className="carousel-item item-2"></div>
            <div className="carousel-item item-3"></div>
            <div className="carousel-item item-last"></div> */}
          </div>
        </div>
        <div className="details-section">
          <div className="details">
            <div className="text-content">
              <div className="label">Details Label</div>
              <div className="supporting-text">Supporting text for the details section.</div>
            </div>
          </div>
          <div className="button">
            <div className="state-layer">
              <div className="label-text">Button Label</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;