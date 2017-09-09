import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
  render() {
    return (
      <nav>
        <input type="checkbox" id="nav-checkbox" />
        <label className="nav-label" htmlFor="nav-checkbox">
          <span className="nav-toggle">☰</span>
          <ul className="nav-menu first">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About Me</Link>
            </li>
            <li>
              <Link to="/">Gallery</Link>
            </li>
            <li>
              <Link to="/">Projects</Link>
            </li>
            <li>
              <Link to="/">Contact </Link>
            </li>
          </ul>
        </label>
      </nav>
    );
  }
}
