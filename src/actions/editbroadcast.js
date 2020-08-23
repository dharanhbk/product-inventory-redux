const editProductClickedBroadcast = function(product){
    console.log("Received new product in action broadcaster....");
    console.log(product);
    return ({
            type:'EDIT_PRODUCT',
            payload:product
    })
}

export default editProductClickedBroadcast