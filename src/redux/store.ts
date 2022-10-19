import { createStore, applyMiddleware } from "redux";
import languageReducer from "./language/languageReducer";
import recommendProductsReducer from "./recommendProducts/recommendProductsReducer";
import thunk from "redux-thunk";
import { actionLog } from "./middlewares/actionLog";
import { productDetailSlice } from "./productDetail/slice";
import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { productSearchSlice } from "./productSearch/slice";
import { userSlice } from './user/slice';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"

const persistConfig = {
    key: "root",
    storage, //localStorage存储
    whitelist: ["user"] //即将user中的数据全部报保存
}

const rootReducer = combineReducers({
    languageReducer,
    recommendProductsReducer,
    productDetailReducer: productDetailSlice.reducer,
    productSearch: productSearchSlice.reducer,
    user: userSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

//const store = createStore(rootReducer, applyMiddleware(thunk, actionLog));
const store = configureStore({
    reducer: persistedReducer,
    //使用getDefaultMiddleware函数是为了保证thunk中间件不被覆盖的前提下引入自定义中间件
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(actionLog),
    devTools: true
})

const persister = persistStore(store);

//ReturnType可以拿到store.getState的返回值类型
export type RootState = ReturnType<typeof store.getState>;

//定义一个和store的dispatch一样类型的自定义dispatch
export type AppDispatch = typeof store.dispatch;

export default { store, persister };