/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
/* eslint-enable */

class App extends Component {
  render() { // eslint-disable-line class-methods-use-this
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
