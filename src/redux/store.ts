import { createStore } from "redux";
import languageReducer from "./language/languageReducer";

const store = createStore(languageReducer);

//ReturnType可以拿到store.getState的返回值类型
export type RootState = ReturnType<typeof store.getState>

export default store;