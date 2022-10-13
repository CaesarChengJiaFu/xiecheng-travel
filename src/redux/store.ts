import { createStore, applyMiddleware } from "redux";
import languageReducer from "./language/languageReducer";
import recommendProductsReducer from "./recommendProducts/recommendProductsReducer";
import thunk from "redux-thunk";
import { actionLog } from "./middlewares/actionLog";
import { productDetailSlice } from "./productDetail/slice";
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    languageReducer,
    recommendProductsReducer,
    productDetailReducer: productDetailSlice.reducer
})

const store = createStore(rootReducer, applyMiddleware(thunk, actionLog));

//ReturnType可以拿到store.getState的返回值类型
export type RootState = ReturnType<typeof store.getState>

export default store;