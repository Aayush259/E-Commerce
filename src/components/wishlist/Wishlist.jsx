import React from 'react';
import WishlistItem from './WishlistItem.jsx';
import { useWishlistItems } from '../../hooks/useStoreItems.js';

export default function Wishlist() {

    // Getting wishlist items from state.
    const wishlistItems = useWishlistItems();

    return (
        <div className="flex flex-row flex-wrap justify-start items-start gap-4 w-fit my-8 mx-4">
            {
                wishlistItems.length <= 0 ? (
                    <p className="absolute top-20 left-0 text-xl w-[100vw] overflow-hidden md:text-3xl font-semibold tracking-wider text-center my-10">
                        You haven't added anything in the wishlist yet.
                    </p>
                ) : (
                    <div className="flex flex-row flex-wrap justify-start items-start gap-4 w-fit my-8 mx-4">
                        {
                            wishlistItems.map(item => <WishlistItem key={item['name']} item={item} />)
                        }
                    </div>
                )
            }
        </div>
    );
};
