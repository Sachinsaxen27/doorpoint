import { combineReducers } from "redux";
import cartreducer from "./cartreducer";
import itemview from './ViewItemState'
const reducers=combineReducers({
    carts:cartreducer,
    items:itemview
})
export default reducers