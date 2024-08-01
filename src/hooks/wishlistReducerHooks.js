import { useDispatch } from 'react-redux';
import {
    addItemToWishlist as addItem,
    removeItemFromWishlist as removeItem
} from '../features/wishlist/wishlistSlice.js';

// Custom hook to dispatch wishlist state actions.
const useWishlistActions = () => {

    const dispatch = useDispatch();

    // Add item to wishlist.
    const addItemToWishlist = (item) => dispatch(addItem(item));

    // Remove item from wishlist.
    const removeItemFromWishlist = (itemName) => dispatch(removeItem(itemName));

    return { addItemToWishlist, removeItemFromWishlist };
};

export default useWishlistActions;
