import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter
} from 'react-router-dom';

import Header from './HeaderComponent';
import About from './AboutComponent';

export default class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Header} />
        <Route exact path="/about" component ={About} />
      </Switch>
    );
  }
}
