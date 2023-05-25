import {combineReducers} from "redux";
import {SearchReducer} from "./SearchRedux/Reducer";

export const rootReducer = combineReducers({
    search: SearchReducer,
})
