import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useCartActions from '../../hooks/cartReducerHooks.js';
import { useIsItemInCart, useIsItemInWishlist } from '../../hooks/useStoreItems.js';
import useWishlistActions from '../../hooks/wishlistReducerHooks.js';

export default function ProductCard({ productDetails }) {

    // Getting functions to add and remove items form cart.
    const { addItemToCart, removeItemFromCart } = useCartActions();

    // Getting functions to add and remove items from wishlist.
    const { addItemToWishlist, removeItemFromWishlist } = useWishlistActions();

    // Function to check whether item is already in cart or not.
    const isItemInCart = useIsItemInCart();

    // Function to check whether item is already in wishlist or not.
    const isItemInWishlist = useIsItemInWishlist();

    // Getting product details.
    const productImg = productDetails['image'];
    const productName = productDetails['name'];
    const rating = productDetails['rating'];
    const originalPrice = productDetails['originalPrice'];
    const discountPercentage = productDetails['discountPercentage'];
    const discountedPrice = originalPrice - (originalPrice * (discountPercentage / 100));

    // State to check if the product is already in the cart
    const [isAddedInCart, setIsAddedInCart] = useState(isItemInCart(productName));

    // State to check if the product is already in the wishlist.
    const [isAddedInWishlist, setIsAddedInWishlist] = useState(isItemInWishlist(productName));

    // Handle add/remove from cart.
    const handleCartAction = () => {
        if (isAddedInCart) {
            removeItemFromCart(productName);
        } else {
            addItemToCart(productDetails);
        };

        setIsAddedInCart(preVal => !preVal);
    };

    // Handle add/remove from wishlist.
    const handleWishlistAction = () => {
        if (isAddedInWishlist) {
            removeItemFromWishlist(productName);
        } else {
            addItemToWishlist(productDetails);
        };

        setIsAddedInWishlist(preVal => !preVal);
    };

    return (
        <div className="relative p-4 mx-auto w-64 max-w-[70vw] rounded-2xl shadow-product-card-shadow hover:shadow-product-card-shadow-hover duration-300">

            <button
                className="absolute top-0 right-0 m-2"
                onClick={handleWishlistAction}
            >
                <FontAwesomeIcon
                    icon="fa-solid fa-heart"
                    className={`
                        h-5
                        ${isAddedInWishlist ? 'text-red-600' : 'text-slate-400'}
                    `}
                />
            </button>

                <Link to={`/E-Commerce/products/${productName}`}>
                <img src={productImg} alt={productName} className="block m-auto h-60" />

                <div className="flex flex-row items-start justify-between my-4">
                    <p className="font-semibold text-slate-900">
                        {productName}
                    </p>

                    <div className="bg-slate-900 p-1 text-white flex flex-row items-start justify-center gap-1 rounded-lg">
                        {rating}
                        <FontAwesomeIcon icon="fa-solid fa-star" className="h-3" />
                    </div>
                </div>

                <div className="flex flex-row items-center justify-between mt-8">
                    <p>
                        <span className="font-semibold text-slate-900">
                            &#8377;
                            {discountedPrice}
                        </span>
                        <span className="ml-2 line-through text-slate-500 font-thin">
                            &#8377;{originalPrice}
                        </span>
                    </p>
                    <p className="font-semibold text-green-600">{discountPercentage}% OFF</p>
                </div>
            </Link>

            <button
                className="bg-slate-900 border-2 border-slate-900 text-white w-full mt-4 rounded-md py-[6px] tracking-wider uppercase hover:text-slate-900 hover:bg-white duration-300"
                onClick={handleCartAction}
            >
                {isAddedInCart ? 'Remove From Cart' : 'Add To Cart'}
            </button>
        </div>
    );
};

// PropTypes for ProductCard component
ProductCard.propTypes = {
    productDetails: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        originalPrice: PropTypes.number.isRequired,
        discountPercentage: PropTypes.number.isRequired
    }).isRequired
};
