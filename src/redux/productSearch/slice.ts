import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'

interface ProductSearchState {
    loading: boolean,
    error: string | null,
    data: any,
    pagination: any
}

const initialState: ProductSearchState = {
    loading: true,
    error: null,
    data: null,
    pagination: null
}

//处理返回值 让其返回的是promise
export const searchProduct = createAsyncThunk(
    "productSearch/searchProduct", //action的命名空间
    async (paramaters: {
        keywords: string,
        nextPage: number | string,
        pageSize: number | string
    }, thunkAPI) => {
        let url = `http://123.56.149.216:8080/api/touristRoutes?pageNumber=${paramaters.nextPage}&pagesize=${paramaters.pageSize}`
        // if(paramaters.keywords) {
        //     url += `&keyword=${paramaters.keywords}`
        // }
        const response = await axios.get(url, {
            headers: {
                "x-icode": "68B3BD1D7CD6C14C"
            }
        });

        return {
            data: response.data,
            pagination: JSON.parse(response.headers["x-pagination"])
        };
    }
)

export const productSearchSlice = createSlice({
    name: "productSearch",
    initialState,
    reducers: {
        
    },
    extraReducers: {
        [searchProduct.pending.type]: (state) => {
            state.loading = true
        },
        [searchProduct.fulfilled.type]: (state, action) => {
            state.data = action.payload.data;
            state.pagination = action.payload.pagination;
            state.loading = false;
            state.error = null;
        },
        [searchProduct.rejected.type]: (state, action: PayloadAction<string | null>) => {
            state.loading = false;
            state.error = action.payload
        }
    }
})

