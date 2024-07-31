
// Function to add item in cart.
const addItemToCart = (state, action) => {

    const itemIndex = state.value.findIndex(item => item.name === action.payload.name);

    if (itemIndex !== -1) {
        state.value[itemIndex].count += 1;
    } else {
        state.value.push({ ...action.payload, count: 1 })
    }
};

// Function to remove item from cart.
const removeItemFromCart = (state, action) => {
    state.value = state.filter(item => item.name !== action.payload);
};

// Function to increment item count.
const incrementCount = (state, action) => {
    const item = state.value.find(item => item.name === action.payload);

    if (item) {
        item.count += 1
    }
};

// Function to decrement item count.
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
