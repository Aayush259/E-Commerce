import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import StatusCode from '../../utils/StatusCode';
import { fetchProducts } from '../../app/product';

const initialState = {
    value: [],
    status: StatusCode.IDLE,
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(getProducts.pending, (state) => {
            state.status = StatusCode.LOADING;
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.value = action.payload;
            state.status = StatusCode.IDLE;
        })
        .addCase(getProducts.rejected, (state) => {
            state.status = StatusCode.ERROR;
        })
    },
});

export const getProducts = createAsyncThunk('product/get', async () => {
    // const data = await fetch('/E-Commerce/data.json')
    // const response = await data.json();
    // return response;
    const products = await fetchProducts();
    return products.data;
});

export default productSlice.reducer;
