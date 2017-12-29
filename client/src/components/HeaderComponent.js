import React, { Component } from 'react';
import linkedInLogo from '../images/In-Black-128px-R.png';
import twitterLogo from '../images/Twitter_Logo_Blue.png';
import githubLogo from '../images/GitHub-Mark-120px-plus.png';
export default class Header extends Component {
  render() {
    return (
      <div>
        <h1 className="header">Alan Nguyen</h1>
        <h3 className="subHeader"> App / Web Developer</h3>
          <div className="logos">
              <a href="https://www.linkedin.com/in/alan-nguyen-b42635a1/">
              <img className="logo" src={ linkedInLogo } />
          </a>
          <a href="https://twitter.com/shiromdk">
              <img className="logo" src={ twitterLogo } />
      </a>
          <a href="https://github.com/shiromdk">
              <img className="logo" src={ githubLogo } />
  </a>
          </div>
      </div>
    );
  }
}
