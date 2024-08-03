
const localStorageMiddleWare = type => store => next => action => {
    // Call reducer.
    const result = next(action);

    if (action.type.startsWith(type)) {
        // Getting current state from the store.
        const state = store.getState();

        // Save the cart state to local storage.
        localStorage.setItem(type, JSON.stringify(state[type].value));
    };

    return result;
};

// Middleware for cart.
const cartLocalStorageMiddleWare = () => localStorageMiddleWare('cart');

// Middleware for wishlist.
const wishlistLocalStorageMiddleWare = () => localStorageMiddleWare('wishlist');

export { cartLocalStorageMiddleWare, wishlistLocalStorageMiddleWare };
