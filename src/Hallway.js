import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';

class Hallway extends Component {
	constructor(props) {
		super(props);

		this.state = {
			message: "You stepped on a piece of glass! Ouch!"
		};
	}

  render() {
  	return (
	  	<div className="App">
				<h2>{'You\'re in the hallway'}</h2>

				<h3>{this.state.message}</h3>

				<Link to="/">{'Room'}</Link>
			</div>
	  );
  }
}

export default Hallway;