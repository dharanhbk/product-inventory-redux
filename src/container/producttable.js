import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import deleteProductBroadcast from '../actions/deleteproductbroadcast';
import searchProductBroadcast from '../actions/seacrhbroadcast';

import { withRouter } from 'react-router-dom';



class ProductTable extends React.Component {

    constructor(props){
        super(props)
        this.state={
            productsSearch:[],
            productId:[]
        }
    }
    

    componentWillMount(){
    this.setState({productsSearch:this.props.products})  
    }
   
    renderTable=()=>{
        console.log("render table called")
        console.log(this.state.productsSearch)
        return this.props.products.map(product=>{
            return(
                <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                    <td>{product.manufacture}</td>
                    <td>{product.suplier}</td>
                    <td><button onClick={()=>this.editproductWithId(product.id)}>edit</button></td>
                    <td><button onClick={()=>this.props.deleteProducts(product)}>delete</button></td>
                </tr>
            )
        })
    }

    editproductWithId=(editId)=>{
        console.log(editId);
        this.props.history.push({
          pathname: '/editproducts', 
          state: {productId:editId}
      })
      }

    // getSearch=(e)=>{
    //     e.preventDefault()
    //     console.log(e.target.value)
    //     let searchValue = e.target.value
    //     if(searchValue!==""){
    //     let searchFound = this.props.products.filter(found=>{
    //         return found.name.toLowerCase().match(searchValue.toLowerCase().trim())
    //     })
    //     console.log(searchFound);    
    //     return this.props.searchProduct(searchFound)
    // }
    // return this.props.searchProduct([])
    // }
    
    render() {
         
        return ( 
        <div>
            <label>Search:</label>
            <input type="text" onChange={(e)=>this.props.searchProduct(e.target.value)}></input>
            <table border="1px" width="100%">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Manufacture</th>
                        <th>Suplier</th>
                        <th colSpan="2">Actions</th>
                    </tr>
                </thead>
                
                <tbody>
                    {this.renderTable()}
                </tbody>
                
            </table>
        </div> 
        );
    }
}


function mapStatestoProps(store){
    console.log(store.products)
    return({
        products:store.products
    })
}
function convertPropToEventAndBroadcast(dispatch){

    return bindActionCreators({
        deleteProducts: deleteProductBroadcast,
        searchProduct: searchProductBroadcast
    }, dispatch)

}

export default compose(
    withRouter,
    connect(mapStatestoProps, convertPropToEventAndBroadcast)
  )(ProductTable);

//export default connect(mapStatestoProps,convertPropToEventAndBroadcast) (ProductTable);