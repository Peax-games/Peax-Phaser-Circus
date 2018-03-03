import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Circus from './Game/Circus';

class App extends Component {
  render() {
    Circus();
    return (
      <div id="myCanvas">

      </div>
    );
  }
}

export default App;
