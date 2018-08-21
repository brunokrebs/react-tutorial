import React, { Component } from 'react';
import Questions from './Questions/Questions';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Starting Up with React</p>
        <Questions />
      </div>
    );
  }
}

export default App;
