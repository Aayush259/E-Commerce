import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useIsItemInCart, useIsItemInWishlist, useProducts, useUser } from '../../hooks/useStoreItems.js';
import useGetProducts from '../../hooks/useGetProducts.js';
import Loader from '../Loader.jsx';
import Rating from './Rating.jsx';
import { useDispatch } from 'react-redux';
import { addToCart, addToWishlist, removeFromCart, removeFromWishlist } from '../../app/product.js';
import { addProductIdToCart, addProductIdToWishlist, removeProductIdFromCart, removeProductIdFromWishlist } from '../../features/user/userSlice.js';

export default function ProductDetail() {

    const { user, isLoggedIn } = useUser();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Getting products in store if not exists.
    useGetProducts();

    // Getting product data from store.
    const productData = useProducts();

    // Getting product name from URL.
    const { productname } = useParams();

    // Function to check whether the item is already in cart or not.
    const isItemInCart = useIsItemInCart();

    // Function to check whether the item is already in wishlist or not.
    const isItemInWishlist = useIsItemInWishlist();

    // State for product whose details have to be shown.
    const [productDetails, setProductDetails] = useState(null);

    // State to check if the product is already in the cart or adding to cart.
    const [isAddingToCart, setIsAddingToCart] = useState(false);
    const [isAddedInCart, setIsAddedInCart] = useState(false);

    // State to check if the product is already in the wishlist or adding to wishlist.
    const [isAddingToWishlist, setIsAddingToWishlist] = useState(false);
    const [isAddedInWishlist, setIsAddedInWishlist] = useState(false);

    useEffect(() => {
        if (isLoggedIn && productData && productDetails) {
            setIsAddedInCart(user.cart.some(cartProdId => cartProdId === productDetails['_id']));
            setIsAddedInWishlist(user.wishlist.some(wishlistProdId => wishlistProdId === productDetails['_id']));
        }
    }, [productData, user, productDetails]);

    // Getting all product details from productData.
    useEffect(() => {
        if (!productData) return;

        setProductDetails(productData.filter(product => product['name'] === productname)[0]);
    }, [productData]);

    // Handle add/remove from cart.
    const handleCartAction = async () => {
        // If user is not logged in, redirect to login page.
        if (!isLoggedIn) {
            navigate("/E-Commerce/login")
            return;
        }

        setIsAddingToCart(true);

        const productId = productDetails['_id'];

        if (isAddedInCart) {
            try {
                await removeFromCart(productId);
                dispatch(removeProductIdFromCart(productId));
                setIsAddedInCart(false);
            } catch (error) {
                // Todo: Add toaster notification.
            }
        } else {
            try {
                await addToCart(productId);
                dispatch(addProductIdToCart(productId));
                setIsAddedInCart(true);
            } catch (error) {
                // Todo: Add toaster notification.
            }
        };

        setIsAddingToCart(false);
    };

    // Handle add/remove from wishlist.
    const handleWishlistAction = async () => {
        // If user is not logged in, redirect to login page.
        if (!isLoggedIn) {
            navigate("/E-Commerce/login")
            return;
        }

        setIsAddingToWishlist(true);

        const productId = productDetails['_id'];

        if (isAddedInWishlist) {
            try {
                await removeFromWishlist(productId);
                dispatch(removeProductIdFromWishlist(productId));
                setIsAddedInWishlist(false);
            } catch (error) {
                // Todo: Add toaster notification.
            }
        } else {
            try {
                await addToWishlist(productId);
                dispatch(addProductIdToWishlist(productId));
                setIsAddedInWishlist(true);
            } catch (error) {
                // Todo: Add toaster notification.
            }
        };

        setIsAddingToWishlist(false);
    };

    return (

        <div>
            {
                productDetails ? (
                    <div className="flex flex-col lg:flex-row lg:gap-4 p-4">
                        <div
                            className="mx-auto my-5 shadow-product-card-shadow w-fit p-10 rounded-xl overflow-hidden shrink-0 flex items-center justify-center"
                        >
                            <img src={productDetails['image']} alt={productDetails['name']} className="block m-auto max-h-60" />
                        </div>

                        <div className="px-4">
                            <h2
                                className="text-2xl lg:text-3xl font-semibold mt-8"
                            >
                                {productDetails['name']}
                            </h2>

                            <div className="mt-3">
                                <Rating rating={productDetails['rating']} />
                            </div>

                            <div className="text-2xl font-semibold mt-8 flex flex-row flex-wrap items-center justify-between gap-2">
                                <p>
                                    <span>
                                        &#8377;
                                        {
                                            productDetails['originalPrice'] - (productDetails['originalPrice'] * (productDetails['discountPercentage'] / 100))
                                        }
                                    </span>
                                    <span className="font-normal line-through ml-4 text-slate-400">
                                        &#8377;
                                        {productDetails['originalPrice']}
                                    </span>
                                </p>
                                <span className="text-green-600">
                                    {productDetails['discountPercentage']}% OFF
                                </span>
                            </div>

                            <div className="flex flex-row flex-wrap w-full items-center justify-center gap-4 text-lg mt-5 pb-2 border-b border-slate-800">

                                <button
                                    className={`flex-grow bg-slate-900 text-white hover:bg-white hover:text-slate-900 duration-300 py-3 px-1 border-2 border-slate-900 uppercase ${isAddingToCart ? "opacity-50" : "opacity-100"}`}
                                    onClick={handleCartAction}
                                    disabled={isAddingToCart}
                                >
                                    {
                                        isAddedInCart ? 'Remove From Cart' : 'Add To Cart'
                                    }
                                </button>

                                <button
                                    className={`flex-grow bg-white text-slate-900 hover:bg-slate-900 hover:text-white duration-300 py-3 px-1 border-2 border-slate-900 uppercase ${isAddingToWishlist ? "opacity-50" : "opacity-100"}`}
                                    onClick={handleWishlistAction}
                                    disabled={isAddingToWishlist}
                                >
                                    {
                                        isAddedInWishlist ? 'Remove From Wishlist' : 'Add To Wishlist'
                                    }
                                </button>
                            </div>

                            <div className="flex flex-col gap-2 text-sm sm:text-xl mt-4 mb-12">
                                <p>
                                    <span className="font-semibold">Brand: </span>
                                    {productDetails['brand']}
                                </p>

                                <p>
                                    <span className="font-semibold">Description: </span>
                                    {productDetails['description']}
                                </p>
                                
                                <p>
                                    <span className="font-semibold">Type: </span>
                                    {productDetails['category']}
                                </p>
                                
                                <p>
                                    <span className="font-semibold">Added In Year: </span>
                                    {productDetails['yearAdded']}
                                </p>
                            </div>
                        </div>
                    </div>
                ) : <Loader />
            }
        </div>
    );
};
