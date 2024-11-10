import React, { useEffect, useState } from 'react';
import WishlistItem from './WishlistItem.jsx';
import { useUser } from '../../hooks/useStoreItems.js';
import { getWishlist } from '../../app/product.js';
import Loader from '../Loader.jsx';

export default function Wishlist() {

    const { user, isLoggedIn } = useUser();

    const [gettingWishlistItems, setGettingWishlistItems] = useState(true);
    const [wishlistItemsError, setWishlistItemsError] = useState(false);
    const [wishlistItems, setWishlistItems] = useState([]);

    const getWishlistItems = async () => {
        setGettingWishlistItems(true);

        try {
            const wishlistProducts = await getWishlist();
            setWishlistItems(wishlistProducts);
        } catch (error) {
            setWishlistItemsError(true);
        } finally {
            setGettingWishlistItems(false);
        }
    }

    useEffect(() => {
        if (isLoggedIn) {
            getWishlistItems();
        }
    }, [user]);

    return (
        <div className="flex flex-row flex-wrap justify-start items-start gap-4 w-fit my-8 mx-4">
            {
                gettingWishlistItems ? <Loader /> : wishlistItemsError ? (
                    <p className="absolute top-20 left-0 text-xl w-[100vw] overflow-hidden md:text-3xl font-semibold tracking-wider text-center my-10">
                        Something went wrong. Please try again later.
                    </p>
                ) : wishlistItems.length <= 0 ? (
                    <p className="absolute top-20 left-0 text-xl w-[100vw] overflow-hidden md:text-3xl font-semibold tracking-wider text-center my-10">
                        You haven't added anything in the wishlist yet.
                    </p>
                ) : (
                    <div className="flex flex-row flex-wrap justify-start items-start gap-4 w-fit my-8 mx-4">
                        {
                            wishlistItems.map(item => <WishlistItem key={item['_id']} item={item} />)
                        }
                    </div>
                )
            }
        </div>
    );
};
