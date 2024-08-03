import { createSlice } from '@reduxjs/toolkit';
import {
    addItemToWishlist as addItem,
    removeItemFromWishlist as removeItem
} from './wishlistReducers';

const initialState = {
    value: JSON.parse(localStorage.getItem('wishlist')) || [],
};

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addItemToWishlist: addItem,
        removeItemFromWishlist: removeItem,
    },
});

export const { addItemToWishlist, removeItemFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
