/** @format */

import React, { Fragment } from "react";

import GoogleMapReact from "google-map-react";
import "./location.css";

const distanceToMouse = (pt, mp) => {
  if (pt && mp) {
    // return distance between the marker and mouse pointer
    return Math.sqrt(
      (pt.x - mp.x) * (pt.x - mp.x) + (pt.y - mp.y) * (pt.y - mp.y),
    );
  }
};

const points = [
  { id: 1, title: "Round Pond", lat: 51.506, lng: -0.184 },
  { id: 2, title: "The Long Water", lat: 51.508, lng: -0.175 },
  { id: 3, title: "The Serpentine", lat: 51.505, lng: -0.164 },
];

const Location = () => {
  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };
  return (
    <Fragment>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13603.571187583162!2d74.3235535!3d31.5271042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1642780773508!5m2!1sen!2s"
        width="100%"
        height="450"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
      />
    </Fragment>
  );
};

export default Location;
