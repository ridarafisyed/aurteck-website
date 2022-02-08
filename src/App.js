// Routes for navigation
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// // context
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/global.css"


// Containers
import Home from './containers/Home';
import Contact from './containers/Contact';
import About from './containers/About';
import Portfolio from './containers/Portfolio';
import Layout from './hocs/Layout';



function App() {
  // return(
  //   <HomePage/>
  
  return (
    <>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route  path="/About" component={About}/>
            <Route  path="/Portfolio" component={Contact}/>
            <Route path="/contact" component={Portfolio}/>  
          </Switch>        
        </Layout>
        </Router>
      
    </>
  );
}

export default App;
