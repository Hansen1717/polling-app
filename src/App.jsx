import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import login from './components/login/login';
import signup from './components/signUp/signUp';
import newPoll from './components/newPoll/newPoll';
import viewAll from './components/polls/polls';
import './components/polls/polls.css'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={login} />
          <Route exact path="/signup" component={signup} />
          <Route exact path="/newPoll" component={newPoll} />
          <Route exact path="/viewAll" component={viewAll} />
        </div>
      </Router>
    );
  }
}

export default App;
