import { combineReducers } from "redux";
import {productData} from './ReducerProducts'
import { cartData } from "./Reducer";
const rootreducer = combineReducers({
    productData,
    cartData
});

export default rootreducer;