import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isLoggedIn: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
        },
        logout: (state) => {
            state.user = null;
            state.isLoggedIn = false;
        },
        addProductIdToCart: (state, action) => {
            state.user.cart = [...state.user.cart, action.payload];
        },
        removeProductIdFromCart: (state, action) => {
            state.user.cart = state.user.cart.filter(id => id !== action.payload);
        },
        addProductIdToWishlist: (state, action) => {
            state.user.wishlist = [...state.user.wishlist, action.payload];
        },
        removeProductIdFromWishlist: (state, action) => {
            state.user.wishlist = state.user.wishlist.filter(id => id !== action.payload);
        },
        clearCartIds: (state) => {
            state.user.cart = [];
        },
        updateUser: (state, action) => {
            state.user = action.payload;
        }
    }
});

export const { logout, setUser, addProductIdToCart, removeProductIdFromCart, addProductIdToWishlist, removeProductIdFromWishlist, clearCartIds, updateUser } = userSlice.actions;

export default userSlice.reducer;
