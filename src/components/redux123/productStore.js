import { combineReducers, createStore } from "redux";
import { productReducer } from "./productItem/reducer";
import { composeWithDevTools } from "@redux-devtools/extension";


let rootReducer = combineReducers({
    product: productReducer
})

let proStore = createStore(rootReducer, composeWithDevTools())

export {proStore}