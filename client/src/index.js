import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithSore, routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import ReduxPromise from 'redux-promise';

import './styles/index.less';
import Navigation from '../src/components/NavigationComponent';
import Main from '../src/components/MainComponent';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, thunk)(
  createStore
);

const App = () =>
  <div className="container">
    <Navigation />
    <Main />
  </div>;

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
