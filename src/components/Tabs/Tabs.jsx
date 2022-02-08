/** @format */

import React, { Fragment, useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import styles from "./tabs.module.css";

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);
  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };
  return (
    <Fragment>
      <ul className={styles.tabs}>
        {children.map((tab) => (
          <li
            onClick={(e) => handleClick(e, tab.props.label)}
            className={tab.props.label === activeTab ? styles.current : ""}
            key={tab.props.label}
          >
            {tab.props.label}
          </li>
        ))}
      </ul>

      {children.map((one) =>
        one.props.label === activeTab ? (
          <div className={styles.content} key={one.props.label}>
            {one.props.children}
          </div>
        ) : (
          ""
        ),
      )}
    </Fragment>
  );
};

export default Tabs;
