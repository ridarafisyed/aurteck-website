/** @format */

import React, { Fragment } from "react";
import Tabs from "../Tabs/Tabs";

import "./portfolio.css";
import WebApp from "./WebApp";
import DeskApp from "./DeskApp";
import MobApp from "./MobApp";
import LogoDesigns from "./LogoDesigns";
import Illustrations from "./Illustrations";

const Portfolio = () => {
  return (
    <Fragment>
      <div className="section-text  text-left">
        <h4>Our Portfolio</h4>
        <h1>
          Check Our Recent <br /> Projects
        </h1>
      </div>

      {/* tab content  */}
      <div className="tab-container">
        <Tabs>
          <div label="Graphic Designs">
            <h1 className="heading">Logo Desgining</h1>
            <LogoDesigns />
          </div>
          <div label="desktop">
            <h1 className="heading">Desktop Applications</h1>
            <DeskApp />
          </div>
          <div label="Web Application">
            <h1 className="heading">Web Applications</h1>
            <WebApp />
          </div>
        </Tabs>
      </div>
    </Fragment>
  );
};

export default Portfolio;
