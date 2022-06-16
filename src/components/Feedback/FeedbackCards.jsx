/** @format */

import React, { Fragment } from "react";
import { Carousel } from "react-bootstrap";

import "./feedback.css";

const FeedbackCards = () => {
  return (
    <Fragment>
      <Carousel arousel variant="dark" className="slider">
        <Carousel.Item className="slider-item">
          <div className="feedback-card">
            <div className="card-profile">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="this is an vsiaual"
              />
            </div>
            <div className="card-message">
              <p>
                <i class="fas fa-quote-right"></i>
                Lorem ipsum dolor sit adipisicing elit. Dolorum quas neque
                cupiditate rem, maiores reiciendis necessitatibus, odio nisi vel
                soluta voluptatum tempore unde eveniet magnam veniam!
              </p>
            </div>
            <p className="card-name"> Bob Smith</p>
            <div className="card-stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="feedback-card">
            <div className="card-profile">
              <img
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="this is an vsiaual"
              />
            </div>
            <div className="card-message">
              <p>
                <i class="fas fa-quote-right"></i>
                Lorem ipsum dolor sit adipisicing elit. Dolorum quas neque
                cupiditate rem, maiores reiciendis necessitatibus, odio nisi vel
                soluta voluptatum tempore unde eveniet magnam veniam!
              </p>
            </div>
            <p className="card-name"> Jean Juilia</p>
            <div className="card-stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="feedback-card">
            <div className="card-profile">
              <img
                src="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="this is an vsiaual"
              />
            </div>
            <div className="card-message">
              <p>
                <i class="fas fa-quote-right"></i>
                Lorem ipsum dolor sit adipisicing elit. Dolorum quas neque
                cupiditate rem, maiores reiciendis necessitatibus, odio nisi vel
                soluta voluptatum tempore unde eveniet magnam veniam!
              </p>
            </div>
            <p className="card-name"> Molly Hooper </p>
            <div className="card-stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </Fragment>
  );
};

export default FeedbackCards;
