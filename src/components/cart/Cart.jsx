import React, { useEffect, useState } from 'react';
import CartItem from './CartItem.jsx';
import PlaceOrderWindow from './PlaceOrderWindow.jsx';
import { useUser } from '../../hooks/useStoreItems.js';
import { clearCart, getCart } from '../../app/product.js';
import Loader from '../Loader.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { clearCartIds } from '../../features/user/userSlice.js';
import { Link } from 'react-router-dom';

export default function Cart() {

    const { user, isLoggedIn } = useUser();

    const dispatch = useDispatch();

    const [gettingCartItems, setGettingCartItems] = useState(true);
    const [cartItemsError, setCartItemsError] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const [orderPlaced, setOrderPlaced] = useState(false);

    const getCartItems = async () => {

        setGettingCartItems(true);

        try {
            let cart = await getCart();
            cart = cart.map(item => ({
                ...item,
                count: 1
            }));
            setCartItems(cart);
        } catch (error) {
            setCartItemsError(true);
        } finally {
            setGettingCartItems(false);
        }
    };

    useEffect(() => {
        if (isLoggedIn) {
            getCartItems();
        }
    }, [user]);

    useEffect(() => {
        const clearCartAndOrderPlaced = async () => {
            setGettingCartItems(true);
            if (orderPlaced) {
                try {
                    await clearCart();
                    dispatch(clearCartIds());
                } catch (error) {
                    // Todo: Add toaster notification.
                }
            }
            setGettingCartItems(false);
        }

        clearCartAndOrderPlaced();
    }, [orderPlaced]);

    const incrementItemCount = (itemId) => {
        const updatedCartItems = cartItems.map(item => {
            if (item._id === itemId) {
                return { ...item, count: item.count + 1 };
            }
            return item;
        });
        setCartItems(updatedCartItems);
    }

    const decrementItemCount = (itemId) => {
        const updatedCartItems = cartItems.map(item => {
            if (item._id === itemId) {
                return { ...item, count: item.count - 1 };
            }
            return item;
        });
        setCartItems(updatedCartItems);
    }

    return (
        <div>
            {
                gettingCartItems ? <Loader /> : cartItemsError ? (
                    <p className="text-xl md:text-3xl font-semibold tracking-wider text-center my-10">
                        Something went wrong. Please try again later.
                    </p>
                ) : cartItems.length <= 0 ? (
                    <p className="text-xl md:text-3xl font-semibold tracking-wider text-center my-10">
                        You haven't added anything in the cart yet.
                    </p>
                ) : (
                    <div
                        className="xl:flex-row flex-col flex xl:items-start items-center justify-center gap-8 px-5"
                    >
                        <div className="flex flex-col gap-4 my-8">
                            {
                                cartItems.map(item => (
                                    <CartItem key={item['_id']} item={item} incrementItemCount={incrementItemCount} decrementItemCount={decrementItemCount} />
                                ))
                            }
                        </div>

                        <div className="sticky w-full -bottom-14 xl:top-20 z-10 flex-grow lg:max-w-[30vw]">
                            <PlaceOrderWindow cartItems={cartItems} setOrderPlaced={setOrderPlaced} />
                        </div>
                    </div>
                )
            }

            {orderPlaced && !gettingCartItems && <div className="bg-black/50 fixed h-screen w-screen top-0 left-0 z-10 flex items-center justify-center">
                <Link to={"/E-Commerce/products"} className="absolute top-20 right-4 text-5xl text-white z-[10]">x</Link>
                <div className="bg-white p-8 rounded-xl text-2xl flex items-center gap-4">
                    Thanks for your order <FontAwesomeIcon
                        icon="fa-solid fa-heart"
                        className="h-8 text-red-600"
                    />
                </div>
            </div>}

        </div>
    );
};
