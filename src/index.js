import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from "react-redux";
import allReducers from './reducers/combineallreducer';
import { HashRouter } from 'react-router-dom';
import Routing from './routing';

const reduxStore = createStore(allReducers)

ReactDOM.render(
  <HashRouter>
    <Provider store={reduxStore}>
      <Routing />
    </Provider>
    </HashRouter>,
  document.getElementById('root')
);


