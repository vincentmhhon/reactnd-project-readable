import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

  render() {
    const { link, linkName } = this.props

    return (
      <div>
      <ul id="menu">
        <li>
          <Link to={`${link}`} >
             { linkName }
          </Link>
        </li>
        </ul>
      </div>
    )
  }
}

export default Header;