
// Reducer to add item in cart state.
const addItemToCart = (state, action) => {

    // Getting item index.
    const itemIndex = state.value.findIndex(item => item.name === action.payload.name);

    // If item index is already in store, increase its count, else add it.
    if (itemIndex !== -1) {
        state.value[itemIndex].count += 1;
    } else {
        state.value.push({ ...action.payload, count: 1 })
    }
};

// Reducer to remove item from cart state.
const removeItemFromCart = (state, action) => {
    state.value = state.value.filter(item => item.name !== action.payload);
};

// Reducer to increment item count in cart state.
const incrementCount = (state, action) => {
    const item = state.value.find(item => item.name === action.payload);

    if (item) {
        item.count += 1
    }
};

// Reducer to decrement item count in cart state.
const decrementCount = (state, action) => {
    const item = state.value.find(item => item.name === action.payload);

    if (item) {
        item.count -= 1;

        if (item.count <= 0) {
            state.value = state.value.filter(item => item.name !== action.payload);
        };
    };
};

export { addItemToCart, removeItemFromCart, incrementCount, decrementCount };
