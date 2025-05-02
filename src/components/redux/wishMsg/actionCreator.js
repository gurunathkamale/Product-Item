import { SAY_GOOD_AFTERNOON, SAY_GOOD_EVENING, SAY_GOOD_MORNING } from "./actionType"


let sayGoodMorning = ()=>{
    return{
        type: SAY_GOOD_MORNING,
        payload: 'good morning msg'
    }
}
let sayGoodAfternoon = ()=>{
    return{
        type: SAY_GOOD_AFTERNOON,
        payload: 'good afternoon msg'
    }
}
let sayGoodEvening = ()=>{
    return{
        type: SAY_GOOD_EVENING,
        payload: 'good evening msg'
    }
}

export{sayGoodMorning, sayGoodAfternoon, sayGoodEvening}