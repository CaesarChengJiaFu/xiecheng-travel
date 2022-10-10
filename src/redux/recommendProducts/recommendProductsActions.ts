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
    type:  typeof FETCH_RECOMMEND_PRODUCTS_FAIL,
    payload: any
}

export type RecommendProductAction = FectchRecommendProductsStartAction | FetchRecommendProductsSuccessAction |FecthRecommendProductsFailAction;

//工厂模式创建creator
export const fetchRecommendProductStartActionCreator = () : FectchRecommendProductsStartAction => {
    return  {
        type: FETCH_RECOMMEND_PRODUCTS_START
    }
}

export const fetchRecommendProductSuccessActionCreator = (data) : FetchRecommendProductsSuccessAction => {
    return  {
        type: FETCH_RECOMMEND_PRODUCTS_SUCCESS,
        payload: data
    }
}

export const fetchRecommendProductFailActionCreator = (error) : FecthRecommendProductsFailAction => {
    return  {
        type: FETCH_RECOMMEND_PRODUCTS_FAIL,
        payload: error
    }
}