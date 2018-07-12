import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import login from './components/login/login';
import signup from './components/signUp/signUp';
import newPoll from './components/newPoll/newPoll';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={login} />
          <Route exact path="/signup" component={signup} />
          <Route exact path="/newPoll" component={newPoll} />
        </div>
      </Router>
    );
  }
}

export default App;
