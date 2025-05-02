import { ON_DECREASE, ON_INCREASE } from "./actionType"


let onIncrease = ()=>{
    return{
        type: ON_INCREASE,
        payload: 'increase qty'
    }
}

let onDecrease = ()=>{
    return {
        type: ON_DECREASE,
        payload: 'decrease qty'
    }
}

export {onIncrease, onDecrease}