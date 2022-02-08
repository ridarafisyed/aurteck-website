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
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
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
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
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
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
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
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
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
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
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
                <p>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
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
