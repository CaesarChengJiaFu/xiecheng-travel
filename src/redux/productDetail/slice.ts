import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'

interface ProductDetailState {
    loading: boolean,
    error: string | null,
    data: any
}

const initialState: ProductDetailState = {
    loading: true,
    error: null,
    data: null
}

// export const getProductDetail = createAsyncThunk(
//     "productDetail/getProductDetail", //action的命名空间
//     async (touristRouteId: string, thunkAPI) => {
//         thunkAPI.dispatch(productDetailSlice.actions.fetchStart())
//         try {
//             const { data } = await axios.get(
//                 `http://123.56.149.216:8080/api/touristRoutes/${touristRouteId}`, {
//                 headers: {
//                     "x-icode": "68B3BD1D7CD6C14C"
//                 }
//             });
//             // setProduct(data)
//             // setLoading(false)
//             thunkAPI.dispatch(productDetailSlice.actions.fetchSuccess(data))
//         } catch (error) {
//             // setError(error instanceof Error ? error.message : "error");
//             // setLoading(false)
//             thunkAPI.dispatch(productDetailSlice.actions.fetchFail(
//                 error instanceof Error ? error.message : "error"
//             ))
//         }
//     }
// )

//处理返回值 让其返回的是promise
export const getProductDetail = createAsyncThunk(
    "productDetail/getProductDetail", //action的命名空间
    async (touristRouteId: string, thunkAPI) => {
        const { data } = await axios.get(
            `http://123.56.149.216:8080/api/touristRoutes/${touristRouteId}`, {
            headers: {
                "x-icode": "68B3BD1D7CD6C14C"
            }
        });
        //return的data就是一个promise，这样getProductDetail就会给我们生成pending,fullfill,rejected这三个action
        return data;
    }
)

export const productDetailSlice = createSlice({
    name: "productDetailSlice",
    initialState,
    reducers: {
        // fetchStart: (state) => {
        //     state.loading = true
        // },
        // fetchSuccess: (state, action) => {
        //     state.data = action.payload;
        //     state.loading = false;
        //     state.error = null;
        // },
        // fetchFail: (state, action: PayloadAction<string | null>) => {
        //     state.loading = false;
        //     state.error = action.payload
        // }
    },
    extraReducers: {
        [getProductDetail.pending.type]: (state) => {
            state.loading = true
        },
        [getProductDetail.fulfilled.type]: (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },
        [getProductDetail.rejected.type]: (state, action: PayloadAction<string | null>) => {
            state.loading = false;
            state.error = action.payload
        }
    }
})

