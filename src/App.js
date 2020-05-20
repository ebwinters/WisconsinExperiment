import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Container from './Container';
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Container />
      </div>
    </Router>
  );
}

export default App;
