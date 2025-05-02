import { combineReducers, createStore } from "redux";
import { msgReducer } from "./wishMsg/reducer";
import { composeWithDevTools } from "@redux-devtools/extension";


let rootReducer = combineReducers({
    mess: msgReducer
})

let store = createStore(rootReducer, composeWithDevTools())

export {store}