import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-primary fixed-top">
        <Link className="navbar-brand" to="/">
          Q&App
        </Link>
      </nav>
    )
  }
}

export default NavBar;
