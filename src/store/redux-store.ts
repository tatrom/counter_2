import {applyMiddleware, combineReducers, createStore} from "redux";
import {CounterReducer} from "./counter-reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    counter: CounterReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppStoreType = ReturnType<typeof rootReducer>;