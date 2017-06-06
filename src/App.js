import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import FloodsAdminRoutes from './FloodsAdminRoutes';

class App extends Component {
  render() {
    return (
        <Router>
          <FloodsAdminRoutes />
        </Router>
    );
  }
}

export default App;
