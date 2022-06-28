/** @format */

import React, { Fragment } from "react";
import Cards from "../components/Cards/Cards";
import Header from "../components/Header/Header";
import "../styles/home.css";
import { Container } from "react-bootstrap";
import About from "../components/About/About ";
import Services from "../components/Services/Services";
import Portfolio from "../components/portfolio.jsx/Portfolio";
import Footer from "../components/Footer/Footer";
import Feedback from "../components/Feedback/Feedback";
import Sponsors from "../components/Sponsors/Sponsors";
import Location from "../components/Location/Location";
import Banner from "../components/Banner/Banner";

const Home = () => {
  return (
    <Fragment>
      <section id="header" className="header">
        <Header />
      </section>
      <Container>
        <section id="about" className="about">
          <About />
        </section>
        <section id="services" className="services">
          <Services />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>

        <section id="feedback">
          <Feedback />
          {/* Some Possitive Feedback That Encourage Us */}
        </section>
        <section id="logos">
          <Sponsors />
        </section>
        <section id="contact">
          <Location />
        </section>
      </Container>

    </Fragment>
  );
};

export default Home;
