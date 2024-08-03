import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../features/cart/cartSlice.js';
import wishlistSlice from '../features/wishlist/wishlistSlice.js';
import productSlice from '../features/product/productSlice.js';
import { cartLocalStorageMiddleWare, wishlistLocalStorageMiddleWare } from './localStorageMiddleWare.js';

const store = configureStore({
    reducer: {
        product: productSlice,
        cart: cartSlice,
        wishlist: wishlistSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([cartLocalStorageMiddleWare(), wishlistLocalStorageMiddleWare()]),
});

export default store;
