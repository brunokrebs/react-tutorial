import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Answers from './Answers/Answers';
import NewQuestion from './NewQuestion/NewQuestion';
import Questions from './Questions/Questions';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Route exact path='/' component={Questions}/>
        <Route exact path='/question/:questionId' component={Answers}/>
        <Route exact path='/new-question' component={NewQuestion}/>
      </div>
    );
  }
}

export default App;
