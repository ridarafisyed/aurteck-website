/** @format */

import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import NumberFormat from "react-number-format";

import logo from "../../asserts/logo_bw.png";

import "./footer.css";

const Copyright = () => {
  return (
    <footer>
      <a href="#">Copyright &copy; 2022 Rida Rafi Syed</a> All rights reserved |
      this website is made by <a href="#"> @aurteck</a>
    </footer>
  );
};

const Footer = () => {
  return (
    <div className="footer-section">
      <Container>
        <div className="footer-links">
          <Row>
            <Col lg={4} md={12} sm={12}>
              <div className="footer_logo">
                <img src={logo} style={{ height: "100px" }} />
                <h3>Aurteck</h3>
                <p>Let's Build your dream</p>
                <p>
                  <i class="fas fa-phone-alt"></i>
                  <NumberFormat
                    value="7735163695"
                    format=" +1 (###) ###-####"
                    displayType={"text"}
                  />
                </p>
                <p>
                  <i class="fas fa-phone-alt"></i>
                  <NumberFormat
                    value="3231990919"
                    format=" +92 (###) ###-####"
                    displayType={"text"}
                  />
                </p>
                <p>
                  <i class="fas fa-at"></i> hi@aurteck.com
                </p>

                <p>
                  <i class="fas fa-map-marker-alt"></i> Liberty, Lahore, Punjab,
                  Pakistan
                  <br />
                  54000
                </p>
              </div>
            </Col>
            <Col lg={4} md={12} sm={12}>
              <ul className="footer-links">
                <li>
                  <a href="#header">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#testomonial">Testomonial</a>
                </li>
                <li>
                  <a href="#contact">Contact Us</a>
                </li>
              </ul>
              <ul>
                <li>
                  <i class="fab fa-facebook-f"></i> Facebook
                </li>
                <li>
                  <i class="fab fa-twitter"></i> Twitter
                </li>
                <li>
                  <i class="fab fa-instagram"></i> Instagram
                </li>
                <li>
                  <i class="fab fa-linkedin-in"></i> Linkdin
                </li>
                <li>
                  <i class="fab fa-behance"></i> Behance
                </li>
                <li>
                  <i class="fab fa-github"></i> GitHub
                </li>
              </ul>
            </Col>
            <Col lg={4} md={12} sm={12}>
              <h4>Contact Form</h4>
              <form>
                <div className="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id=""
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group">
                  <label for="subject">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    id="message"
                    aria-describedby="message"
                    placeholder="Enter subject"
                  />
                </div>
                <div className="form-group">
                  <label for="message">Message</label>
                  <textarea
                    class="form-control"
                    id="message"
                    rows="3"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </Col>
          </Row>
        </div>
        <Copyright />
      </Container>
    </div>
  );
};

export default Footer;
