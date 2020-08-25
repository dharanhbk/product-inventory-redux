const viewProductBroadcast = function(product){
    console.log("Received new product in action broadcaster....");
    console.log(product);
    return ({
            type:'VIEW_PRODUCT',
            payload:product
    })
}

export default viewProductBroadcast