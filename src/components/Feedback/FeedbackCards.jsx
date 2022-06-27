/** @format */

import React, { Fragment } from "react";
import { Carousel } from "react-bootstrap";
import { testomonials } from "../../data/data";
import Image from "../../asserts/profile.png"

import "./feedback.css";
import { Typography } from "@mui/material";

const FeedbackCards = () => {
  return (
    <Fragment>
      <Carousel arousel variant="dark" className="slider">
      {
        testomonials.map((testomonial) => (
           <Carousel.Item className="slider-item">
            <div className="feedback-card">
              <div className="card-profile">
                <img
                  src={Image}
                  alt="this is an vsiaual"
                />
              </div>
              <div className="card-message">
                <p>
                  <i class="fas fa-quote-right"></i>
                  <Typography variant="span"  sx={{textTransform:"capitalize"}}> {testomonial.message} </Typography>
                 
                  <Typography color="gray" m={2} sx={{textTransform:"capitalize"}}> {testomonial.project_type} </Typography>
                </p>
              </div>
              <Typography  m={2} className="card-name"> {testomonial.name}</Typography>
              <div className="card-stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
            </div>
        </Carousel.Item>
        ))
      }
        
      </Carousel>
    </Fragment>
  );
};

export default FeedbackCards;
