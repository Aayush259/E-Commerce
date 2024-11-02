import { useSelector } from 'react-redux';

// Custom hook to use user state from store.
const useUser = () => useSelector(state => state.user);

// Custom hook to use product state from store.
const useProducts = () => useSelector(state => state.product.value);

// Custom hook to use cart state from store.
const useCartItems = () => useSelector(state => state.cart.value);

// Custom hook to use wishlist state from store.
const useWishlistItems = () => useSelector(state => state.wishlist.value);

// Custom hook to know whether the item is already in the cart state or not.
const useIsItemInCart = () => (itemName) => {
    const cartItems = useCartItems();
    
    return cartItems.some(item => item.name === itemName);
};

// Custom hook to know whether the item is already in the wishlist state or not.
const useIsItemInWishlist = () => (itemName) => {
    const wishlistItems = useWishlistItems();

    return wishlistItems.some(item => item.name === itemName);
};

export { useUser, useProducts, useCartItems, useWishlistItems, useIsItemInCart, useIsItemInWishlist };
