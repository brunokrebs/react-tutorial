import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Answers from './Answers/Answers';
import NewQuestion from './NewQuestion/NewQuestion';
import Questions from './Questions/Questions';
import './App.css';
import Callback from "./Callback/Callback";
import SecuredRoute from './SecuredRoute/SecuredRoute';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Route exact path='/' component={Questions}/>
        <Route exact path='/callback' component={Callback}/>
        <Route exact path='/question/:questionId' component={Answers}/>
        <SecuredRoute path='/new-question' component={NewQuestion} />
      </div>
    );
  }
}

export default App;
