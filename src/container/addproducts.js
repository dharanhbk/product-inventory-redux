import React from 'react';
import { bindActionCreators } from 'redux';
import addProductBroadcast from '../actions/addproductsbroadcast';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import defaultImage from "../images/shirt1.jpg"
import Axios from 'axios';
import viewProductBroadcast from '../actions/viewproductbroadcats';

class AddProduct extends React.Component {

    constructor(props){
        super(props);
        this.state={
            name:"",
            category:"",
            price:0,
            quantity:0,
            manufacture:"",
            suplier:""
        }
    }
    
    getName=(e)=>{
        console.log(e.target.value)
        this.setState({name:e.target.value})
    }
    getCategory=(e)=>{
        console.log(e.target.value)
        this.setState({category:e.target.value})
    }
    getPrice=(e)=>{
        console.log(e.target.value)
        this.setState({price:e.target.value})
    }
    getQuantity=(e)=>{
        console.log(e.target.value)
        this.setState({quantity:e.target.value})
    }
    getManufacturer=(e)=>{
        console.log(e.target.value)
        this.setState({manufacture:e.target.value})
    }
    getSuplier=(e)=>{
        console.log(e.target.value)
        this.setState({suplier:e.target.value})
    } 
    getProducts=()=>{
        Axios.get("http://localhost:3000/products")
        .then(res=>{
            this.props.viewProducts(res.data)
        })
    }
    getImage=(event)=>{

        console.log(event.target.value);
        console.log(event.target.value.substr(12));
        this.setState({image: event.target.value.substr(12)})

    }
    captureProduct=(e)=>{
        
        let product = {
            product_name:this.state.name,
            productimage:this.state.image,
            category:this.state.category,
            manufacture:this.state.manufacture,
            price:this.state.price,
            quantity:this.state.quantity,
            suplier:this.state.suplier
        }
        console.log(product)
        Axios.post("http://localhost:3000/products",product)
        .then(res=>{
            this.props.sendNewProduct(product)
            this.getProducts()
        })
    }

    render() { 
        return (
             <div>
                
                 <form>
                     <fieldset> <span style={{fontSize:30,color:"green"}}>ADD PRODUCT </span> <br></br><br></br>
                         <label>Product name:</label>
                         <input type="text" placeholder="product name" onChange={this.getName}></input><br></br><br></br>
                         <label>Category:</label>
                         <input type="text" placeholder="product name" onChange={this.getCategory}></input><br></br><br></br>
                         <label>Price:</label>
                         <input type="number" placeholder="product name" onChange={this.getPrice}></input><br></br><br></br>
                         <label>Quantity:</label>
                         <input type="number" placeholder="product name" onChange={this.getQuantity}></input><br></br><br></br>
                         <label>Manufacturer:</label>
                         <input type="text" placeholder="product name" onChange={this.getManufacturer}></input><br></br><br></br>
                         <label>Suplier:</label>
                         <input type="text" placeholder="product name" onChange={this.getSuplier}></input><br></br><br></br>
                         <label>Image: </label><input type="file" onChange={this.getImage} multiple accept='image/*' /><br></br><br></br>
                         <button onClick={this.captureProduct}><Link to="/">Submit</Link></button>
                     </fieldset>
                 </form>  
            </div> 
         );
    }
}
function convertPropToEventAndBroadcast(dispatch){

    return bindActionCreators({
        sendNewProduct: addProductBroadcast,
        viewProducts:viewProductBroadcast, 
    }, dispatch)

}
export default connect(null,convertPropToEventAndBroadcast) (AddProduct);