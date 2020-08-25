import blured from '../blured4.jpg'
import product1 from '../images/product1.png'
import product2 from '../images/product2.png'
import product3 from '../images/product3.png'
import product4 from '../images/product4.png'
import product5 from '../images/product6.png'


const productsReducer = function allProductsReducer(state = [], action) {
    console.log(state)
    
    var productDetails= [
        {
            id: 1,
            name:"shoe",
            image:product1,
            category:"clothes",
            manufacture:"puma",
            price:20,
            quantity:15,
            suplier:"abc"
        },
        {
            id: 2,
            name:"Track",
            image:product2,
            category:"Footwears",
            manufacture:"nike",
            price:28,
            quantity:45,
            suplier:"xyz"
        },
        {
            id: 3,
            name:"Shirt",
            image:product3,
            category:"Plastics",
            manufacture:"nike",
            price:28,
            quantity:45,
            suplier:"www"
        },
        {
            id: 5,
            name:"Bag",
            image:product4,
            category:"Footwears",
            manufacture:"nike",
            price:28,
            quantity:45,
            suplier:"suplier"
        },
        {
            id: 6,
            name:"cap",
            image:product5,
            category:"Footwears",
            manufacture:"nike",
            price:28,
            quantity:45,
            suplier:"puma"
        }
    ]
    

    switch(action.type){
        case "NEW_PRODUCT":
            let length = Math.random()
            return [...state,{ id:length+1, name: action.payload.name,image:action.payload.image,category:action.payload.category,
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
                if(action.payload.length!==0)
                return action.payload
                else return productDetails
                

                
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