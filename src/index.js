import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import allReducers from './reducers/combineallreducer';
import { HashRouter } from 'react-router-dom';
import Routing from './routing';
import thunk from 'redux-thunk'


const reduxStore = createStore(allReducers,applyMiddleware(thunk))

ReactDOM.render(
  <HashRouter>
    <Provider store={reduxStore}>
      <Routing />
    </Provider>
    </HashRouter>,
  document.getElementById('root')
);


