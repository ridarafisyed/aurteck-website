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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus consectetur tempora assumenda consequatur numquam
              iste architecto ducimus cumque blanditiis sint quas rerum
              repellendus, alias cupiditate, beatae velit tempore impedit aut?
            </p>
            <button className="btn btn-primary">Learn More</button>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default About;
