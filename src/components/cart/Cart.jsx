import React from 'react';
import CartItem from './CartItem.jsx';
import PlaceOrderWindow from './PlaceOrderWindow.jsx';
import { useCartItems } from '../../hooks/useStoreItems.js';

export default function Cart() {

    // Getting cartItems from store.
    const cartItems = useCartItems();

    return (
        <div>
            {
                cartItems.length <= 0 ? (
                    <p className="text-xl md:text-3xl font-semibold tracking-wider text-center my-10">
                        You haven't added anything in the cart yet.
                    </p>
                ) : (
                    <div
                        className="xl:flex-row flex-col flex xl:items-start items-center justify-between px-5"
                    >
                        <div className="flex flex-col gap-4 my-8">
                            {
                                cartItems.map(item => (
                                    <CartItem key={item['name']} item={item} />
                                ))
                            }
                        </div>

                        <div className="flex-grow lg:max-w-[50vw]">
                            <PlaceOrderWindow />
                        </div>
                    </div>
                )
            }
        </div>
    );
};
