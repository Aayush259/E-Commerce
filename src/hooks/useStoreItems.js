import { useSelector } from 'react-redux';

// Custom hook to use user state from store.
const useUser = () => useSelector(state => state.user);

// Custom hook to use product state from store.
const useProducts = () => useSelector(state => state.product.value);

// Custom hook to know whether the item is already in the cart state or not.
const useIsItemInCart = () => (id) => {
    // const cartItems = useCartItems();

    // return cartItems.some(item => item.name === itemName);

    const { user, isLoggedIn } = useUser();
    if (!isLoggedIn) {
        return false;
    }
    return user.cart.some(cartProdId => cartProdId === id);
};

// Custom hook to know whether the item is already in the wishlist state or not.
const useIsItemInWishlist = () => (id) => {
    // const wishlistItems = useWishlistItems();

    // return wishlistItems.some(item => item.name === itemName);

    const { user, isLoggedIn } = useUser();
    if (!isLoggedIn) {
        return false;
    }
    return user.wishlist.some(wishlistProdId => wishlistProdId === id);
};

export { useUser, useProducts, useIsItemInCart, useIsItemInWishlist };
