const productsReducer = function allProductsReducer(state = [], action) {
    console.log(state)
    
    var productDetails= [
        {
            id: 1,
            name:"cap",
            category:"clothes",
            manufacture:"puma",
            price:20,
            quantity:15,
            suplier:"abc"
        },
        {
            id: 2,
            name:"Shoe",
            category:"Footwears",
            manufacture:"nike",
            price:28,
            quantity:45,
            suplier:"xyz"
        }
    ]
    

    switch(action.type){
        case "NEW_PRODUCT":
            let length = state.length
            return [...state,{ id:length+1, name: action.payload.name,category:action.payload.category,
                                manufacture:action.payload.manufacture,price:action.payload.price,
                                quantity:action.payload.quantity,suplier:action.payload.suplier }  ]
        case "DELETE_PRODUCT":
                console.log("came to delete")
                console.log(action.payload.id)
                return state.filter(product=>{ return product.id!==action.payload.id})
        case "SEARCH_PRODUCT":
                console.log("came to search")
                console.log(state)
                console.log(action.payload)
                let arr= state
                arr= arr.filter((product) => {
                    return (product.name.toLowerCase().match(action.payload.toLowerCase()))
                  })
                 if(arr.length!==null) return arr
                 else return state

                
        case "EDIT_PRODUCT":
            console.log("came to edit")
            console.log(state)
            console.log(action.payload)
            return [...state.filter(product=>{ return product.id!==action.payload.id}),{ id:action.payload.id, name: action.payload.name,category:action.payload.category,
                manufacture:action.payload.manufacture,price:action.payload.price,
                quantity:action.payload.quantity,suplier:action.payload.suplier }  ]
  
    }
    return productDetails
}

export default productsReducer