import { useSelector } from 'react-redux';

const useCartItems = () => {
    return useSelector(state => state.cart.value);
};

const useWishlistItems = () => {
    return useSelector(state => state.wishlist.value);
};

export { useCartItems, useWishlistItems };
