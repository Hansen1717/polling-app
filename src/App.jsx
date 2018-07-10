import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import login from './components/login/login'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={login} />
        </div>
      </Router>
    );
  }
}

export default App;
