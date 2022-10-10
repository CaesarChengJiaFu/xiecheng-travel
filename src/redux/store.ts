import { createStore, combineReducers, applyMiddleware } from "redux";
import languageReducer from "./language/languageReducer";
import recommendProductsReducer from "./recommendProducts/recommendProductsReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    languageReducer,
    recommendProductsReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

//ReturnType可以拿到store.getState的返回值类型
export type RootState = ReturnType<typeof store.getState>

export default store;