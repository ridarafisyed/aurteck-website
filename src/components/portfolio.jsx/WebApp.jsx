/** @format */

import React from "react";

import image1 from "../../asserts/Projects/1.png";
import image2 from "../../asserts/Projects/2.png";
import image3 from "../../asserts/Projects/3.png";
import image4 from "../../asserts/Projects/4.png";
import image5 from "../../asserts/Projects/5.png";

const WebApp = () => {
  return (
    <div>
      <div className="row">
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <img
            src={image1}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />

          <img
            src={image2}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Wintry Mountain Landscape"
          />
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0">
          <img
            src={image3}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Mountains in the Clouds"
          />

          <img
            src={image4}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0">
          <img
            src={image5}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Waves at Sea"
          />

          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Yosemite National Park"
          />
        </div>
      </div>
    </div>
  );
};

export default WebApp;
