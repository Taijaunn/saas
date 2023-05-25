import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./RootReducer";
import thunk from "redux-thunk";

export const Store = createStore(rootReducer, applyMiddleware(thunk))

export type RootStore = ReturnType<typeof rootReducer>
