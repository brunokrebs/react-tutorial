import React, {Component} from 'react';

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-dark bg-primary fixed-top">
        <a className="navbar-brand" href="#">Q&App</a>
      </nav>
    )
  }
}

export default NavBar;
