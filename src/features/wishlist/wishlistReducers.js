
const addItemToWishlist = (state, action) => {

    const itemIndex = state.value.find(item => item.name === action.payload.name);

    if (itemIndex === -1) {
        state.value.push({ ...action.payload });
    };
};

const removeItemFromWishlist = (state, action) => {
    state.value = state.value.filter(item => item.name !== action.payload);
};

export { addItemToWishlist, removeItemFromWishlist };
