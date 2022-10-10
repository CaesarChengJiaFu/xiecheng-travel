import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';
import axios from 'axios';

export const FETCH_RECOMMEND_PRODUCTS_START =
    "FETCH_RECOMMEND_PRODUCTS_START"; // 正在调用推荐信息api
export const FETCH_RECOMMEND_PRODUCTS_SUCCESS =
    "FETCH_RECOMMEND_PRODUCTS_SUCCESS"; // 推荐信息api调用成功
export const FETCH_RECOMMEND_PRODUCTS_FAIL =
    "FETCH_RECOMMEND_PRODUCTS_FAIL"; // 推荐信息api调用失败

interface FectchRecommendProductsStartAction {
    type: typeof FETCH_RECOMMEND_PRODUCTS_START
}

interface FetchRecommendProductsSuccessAction {
    type: typeof FETCH_RECOMMEND_PRODUCTS_SUCCESS,
    payload: any
}

interface FecthRecommendProductsFailAction {
    type: typeof FETCH_RECOMMEND_PRODUCTS_FAIL,
    payload: any
}

export type RecommendProductAction = FectchRecommendProductsStartAction | FetchRecommendProductsSuccessAction | FecthRecommendProductsFailAction;

//工厂模式创建creator
export const fetchRecommendProductStartActionCreator = (): FectchRecommendProductsStartAction => {
    return {
        type: FETCH_RECOMMEND_PRODUCTS_START
    }
}

export const fetchRecommendProductSuccessActionCreator = (data): FetchRecommendProductsSuccessAction => {
    return {
        type: FETCH_RECOMMEND_PRODUCTS_SUCCESS,
        payload: data
    }
}

export const fetchRecommendProductFailActionCreator = (error): FecthRecommendProductsFailAction => {
    return {
        type: FETCH_RECOMMEND_PRODUCTS_FAIL,
        payload: error
    }
}

//ThunkAction泛型类型包含四个参数，ReturnType, State, ExtraThunkArg, Action
/**
 * 
 *  类型参数1： ReturnType 用于指定函数的返回值类型 void
    类型参数2： 指定RootState的类型
    类型参数3： 指定额外的参数类型，一般为unkonwn或者any
    类型参数4： 用于指定dispatch的Action类型
 */
export const giveMeDataActionCreator = (): ThunkAction<void, RootState, unknown, RecommendProductAction> => async (dispatch, getState) => {
    dispatch(fetchRecommendProductStartActionCreator())
    try {
        const { data } = await axios.get("http://123.56.149.216:8080/api/productCollections", {
            headers: {
                "x-icode": "68B3BD1D7CD6C14C"
            }
        });
        dispatch(fetchRecommendProductSuccessActionCreator(data))
    } catch (error) {
        dispatch(fetchRecommendProductFailActionCreator(error))
    }
}