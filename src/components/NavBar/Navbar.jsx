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
          <Navbar.Brand href="/">
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
              <a className="nav-link" href="/">
                Home
              </a>
              <a className="nav-link" href="#about">
                About
              </a>
              <a className="nav-link" href="#portfolio">
                Portfolio
              </a>
              <a className="nav-link" href="#services">
                Services
              </a>
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
