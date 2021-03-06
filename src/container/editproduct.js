import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import editProductClickedBroadcast from '../actions/editbroadcast';
import Axios from 'axios';
import viewProductBroadcast from '../actions/viewproductbroadcats';

class EditProduct extends React.Component {
    constructor(props){
        super(props)
        console.log(this.props.location.state.productId)
        // let prodEdit=this.props.product.filter(p=>p.id==this.props.location.state.productId)
        //console.log(prodEdit)
        this.state={
            id:0,
            name: "",
            category:"",
            price:0,
            quantity:0,
            manufacture:"",
            suplier:"",
            image:""
        }
    }
    componentWillMount(){
        if(this.props.location.state !== undefined){
            Axios.get('http://localhost:3000/products/'+this.props.location.state.productId)
                .then(response=>{
                    console.log(response);
                    this.setState({
                        name: response.data.product_name,
                        id:response.data.id,
                        quantity:response.data.quantity,
                        category:response.data.category,
                        price:response.data.price,
                        image:response.data.productimage,
                        manufacture:response.data.manufacture,
                        suplier:response.data.suplier
                    })
                }, error=>{
                    console.error(error);
                })
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
    catchUpdatedProduct=()=>{
        let reqBody={
            product_name: this.state.name,
            id: this.state.id,
            quantity:this.state.quantity,
            category:this.state.category,
            price:this.state.price,
            productimage:this.state.image,
            manufacture:this.state.manufacture,
            suplier:this.state.suplier
        }
        console.log(reqBody)
        // this.props.editProductClicked(reqBody)
        Axios.put("http://localhost:3000/products/"+this.state.id,reqBody)
        .then(res=>{
            this.props.editProductClicked(reqBody)
            this.getProducts()
        })
    }
        
    render() { 
       if(this.props.location.state==undefined){
           return "Come from dashboard"
       }
else
        return ( 
            <div > 
                 <form> 
                     <fieldset> <span style={{fontSize:30,color:"green"}}>Edit PRODUCT </span> <br></br><br></br>
                         <label>Product name:</label>
                         <input type="text" placeholder="product name" value={this.state.name} onChange={this.getName}></input><br></br><br></br>
                         <label>Category:</label>
                         <input type="text" placeholder="product name" value={this.state.category} onChange={this.getCategory}></input><br></br><br></br>
                         <label>Price:</label>
                         <input type="number" placeholder="product name" value={this.state.price} onChange={this.getPrice}></input><br></br><br></br>
                         <label>Quantity:</label>
                         <input type="number" placeholder="product name" value={this.state.quantity} onChange={this.getQuantity}></input><br></br><br></br>
                         <label>Manufacturer:</label>
                         <input type="text" placeholder="product name" value={this.state.manufacture} onChange={this.getManufacturer}></input><br></br><br></br>
                         <label>Suplier:</label>
                         <input type="text" placeholder="product name" value={this.state.suplier} onChange={this.getSuplier}></input><br></br><br></br>
                         <Link to="/"><button className="addButton" onClick={this.catchUpdatedProduct}>Submit</button></Link>
                     </fieldset>
                 </form>  
            </div> 
         );
        }
}
function convertStoreToProps(store){
    console.log("FriendDetail has received store....")
    console.log(store)
    return {
        product:store.products
    }
}
function convertPropToEventAndBroadcast(dispatch){

    return bindActionCreators({
        editProductClicked: editProductClickedBroadcast,
        viewProducts:viewProductBroadcast 
    }, dispatch)

}
 
export default connect(convertStoreToProps,convertPropToEventAndBroadcast) (EditProduct);