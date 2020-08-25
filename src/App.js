import React from 'react';
import './App.css';
import AddProduct from './container/addproducts';
import ProductTable from './container/producttable';
import EditProduct from './container/editproduct';
import {Switch,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div>
      <h1>PRODUCT INVENTORY SYSTEM</h1>
      </div>
      
     
      <Switch>
                <Route exact path='/' component={ProductTable}></Route> 
                <Route exact path='/editproduct' component={EditProduct}></Route> 
                <Route exact path='/addproduct' component={AddProduct}></Route> 
      </Switch>
      {/* <EditProduct></EditProduct> */}
    </div>
  );
}

export default App;
