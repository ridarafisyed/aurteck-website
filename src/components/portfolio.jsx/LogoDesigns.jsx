/** @format */

import React from "react";
import image1 from "../../asserts/Projects/Graphic/logo1.png";
import image2 from "../../asserts/Projects/Graphic/logo2.png";
import image3 from "../../asserts/Projects/Graphic/logo3.png";
import image4 from "../../asserts/Projects/Graphic/logo4.png";
import image5 from "../../asserts/Projects/Graphic/logo5.png";
import image6 from "../../asserts/Projects/Graphic/logo6.png";
import image7 from "../../asserts/Projects/Graphic/logo7.png";
import image8 from "../../asserts/Projects/Graphic/flyer.jpg";
import image9 from "../../asserts/Projects/Graphic/fgflyer.png";

const LogoDesigns = () => {
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
            src={image7}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Waves at Sea"
          />

          <img
            src={image6}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Yosemite National Park"
          />
        </div>
      </div>
    </div>
  );
};

export default LogoDesigns;
