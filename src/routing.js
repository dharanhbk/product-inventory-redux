import React from 'react';
import './App.css';
import EditProduct from './container/editproduct';
import {Switch,Route} from 'react-router-dom'
import App from './App';

function Routing() {
  return (
    <div className="App">
      <Switch>
                <Route exact path='/' component={App}></Route> 
                <Route exact path='/editproducts' component={EditProduct}></Route> 
      </Switch>
      
    </div>
  );
}

export default Routing;