/** @format */

import React from "react";
// import Logo from "../img/logo.svg"
import Logo from "../../asserts/logo_color2.png";
import { Button } from "@mui/material";

import "./header.css";
const Header = () => {
  return (
    <>
      <div className="jumbotron">
        <img alt="logo" src={Logo} style={{ width: "250px" }} />

        <h3 className="display-5 slogun">
          <span style={{ color: "#fcc000", fontWeight: "bold" }}>
            Let's Build
          </span>{" "}
          Your Dreams
        </h3>

        <p className="lead">
          <Button
            variant="contained"
            className="btn btn-primary btn-lg"
            href="#"
            role="button"
          >
            Contact
          </Button>
        </p>
      </div>
    </>
  );
};
export default Header;
