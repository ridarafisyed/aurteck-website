/** @format */

import React, { Fragment } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

// styling
import "./card.sass";

import "./card.css";

const Cards = () => {
  return (
    <Fragment>
      <Container className="card-container">
        <Row>
          <Col>
            <Card className="card">
              <div className="card-icon">
                <h1>
                  <i class="fas fa-desktop"></i>
                </h1>
              </div>
              <Card.Body className="section-text">
                <h3>Desktop Applications</h3>
                <div className="cardDescription">
                <p>
                 Combination of the rich technical expertise, years of experience, and deep understanding of the low-level desktop operating systems architecture help us to span the full cycle of the desktop application development services needed to solve our customer’s most complex challenges.
                </p>
                </div>
                <Button variant="secondary">Learn more </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card">
              <div className="card-icon">
                <h1>
                  <i class="fas fa-laptop"></i>
                </h1>
              </div>
              <Card.Body className="section-text">
                <h3>Web Applications</h3>
                <div className="cardDescription">
                <p>
                  Web development company that purely focuses on building fully functional, robust, and scalable web applications. We build custom web apps using the right technology stacks that align with your business objectives and help you achieve maximum growth. Our end goal is to build quality web applications for you that maximize resource utilization at a low cost.
                </p></div>
                <Button variant="secondary">Learn more </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card">
              <div className="card-icon">
                <h1>
                  <i class="fas fa-mobile-alt"></i>
                </h1>
              </div>
              <Card.Body className="section-text">
                <h3>Mobile Applications</h3>
                <div className="cardDescription">
                <p>
                  We offer a full cycle of application design, integration and management services. Whether it is a consumer oriented app or a transformative enterprise-class solution, the company leads the entire mobile app development process from ideation and concept to delivery, and to ongoing ongoing support.
                </p></div>
                <Button variant="secondary">Learn more </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card">
              <div className="card-icon">
                <h1>
                  <i class="fas fa-mail-bulk"></i>
                </h1>
              </div>
              <Card.Body className="section-text">
                <h3>Branding</h3>
                <div className="cardDescription">
                <p>
                  Branding services focus on your customers’ impression of your business, and you’ve to create an elite business digital presence. Corporate branding services indicate strong loyalty of customers to the brand for the long run. They are easy to retain and never look around for any other brand for services.
                </p></div>
                <Button variant="secondary">Learn more </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card">
              <div className="card-icon">
                <h1>
                  <i class="fas fa-bezier-curve"></i>
                </h1>
              </div>
              <Card.Body className="section-text">
                <h3>Graphic Desiging</h3>
                <div className="cardDescription">
                <p>
                  There's no limit to what you can get designed at AURTeck. Whether you're looking for a spectacular new logo or some stunning flyers, the talented global community of designers at DesignCrowd can make it happen. DesignCrowd prides itself on it's high quality designers who deliver only the best graphic design services. Find the right design service for you below and get design you'll love today!
                </p></div>
                <Button variant="secondary">Learn more </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="card">
              <div className="card-icon">
                <h1>
                  <i class="fas fa-headset"></i>
                </h1>
              </div>
              <Card.Body className="section-text">
                <h3>24/7 Customer Support</h3>
                <div className="cardDescription">
                <p>
                  we live up to our name. Whether for on-site assistance, technical support, or remote support, Source is here to ensure our customers’ success and end-users’ business productivity. We offer dependable, on-demand support options including 24/7 technical and remote support and 4-hour and next business day global on-site support in over 100 countries worldwide. Through our state-of-the-art training programs, Source Central case management platform, U.S.-based Support Operations Center, and our network of locally based field service professionals, we deliver complete, one-stop technical product support services with unparalleled scalability and expertise.
                </p></div>
                <Button variant="secondary">Learn more </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Cards;
