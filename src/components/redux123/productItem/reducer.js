import { ON_DECREASE, ON_INCREASE } from "./actionType"

let initialState = {
   
        id: 1,
        image: 'https://5.imimg.com/data5/ANDROID/Default/2023/10/356939310/EM/DR/JB/201943257/product-jpeg.jpg',
        name: 'Smart Watch',
        price: 550,
        qty: 1,
    
}


let productReducer = (state = initialState, action)=>{
    switch(action.type){
        case ON_INCREASE:
            return{
                ...state,
                    qty: (state.qty +1 )
             
            }
        case ON_DECREASE:
            return{
                     ...state,
                    qty: (state.qty - 1 > 0)? state.qty - 1 :1
                
            }

        default:
            return state
    }
}

export {productReducer}