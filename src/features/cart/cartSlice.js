import { createSlice } from '@reduxjs/toolkit';
import {
    addItemToCart as addItem,
    decrementCount as decrementItemCount,
    incrementCount as incrementItemCount,
    removeItemFromCart as removeItem
} from './cartReducers.js';

const initialState = {
    value: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart: addItem,
        removeItemFromCart: removeItem,
        incrementCount: incrementItemCount,
        decrementCount: decrementItemCount,
    },
});

export const { addItemToCart, removeItemFromCart, incrementCount, decrementCount } = cartSlice.actions;

export default cartSlice.reducer;
