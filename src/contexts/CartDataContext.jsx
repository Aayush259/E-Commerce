import React, { createContext, useContext, useState } from 'react';

// Creating context for cart data.
const CartDataContext = createContext();

// Context provider for cart data.
const CartDataProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Function to add item to cart
    const addItemToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, item]);
    };

    // Function to remove item from cart
    const removeItemFromCart = (itemName) => {
        setCartItems((prevItems) => prevItems.filter(item => item.name !== itemName));
    };

    // Check if an item is in the cart
    const isItemInCart = (itemName) => {
        return cartItems.some(item => item.name === itemName);
    };

    return (
        <CartDataContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart, isItemInCart }}>
            {children}
        </CartDataContext.Provider>
    );
};

// Custom hook to use CartData context.
const useCartData = () => {
    return useContext(CartDataContext);
};

export { useCartData, CartDataProvider };
