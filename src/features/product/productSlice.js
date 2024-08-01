import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [],
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProducts: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { addProducts } = productSlice.actions;

export default productSlice.reducer;
