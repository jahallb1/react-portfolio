import React from 'react';
import './theme.css';
import './index.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import FooterFun from './components/Footer';
import Navbar from './components/Navbar/Navbar';

function App() {
  

  return (
    <div>
      <Router>
      <Navbar  />
      <Switch>
      <Route path='/' exact component={Home} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/resume' component={Resume} />
          <Route path='/contact' component={ContactForm} />
      </Switch>
      <FooterFun />
      </Router>
    </div>
  );
}

export default App;
