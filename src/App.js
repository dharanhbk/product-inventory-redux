import React from 'react';
import './App.css';
import AddProduct from './container/addproducts';
import ProductTable from './container/producttable';
import EditProduct from './container/editproduct';
import {Switch,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <AddProduct></AddProduct>
      <ProductTable></ProductTable>
      <Switch>
                <Route exact path='/editproduct' component={EditProduct}></Route> 
      </Switch>
      {/* <EditProduct></EditProduct> */}
    </div>
  );
}

export default App;
