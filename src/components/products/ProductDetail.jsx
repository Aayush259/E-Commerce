import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProducts, useUser } from '../../hooks/useStoreItems.js';
import Loader from '../Loader.jsx';
import Rating from './Rating.jsx';
import { useDispatch } from 'react-redux';
import { addToCart, addToWishlist, removeFromCart, removeFromWishlist } from '../../app/product.js';
import { addProductIdToCart, addProductIdToWishlist, removeProductIdFromCart, removeProductIdFromWishlist } from '../../features/user/userSlice.js';
import { useToast } from '../ToastContextProvider.jsx';
import { getProducts } from '../../features/product/productSlice.js';

export default function ProductDetail() {

    const { user, isLoggedIn } = useUser();
    const { addToast } = useToast();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Getting product data from store.
    const productData = useProducts();

    // Getting product name from URL.
    const { productname } = useParams();

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

    // Getting products in store if not exists.
    useEffect(() => {
        if (productData && productData.length <= 0) {
            dispatch(getProducts());
        }
    }, []);

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
                addToast(`Removed from cart.`, true);
            } catch (error) {
                addToast(`Failed to remove.`, false);
            }
        } else {
            try {
                await addToCart(productId);
                dispatch(addProductIdToCart(productId));
                setIsAddedInCart(true);
                addToast(`Added to cart.`, true);
            } catch (error) {
                addToast('Failed to add.', false);
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
                addToast('Removed from wishlist.', true);
            } catch (error) {
                addToast('Failed to remove.', false);
            }
        } else {
            try {
                await addToWishlist(productId);
                dispatch(addProductIdToWishlist(productId));
                setIsAddedInWishlist(true);
                addToast('Added to wishlist.', true);
            } catch (error) {
                addToast('Failed to add.', false);
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
