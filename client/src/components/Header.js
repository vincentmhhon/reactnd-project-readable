import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
      <ul id="menu">
        <li>
          <Link to="/">
          Back to Home
          </Link>
        </li>
        </ul>
      </div>
    )
  }
}

export default Header;