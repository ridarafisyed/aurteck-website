/** @format */

import React, { Fragment } from "react";
import NavBar from "../components/NavBar/Navbar";
import { Container } from "react-bootstrap";

const Layout = (props) => {
  return (
    <Fragment>
      <NavBar />
      <div>{props.children}</div>
    </Fragment>
  );
};

export default Layout;
