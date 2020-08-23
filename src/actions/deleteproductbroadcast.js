const deleteProductBroadcast = function(product){
    console.log("Received new product in action broadcaster....");
    console.log(product);
    return ({
            type:'DELETE_PRODUCT',
            payload:product
    })
}

export default deleteProductBroadcast