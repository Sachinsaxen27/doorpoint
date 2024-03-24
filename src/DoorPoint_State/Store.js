import { applyMiddleware,legacy_createStore as createStore} from "redux";
import {thunk}  from "redux-thunk";
import reducers from "./reducer";

const Store =createStore(reducers,{},applyMiddleware(thunk))

export default Store