/** @format */

import React from "react";
import { Fragment } from "react";
import FeedbackCards from "./FeedbackCards";

import "./feedback.css";

const Feedback = () => {
  return (
    <Fragment>
      <div className="section-text">
        <h4>Our Testimonial</h4>
        <h1>
          Honourable Client <br />
          Says About Us
        </h1>
      </div>
      <div>
        <FeedbackCards />
      </div>
    </Fragment>
  );
};

export default Feedback;
