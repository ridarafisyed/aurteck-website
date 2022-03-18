/** @format */

import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";

import image from "../../asserts/logo_color2.png";

import "./about.css";

const About = () => {
  return (
    <Fragment>
      <Container>
        <Row>
          <Col>
            <img src={image} style={{ height: "250px" }} />
          </Col>
          <Col className="section-text text-left align-middle">
            <h4>About Us</h4>
            <h1>Who we Are?</h1>
            <p>
              At our software company, we turn the digital dreams of our clients
              into a reality. We work closely with our users throughout software
              and website development to ensure that we are still aligned with
              the end goal. We are committed to producing exceptional software
              for each of our clients.
            </p>
            <button className="btn btn-primary">Learn More</button>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default About;
