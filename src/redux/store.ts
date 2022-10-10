import { createStore, combineReducers } from "redux";
import languageReducer from "./language/languageReducer";
import recommendProductsReducer from "./recommendProducts/recommendProductsReducer";

const rootReducer = combineReducers({
    languageReducer,
    recommendProductsReducer
})

const store = createStore(rootReducer);

//ReturnType可以拿到store.getState的返回值类型
export type RootState = ReturnType<typeof store.getState>

export default store;