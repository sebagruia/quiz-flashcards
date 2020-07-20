import {combineReducers} from "redux";
import itemsReducer from "./reducers"

const rootReducer = combineReducers({itemsReducer});

export default rootReducer;