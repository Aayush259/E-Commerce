import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../features/user/userSlice.js';
import productSlice from '../features/product/productSlice.js';

const store = configureStore({
    reducer: {
        user: userSlice,
        product: productSlice,
    },
});

export default store;
