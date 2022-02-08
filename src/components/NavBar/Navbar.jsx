/** @format */

import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

// logo
import Logo from "../../asserts/logo_color.png";
import "./navbar.css";

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            <span style={{ textDecoration: "bold", color: "orange" }}>| </span>
            <span style={{ color: "#ffc000" }}>AURT</span>ECK
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto nav">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/about">
                About
              </Link>
              <Link className="nav-link" to="/portfolio">
                Portfolio
              </Link>
              <Link className="nav-link" to="/pricing">
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
