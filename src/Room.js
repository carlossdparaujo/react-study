import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';

const Room = () => {
  return (
		<div className="App">
			<h2>{'You\'re in your room'}</h2>
		  <Link to="/hallway">{'Hallway'}</Link>
		</div>
  );
}

export default Room;