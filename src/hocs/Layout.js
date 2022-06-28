/** @format */

import React, { Fragment } from "react";
import NavBar from "../components/NavBar/Navbar";

import Footer from "../components/Footer/Footer";

const Layout = (props) => {
  return (
    <Fragment>
      <NavBar />
      <div>{props.children}</div>
      <Footer/>
    </Fragment>
  );
};

export default Layout;
