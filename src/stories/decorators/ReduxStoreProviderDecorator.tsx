import {applyMiddleware, combineReducers, createStore} from "redux";
import {CounterReducer} from "../../store/counter-reducer";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    counter: CounterReducer
})

export const StoryBookStore = createStore(rootReducer, applyMiddleware(thunk))

export const ReduxStoreProviderDecorator = (storyFn: Function) => {
    return <Provider store={StoryBookStore}>{storyFn()} </Provider>
}