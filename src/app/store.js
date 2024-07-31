import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../features/cart/cartSlice.js';
import wishlistSlice from '../features/wishlist/wishlistSlice.js';

const store = configureStore({
    reducer: {
        cart: cartSlice,
        wishlist: wishlistSlice,
    }
});

export default store;
