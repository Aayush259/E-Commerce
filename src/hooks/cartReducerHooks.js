import { useDispatch } from 'react-redux';
import {
    removeItemFromCart as removeItem,
    addItemToCart as addItem,
    decrementCount as decrementItem,
    incrementCount as incrementItem
} from '../features/cart/cartSlice.js';

// Custom hook to dispatch action for cart state.
const useCartActions = () => {
    const dispatch = useDispatch();

    // Remove item from cart.
    const removeItemFromCart = (itemName) => dispatch(removeItem(itemName));

    // Add item to cart.
    const addItemToCart = (item) => dispatch(addItem(item));

    // Increase item count.
    const incrementItemCount = (itemName) => dispatch(incrementItem(itemName));

    // Decrease item count.
    const decrementItemCount = (itemName) => dispatch(decrementItem(itemName));

    return { removeItemFromCart, addItemToCart, incrementItemCount, decrementItemCount };
};

export default useCartActions;
