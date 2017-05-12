import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Room from './Room.js';
import Hallway from './Hallway.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Room}/>
          <Route exact path="/hallway" component={Hallway}/>
        </div>
      </Router>
    );
  }
}

export default App;
