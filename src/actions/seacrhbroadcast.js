const searchProductBroadcast = function(product){
    console.log("Received search product in action broadcaster....");
    console.log(product);
    return ({
            type:'SEARCH_PRODUCT',
            payload:product
    })
}

export default searchProductBroadcast