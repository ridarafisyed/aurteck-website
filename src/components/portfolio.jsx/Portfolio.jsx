/** @format */

import React, { Fragment } from "react";

import { Tabs, Tab, Box, Typography } from "@mui/material";
import "./portfolio.css";
import WebApp from "./WebApp";
import DeskApp from "./DeskApp";
import MobApp from "./MobApp";
import LogoDesigns from "./LogoDesigns";
import Illustrations from "./Illustrations";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
const Portfolio = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Fragment>
      <div className="section-text  text-left">
        <h4>Our Portfolio</h4>
        <h1>
          Check Our Recent <br /> Projects
        </h1>
      </div>
      <Box
        sx={{
          alignItems: "center",
          justifyContent: "center",
          maxWidth: { xs: 520, sm: 720, md: 950, lg: 1200 },
          bgcolor: "background.paper",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
        >
          <Tab
            label="Logo Desgining"
            textColor="primary"
            indicatorColor="primary"
            sx={{
              "&:hover": {
                color: "primary",
              },
            }}
          />
          <Tab label="Desktop Applications" />

          <Tab label="Web Desgining" />

          <Tab label="Illustrations" />
        </Tabs>

        <TabPanel value={value} index={0}>
          <LogoDesigns />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <DeskApp />
        </TabPanel>
         <TabPanel value={value} index={2}>
          <WebApp />
        </TabPanel>
         <TabPanel value={value} index={3}>
          <Illustrations />
        </TabPanel>
        
       
      </Box>
    </Fragment>
  );
};

export default Portfolio;
