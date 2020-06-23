import {combineReducers} from "redux";
import items from "./reducers"

const rootReducer = combineReducers({items});

export default rootReducer;