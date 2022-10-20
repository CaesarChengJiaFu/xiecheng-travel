import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

interface ShoppingCartState {
    loading: boolean,
    error: string | null,
    items: any[]
}

const initialState: ShoppingCartState = {
    loading: true,
    error: null,
    items: []
}

//查询购物车
export const getShoppingCart = createAsyncThunk(
    "shoppingCart/getShoppingCart", //action的命名空间
    async (jwt: string, thunkAPI) => {
        const { data } = await axios.get(
            "http://123.56.149.216:8080/api/shoppingCart", {
            headers: {
                "x-icode": "68B3BD1D7CD6C14C",
                Authorization: `bearer ${jwt}`
            }
        });

        return data.shoppingCartItems;
    }
);

//添加购物车
export const addShoppingCart = createAsyncThunk(
    "shoppingCart/addShoppingCart", //action的命名空间
    async (paramaters: { jwt: string, touristRouteId: string }, thunkAPI) => {
        const { data } = await axios.post(
            "http://123.56.149.216:8080/api/shoppingCart/items",
            {
                touristRouteId: paramaters.touristRouteId
            },
            {
                headers: {
                    "x-icode": "68B3BD1D7CD6C14C",
                    Authorization: `bearer ${paramaters.jwt}`
                }
            }
        );

        return data.shoppingCartItems;
    }
);

//清空购物车
export const clearShoppingCartItem = createAsyncThunk(
    "shoppingCart/clearShoppingCartItem",
    async (paramaters: { jwt: string, itemIds: number[] }, thunkAPI) => {
        return await axios.delete(
            `http://123.56.149.216:8080/api/shoppingCart/items/(${paramaters.itemIds.join(",")})`,
            {
                headers: {
                    "x-icode": "68B3BD1D7CD6C14C",
                    Authorization: `bearer ${paramaters.jwt}`
                }
            }
        )
    }
)

export const shoppingCartSlice = createSlice({
    name: "shoppingCart",
    initialState,
    reducers: {},
    extraReducers: {
        [getShoppingCart.pending.type]: (state) => {
            state.loading = true
        },
        [getShoppingCart.fulfilled.type]: (state, action) => {
            state.items = action.payload;
            state.loading = false;
            state.error = null;
        },
        [getShoppingCart.rejected.type]: (state, action: PayloadAction<string | null>) => {
            state.loading = false;
            state.error = action.payload
        },
        [addShoppingCart.pending.type]: (state) => {
            state.loading = true
        },
        [addShoppingCart.fulfilled.type]: (state, action) => {
            state.items = action.payload;
            state.loading = false;
            state.error = null;
        },
        [addShoppingCart.rejected.type]: (state, action: PayloadAction<string | null>) => {
            state.loading = false;
            state.error = action.payload
        },
        [clearShoppingCartItem.pending.type]: (state) => {
            state.loading = true
        },
        [clearShoppingCartItem.fulfilled.type]: (state) => {
            state.items = [];
            state.loading = false;
            state.error = null;
        },
        [clearShoppingCartItem.rejected.type]: (state, action: PayloadAction<string | null>) => {
            state.loading = false;
            state.error = action.payload
        }
    }
})