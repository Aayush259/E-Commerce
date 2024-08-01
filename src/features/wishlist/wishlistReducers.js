
// Reducer to add wishlist item in wishlist state.
const addItemToWishlist = (state, action) => {

    // Getting item index.
    const itemIndex = state.value.findIndex(item => item.name === action.payload.name);

    // If item is not present in wishlist state, then add it.
    if (itemIndex === -1) {
        state.value.push({ ...action.payload });
    };
};

// Reducer to remove item from wishlist state.
const removeItemFromWishlist = (state, action) => {
    state.value = state.value.filter(item => item.name !== action.payload);
};

export { addItemToWishlist, removeItemFromWishlist };
