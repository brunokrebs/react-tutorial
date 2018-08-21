import React, {Component} from 'react';
import NavBar from './NavBar/NavBar';
import Questions from './Questions/Questions';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Questions/>
      </div>
    );
  }
}

export default App;
