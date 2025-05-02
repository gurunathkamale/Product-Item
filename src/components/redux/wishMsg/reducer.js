import { SAY_GOOD_AFTERNOON, SAY_GOOD_EVENING, SAY_GOOD_MORNING } from "./actionType"


let initialState = {
    message: 'Hello'
}

let msgReducer = (state=initialState, action)=>{
    switch(action.type){
        case SAY_GOOD_MORNING:
        return{
            message: "Good Morning"
        }
        case SAY_GOOD_AFTERNOON:
        return{
            message: "Good Afternoon"
        }
        case SAY_GOOD_EVENING:
        return{
            message: "Good Evening"
        }
        default :
        return state

    }
}

export{msgReducer}