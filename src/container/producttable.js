import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import searchProductBroadcast from '../actions/seacrhbroadcast';
import '../container/styles.css'
import { withRouter, Link } from 'react-router-dom';
import Axios from 'axios';
import viewProductBroadcast from '../actions/viewproductbroadcats';




class ProductTable extends React.Component {

    constructor(props){
        super(props)
        this.state={
            productsSearch:this.props.products
        }
    }
    

    componentWillMount(){
    this.getProducts()
    }
   
getProducts=()=>{
    Axios.get("http://localhost:3000/products")
    .then(res=>{
        this.setState({productsSearch:res.data})
        this.props.viewProducts(res.data)
    })
}

    renderTable=()=>{
        return this.props.products.map(product=>{
            return(
                <tr key={product.id} style={{padding:20}}>
                    <td style={{padding:20}}>{product.product_name}</td>
                    <td><img src={"images/" + product.productimage} style={{width:100,height:80}}></img></td>
                    <td>{product.category}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                    <td>{product.manufacture}</td>
                    <td>{product.suplier}</td>
                    <td><button className="editButton" onClick={()=>this.editproductWithId(product.id)}>Edit</button></td>
                    <td><button className="deleteButton" onClick={()=>this.deleteProducts(product.id)}>Delete</button></td>
                </tr>
            )
        })
    }
    deleteProducts=(id)=>{
        Axios.delete("http://localhost:3000/products/"+id)
        .then(res=> this.getProducts())
    }

    editproductWithId=(editId)=>{
        console.log(editId);
        this.props.history.push({
          pathname: '/editproducts', 
          state: {productId:editId}
      })
      }

    getSearch=(e)=>{
        e.preventDefault()
        console.log(e.target.value)
        let searchValue = e.target.value
        if(searchValue===''){
           return this.getProducts()
        }else{
            console.log(this.state.productsSearch)
            console.log(searchValue)
            let searchFound = this.state.productsSearch.filter(found=>{
                return found.product_name.toLowerCase().match(searchValue.toLowerCase().trim()) ||
                found.category.toLowerCase().match(searchValue.toLowerCase().trim()) ||
                found.suplier.toLowerCase().match(searchValue.toLowerCase().trim()) ||
                found.manufacture.toLowerCase().match(searchValue.toLowerCase().trim())
            })
            console.log(searchFound)
            return this.props.searchProduct(searchFound)
        }
    }
    
    render() {
         
        return ( 
            <div>
        <div className="navbar">
            <label style={{fontSize:"20px"}}>Search:</label>
            <input type="text" onChange={this.getSearch}></input>&nbsp;&nbsp;
            <Link to ='/addproduct'><button className="addButton">Add product</button></Link>
            </div>
            <br></br>
            <br></br>
            <table border="1px" width="100%">
                <thead>
                    <tr >
                        <th style={{padding:20}}>Name</th>
                        <th>Image</th>
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
        searchProduct: searchProductBroadcast,
        viewProducts:viewProductBroadcast
    }, dispatch)

}

export default compose(
    withRouter,
    connect(mapStatestoProps, convertPropToEventAndBroadcast)
  )(ProductTable);

//export default connect(mapStatestoProps,convertPropToEventAndBroadcast) (ProductTable);