import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AppHeader from './components/header';
import AppFooter from './components/footer';
import Application from './pages/application';
import Privacy from './pages/privacy';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppHeader/>
        
          <div className="page-main">
            <Route exact path="/" component={Application} />
            <Route path="/privacy" component={Privacy} />
          </div>
        

          <AppFooter/>
        </div>
      </Router>
    );
  }
}

export default App;
