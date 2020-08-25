
const productsReducer = function allProductsReducer(state = [], action) {
    console.log(state)
    
    var productDetails= []
    

    switch(action.type){

        case "VIEW_PRODUCT":
            return action.payload

        case "NEW_PRODUCT":
            return [...state,action.payload]
        
        case "SEARCH_PRODUCT":
                return action.payload
                
          
        case "EDIT_PRODUCT":
            console.log("came to edit")
            console.log(state)
            console.log(action.payload)
            return [...state,action.payload]
  
    }
    return productDetails
}

export default productsReducer