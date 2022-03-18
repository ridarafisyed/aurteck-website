/** @format */

// Routes for navigation
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// // context
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css";

// Containers
import Home from "./containers/Home";
import Contact from "./containers/Contact";
import About from "./containers/About";
import Portfolio from "./containers/Portfolio";
import Layout from "./hocs/Layout";
import { theme } from "./hocs/Theme";

import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

function App() {
  // return(
  //   <HomePage/>

  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/About" component={About} />
              <Route path="/Portfolio" component={Portfolio} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </Layout>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
