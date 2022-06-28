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
 
        <div className="footer-links">
          <Row>
            <Col lg={3} md={12} sm={12} sx={{margin:0}}>
              <div className="footer_logo">
                <img src={logo} style={{ height: "100px" }} />
                <h4>Aurteck</h4>
                <p>Let's Build your dream</p>
                <p>
                  At our software company, we turn the digital dreams of our clients into a reality. We work closely with our users throughout software and website development to ensure that we are still aligned with the end goal. 
                </p>
              </div>
            </Col>
            <Col lg={3} md={12} sm={12}>
              <h4> Company</h4>
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
                  <a href="/term-and-contition">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#contact">Contact Us</a>
                </li>
              </ul>
              
            </Col>
            <Col lg={3} md={12} sm={12}>
                   <h4> Our Services</h4>
              <ul>
                <li>
                  <a href="#header">Web Development Services</a>
                </li>
                <li>
                  <a href="#header">Web Hosting Services</a>
                </li>
                <li>
                  <a href="#about">Desktop App Development</a>
                </li>
                <li>
                  <a href="#services">Mobile App Development</a>
                </li>
                <li>
                  <a href="#portfolio">E-Commerce Solutions</a>
                </li>
                <li>
                  <a href="#testomonial">Graphic Design Serices </a>
                </li>
                <li>
                  <a href="#contact">Branding Solutions</a>
                </li>
                <li>
                  <a href="#contact">Custom Buisness Solutions</a>
                </li>
              </ul>
            </Col>
            <Col lg={3} md={12} sm={12} class="contact">
              
              <h4> Social Media</h4>
              <ul className="social-media">
                <li>
                  <a href="www.facebook.com"><i class="fab fa-facebook-f"></i> </a>
                </li>
                <li>
                  <a href="www.twitter.com"><i class="fab fa-twitter"></i> </a>
                </li>
                <li>
                  <a href="www.instagram.com"> <i class="fab fa-instagram"></i> </a>
                </li>
                <li>
                  <a href="www.linkdin.com"><i class="fab fa-linkedin-in"></i> </a>
                </li>
                <li>
                  <a href="www.behance.com"><i class="fab fa-behance"></i> </a>
                </li>
              </ul>
              <h4>Contact Us </h4>
              <p className="contact">
                  <i class="fas fa-phone-alt"></i>
                  <NumberFormat
                    value="7735163695"
                    format=" +1 (###) ###-####"
                    displayType={"text"}
                  />
                </p>
                <p className="contact">
                  <i class="fas fa-phone-alt"></i>
                  <NumberFormat
                    value="3231990919"
                    format=" +92 (###) ###-####"
                    displayType={"text"}
                  />
                </p>
                <p className="contact">
                  <i class="fas fa-at"></i> hi@aurteck.com
                </p>

                <p className="contact">
                  <i class="fas fa-map-marker-alt"></i> Liberty, Lahore, Punjab,
                  Pakistan
                  <br />
                  54000
                </p>
             
            </Col>
          </Row>
        </div>
        <Copyright />

    </div>
  );
};

export default Footer;
