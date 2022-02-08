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
      <section className="header">
        <Header />
      </section>
      <Container>
        <section className="about">
          <About />
        </section>
        <section className="services">
          <Services />
        </section>
        <section>
          <Portfolio />
        </section>

        <section>
          <Feedback />
          {/* Some Possitive Feedback That Encourage Us */}
        </section>
        <section>
          <Sponsors />
        </section>
        <section>
          <Location />
        </section>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default Home;
