import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-dark bg-primary fixed-top">
        <Link to="/">
          <a className="navbar-brand" href="/">Q&App</a>
        </Link>
      </nav>
    )
  }
}

export default NavBar;
