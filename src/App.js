import React, { Component } from 'react';
import Toolbar from './Toolbar.js';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import Dashboard from './Dashboard.js';
import { Button } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Toolbar/>
      <Dashboard/> 

      </div>
    );
  }
}

export default App;
