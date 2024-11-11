import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useIsItemInWishlist } from '../../hooks/useStoreItems.js';
import { addToWishlist, removeFromCart, removeFromWishlist } from '../../app/product.js';
import { useDispatch } from 'react-redux';
import { addProductIdToWishlist, removeProductIdFromCart, removeProductIdFromWishlist } from '../../features/user/userSlice.js';
import { useToast } from '../ToastContextProvider.jsx';

export default function CartItem({ item, incrementItemCount, decrementItemCount }) {

    const dispatch = useDispatch();
    const { addToast } = useToast();

    const [isAddingToWishlist, setIsAddingToWishlist] = useState(false);
    const [isRemovingFromCart, setIsRemovingFromCart] = useState(false);

    // Function to know whether item is already in wishlist.
    const isItemInWishlist = useIsItemInWishlist();

    // Getting item details.
    const { _id: itemId, count, image: itemImage, name: itemName, originalPrice: itemPrice, discountPercentage } = item;

    const discountPrice = itemPrice - (itemPrice * (discountPercentage / 100));

    // Check if the item is in the wishlist
    const inWishlist = isItemInWishlist(itemId);

    useEffect(() => {
        if (count <= 0) {
            handleCartAction();
        }
    }, [count, item]);

    const handleWishlistAction = async () => {
        if (isAddingToWishlist) return;
        setIsAddingToWishlist(true);
        if (inWishlist) {
            try {
                await removeFromWishlist(itemId);
                dispatch(removeProductIdFromWishlist(itemId));
                addToast('Removed from wishlist.', true);
            } catch (error) {
                addToast('Failed to remove.', false);
            }
        } else {
            try {
                await addToWishlist(itemId);
                dispatch(addProductIdToWishlist(itemId));
                addToast('Added to wishlist.', true);
            } catch (error) {
                addToast('Failed to add.', false);
            }
        }

        setIsAddingToWishlist(false);
    }

    const handleCartAction = async () => {
        if (isRemovingFromCart) return;
        setIsRemovingFromCart(true);

        try {
            await removeFromCart(itemId);
            dispatch(removeProductIdFromCart(itemId));
            addToast('Removed from cart.', true);
        } catch (error) {
            addToast('Failed to remove.', false);
        }
        setIsRemovingFromCart(false);
    }

    const actionButtons = [
        {
            text: "Remove From Cart",
            onClick: handleCartAction,
            classes: `bg-slate-900 text-white hover:bg-white hover:text-slate-900 ${isRemovingFromCart ? "opacity-50" : "opacity-100"}`,
            disabled: isRemovingFromCart,
        },
        {
            text: inWishlist ? "Remove from Wishlist" : "Add to Wishlist",
            onClick: handleWishlistAction,
            classes: `bg-white text-slate-900 hover:bg-slate-900 hover:text-white min-w-none md:min-w-[253px] ${isAddingToWishlist ? "opacity-50" : "opacity-100"}`,
            disabled: isAddingToWishlist,
        }
    ];

    return (
        <div className="shadow-product-card-shadow overflow-hidden max-w-[90vw] m-auto rounded-2xl flex flex-row items-center justify-center gap-4 py-4 px-3 flex-grow">
            <img src={itemImage} alt={itemName} className="w-24 md:w-32 max-h-full" />

            <div className="text-sm md:text-xl">
                <p className="font-semibold">{itemName}</p>
                <div className="flex flex-col gap-1 my-2 md:my-5">
                    <p className="font-semibold">
                        <span>&#8377;{discountPrice}</span>
                        <span className="font-normal text-slate-500 line-through ml-3">
                            &#8377;{itemPrice}
                        </span>
                    </p>
                    <p className="font-semibold text-green-600">{discountPercentage}% OFF</p>
                </div>

                <div className="flex flex-row gap-2">
                    <span>Quantity:</span>
                    <div className="flex flex-row items-center justify-center gap-0">
                        <button
                            className="hover:opacity-75"
                            onClick={() => decrementItemCount(itemId)}
                        >
                            <FontAwesomeIcon
                                icon="fa-solid fa-minus"
                                className="text-white bg-black rounded-full h-4 w-4 p-[1.5px]"
                            />
                        </button>

                        <span className="mx-2">
                            {count}
                        </span>

                        <button
                            className="hover:opacity-75"
                            onClick={() => incrementItemCount(itemId)}
                        >
                            <FontAwesomeIcon
                                icon="fa-solid fa-plus"
                                className="text-white bg-black rounded-full h-4 w-4 p-[1.5px]"
                            />
                        </button>
                    </div>
                </div>

                <div
                    className="flex flex-row flex-wrap w-full items-center justify-center gap-4 mt-5 pb-2"
                >
                    {
                        actionButtons.map(({ text, onClick, classes, disabled }, index) => (
                            <button
                                key={index}
                                className={`flex-grow py-3 px-2 border-2 border-slate-900 uppercase duration-300 ${classes}`}
                                onClick={onClick}
                                disabled={disabled}
                            >
                                {text}
                            </button>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};
